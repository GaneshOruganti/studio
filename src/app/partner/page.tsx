
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Handshake } from "lucide-react";

export default function PartnerPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            Partner With Us
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We believe in the power of collaboration. Let's work together to
            create something amazing.
          </p>
        </div>

        <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Partnership Opportunities</CardTitle>
            <CardDescription>
              Fill out the form below to explore partnership opportunities with
              Branch Edge.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 1234567890" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-name">Company Name (Optional)</Label>
                <Input id="company-name" placeholder="Your Company, Inc." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-type">I am a...</Label>
                <Select>
                  <SelectTrigger id="user-type">
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">College Student</SelectItem>
                    <SelectItem value="professional">
                      Working Professional
                    </SelectItem>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="proposal">Partnership Proposal</Label>
                <Textarea
                  id="proposal"
                  placeholder="Tell us about your proposal, your goals, and how we can collaborate..."
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto justify-self-end">
                <Handshake className="mr-2" />
                Submit Proposal
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
