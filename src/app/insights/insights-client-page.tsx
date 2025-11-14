
"use client";

import { useActionState, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getInsights, type InsightsState } from '@/lib/actions';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Terminal, Lightbulb } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Generate Insights
    </Button>
  );
}

const sampleQuestions = [
  "Suggest a cloud migration strategy for a growing e-commerce business.",
  "What are the benefits of a CRM for a real estate agency?",
  "How can AI improve customer support for a SaaS company?",
  "What are some effective digital marketing strategies for a local restaurant?",
];

export default function InsightsClientPage() {
  const initialState: InsightsState = { message: '' };
  const [state, dispatch] = useActionState(getInsights, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const promptTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSampleQuestionClick = (question: string) => {
    if (promptTextareaRef.current && formRef.current) {
      promptTextareaRef.current.value = question;
      formRef.current.requestSubmit();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="container py-12 md:py-24">
        <div className="text-center mb-12 services-anim">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            AI-Powered Strategic Insights
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Harness the power of AI to get instant insights and strategic recommendations for your business technology needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form ref={formRef} action={dispatch} className="services-card-anim">
            <Card>
              <CardHeader>
                <CardTitle>AI Strategy Assistant</CardTitle>
                <CardDescription>
                  Enter a business challenge or goal to get AI-driven strategic advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="prompt">Your Business Prompt</Label>
                    <Textarea ref={promptTextareaRef} id="prompt" name="prompt" placeholder="Describe your business goal or technology challenge..." rows={5} />
                    {state?.errors?.prompt &&
                      state.errors.prompt.map((error: string) => (
                        <p className="text-sm font-medium text-destructive" key={error}>{error}</p>
                      ))
                    }
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </Card>
          </form>

          <div className="mt-12 services-card-anim" style={{ animationDelay: '150ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-primary" />
              Need inspiration? Try one of these:
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {sampleQuestions.map((question, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className="text-left h-auto justify-start"
                  onClick={() => handleSampleQuestionClick(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {state?.message === 'An error occurred while generating insights.' && (
            <Alert variant="destructive" className="mt-8 services-anim">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          )}

          {state?.data && (
            <Card className="mt-8 services-anim">
              <CardHeader>
                <CardTitle>Generated Insights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-foreground whitespace-pre-wrap">
                <p>{state.data.insights}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
