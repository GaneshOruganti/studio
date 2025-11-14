
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, MapPin, Search, X, Star, Briefcase, DollarSign, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { jobOpenings, type Job } from "@/lib/jobs";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
};

type View = "all" | "saved";

const JOBS_PER_PAGE = 8;

export default function CareerPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [view, setView] = useState<View>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const jobCategories = [...Array.from(new Set(jobOpenings.map(job => job.category)))];
  const jobTypes = [...Array.from(new Set(jobOpenings.map(job => job.type)))];
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setKeyword("");
    setSelectedCategories([]);
    setSelectedTypes([]);
    setCurrentPage(1);
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const allFilteredJobs = jobOpenings.filter(job => {
    const keywordMatch = keyword === "" || job.title.toLowerCase().includes(keyword.toLowerCase()) || job.description.toLowerCase().includes(keyword.toLowerCase());
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(job.type);
    return keywordMatch && categoryMatch && typeMatch;
  });

  const jobsToList = view === 'saved'
    ? allFilteredJobs.filter(job => savedJobs.includes(job.id))
    : allFilteredJobs;

  const totalPages = Math.ceil(jobsToList.length / JOBS_PER_PAGE);
  const paginatedJobs = jobsToList.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

  const switchView = (newView: View) => {
    setView(newView);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="container py-12 md:py-24">
        <div className="text-center mb-12 services-anim">
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Join Our Team
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Explore exciting career opportunities at Speedopus India and be part of a team that's shaping the future of technology.
            </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4 services-anim">
              <div className="flex items-center gap-2 border-b">
                <Button variant="ghost" onClick={() => switchView('all')} className={cn("rounded-none border-b-2", view === 'all' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground')}>
                  All Jobs ({jobsToList.length})
                </Button>
                <Button variant="ghost" onClick={() => switchView('saved')} className={cn("rounded-none border-b-2", view === 'saved' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground')}>
                  Saved Jobs ({savedJobs.length})
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Sort by</span>
                <Select defaultValue="relevancy">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Relevancy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevancy">Relevancy</SelectItem>
                    <SelectItem value="date-posted">Date Posted</SelectItem>
                    <SelectItem value="job-title">Job Title</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6">
              {paginatedJobs.length > 0 ? (
                paginatedJobs.map((job, i) => (
                  <div key={job.id} className="services-card-anim" style={{ animationDelay: `${i * 100}ms` }}>
                    <Card
                      className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                          <div className="flex-grow">
                              <Link href={`/career/${job.id}`} className="block">
                                  <h3 className="text-xl font-bold text-primary hover:underline">{job.title}</h3>
                              </Link>
                              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mt-2">
                                  <div className="flex items-center gap-2">
                                      <MapPin className="h-4 w-4" /> {job.location}
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <Briefcase className="h-4 w-4" /> {job.type}
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <DollarSign className="h-4 w-4" /> {job.salary}
                                  </div>
                              </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => toggleSaveJob(job.id)}>
                              <Star className={cn("h-5 w-5", savedJobs.includes(job.id) ? "fill-primary text-primary" : "text-muted-foreground")} />
                              <span className="sr-only">Save Job</span>
                            </Button>
                            <Button asChild>
                              <Link href={`/career/${job.id}`}>
                                Apply <ArrowRight className="ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground col-span-full services-anim">
                  {view === 'saved' ? "You haven't saved any jobs yet." : "No open positions match your criteria."}
                </p>
              )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8 services-anim">
                    <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <ArrowLeft className="mr-2" />
                        Previous
                    </Button>
                    <span className="text-sm font-medium text-muted-foreground">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                        <ArrowRight className="ml-2" />
                    </Button>
                </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 lg:col-span-1 services-anim">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Refine search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="keyword" className="font-semibold">Keyword</Label>
                  <div className="flex mt-2">
                    <Input 
                      id="keyword" 
                      placeholder="Enter keyword"
                      value={keyword}
                      onChange={(e) => {
                        setKeyword(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="rounded-r-none focus:z-10"
                    />
                    <Button className="rounded-l-none" aria-label="Search">
                      <Search />
                    </Button>
                  </div>
                </div>
                
                <Accordion type="multiple" defaultValue={['category', 'job-type']} className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger className="font-semibold">Category</AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2">
                      {jobCategories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`cat-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label htmlFor={`cat-${category}`} className="font-normal cursor-pointer">{category}</Label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="job-type">
                    <AccordionTrigger className="font-semibold">Job Type</AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2">
                      {jobTypes.map(type => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`type-${type}`}
                            checked={selectedTypes.includes(type)}
                            onCheckedChange={() => handleTypeChange(type)}
                          />
                          <Label htmlFor={`type-${type}`} className="font-normal cursor-pointer">{type}</Label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  <X className="mr-2" />
                  Clear All Filters
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
