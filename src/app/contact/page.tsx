
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto justify-self-end">
      {pending ? <Loader2 className="mr-2 animate-spin" /> : <Send className="mr-2" />}
      Send Message
    </Button>
  );
}

export default function ContactPage() {
  const initialState: ContactFormState = { message: '' };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'Your message has been sent successfully!') {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message && state.message !== 'Invalid form data.') {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 services-anim">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto services-card-anim">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Please fill in your details and your message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={dispatch} className="grid gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                  {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={6} />
                {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
