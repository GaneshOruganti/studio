
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Briefcase, ExternalLink, DollarSign, Search, Plus, X } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { jobOpenings } from "@/lib/jobs";


export default function CareerPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const jobCategories = [...Array.from(new Set(jobOpenings.map(job => job.category)))];
  const jobTypes = [...Array.from(new Set(jobOpenings.map(job => job.type)))];
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setKeyword("");
    setSelectedCategories([]);
    setSelectedTypes([]);
  };

  const filteredJobs = jobOpenings.filter(job => {
    const keywordMatch = keyword === "" || job.title.toLowerCase().includes(keyword.toLowerCase()) || job.description.toLowerCase().includes(keyword.toLowerCase());
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(job.type);
    return keywordMatch && categoryMatch && typeMatch;
  });

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
              <h1 className="text-3xl font-bold font-headline tracking-tighter">
                We found {filteredJobs.length} jobs
              </h1>
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
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                          <Link href={`/career/${job.id}`} className="block">
                            <h3 className="text-xl font-bold text-primary hover:underline">{job.title}</h3>
                          </Link>
                          <div className="flex items-center gap-2 text-muted-foreground mt-2">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Button asChild>
                            <Link href={`/career/${job.id}`}>
                              Apply <ArrowRight className="ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center text-muted-foreground col-span-full">No open positions match your criteria.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 lg:col-span-1">
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
                      onChange={(e) => setKeyword(e.target.value)}
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
