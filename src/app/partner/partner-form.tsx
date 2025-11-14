
"use client";

import { useState, type FormEvent } from 'react';
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

export default function PartnerForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    companyName: '',
    userType: '',
    proposal: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, userType: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Partnership Proposal from ${formState.name}`;
    const body = `
Full Name: ${formState.name}
Email Address: ${formState.email}
Phone Number: ${formState.phone}
Location: ${formState.location}
Company Name: ${formState.companyName || 'N/A'}
I am a...: ${formState.userType}

Partnership Proposal:
${formState.proposal}
    `;
    window.location.href = `mailto:contact@speedopus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="container py-12 md:py-24">
        <div className="text-center mb-12 services-anim">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            Partner With Us
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We believe in the power of collaboration. Let's work together to
            create something amazing.
          </p>
        </div>

        <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 max-w-3xl mx-auto services-card-anim">
          <CardHeader>
            <CardTitle>Partnership Application</CardTitle>
            <CardDescription>
              Fill out the form below to explore partnership opportunities with
              Speedopus India.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" value={formState.name} onChange={handleInputChange} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" value={formState.email} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 1234567890" value={formState.phone} onChange={handleInputChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" placeholder="City, Country" value={formState.location} onChange={handleInputChange} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-name">Company Name (Optional)</Label>
                <Input id="company-name" name="companyName" placeholder="Your Company, Inc." value={formState.companyName} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-type">I am a...</Label>
                <Select name="userType" onValueChange={handleSelectChange} required>
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
                  name="proposal"
                  placeholder="Tell us about your proposal, your goals, and how we can collaborate..."
                  rows={6}
                  value={formState.proposal}
                  onChange={handleInputChange}
                  required
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
