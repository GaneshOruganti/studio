
"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getInsights, type InsightsState } from '@/lib/actions';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Generate Insights
    </Button>
  );
}

export default function InsightsPage() {
  const initialState: InsightsState = { message: '' };
  const [state, dispatch] = useFormState(getInsights, initialState);

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            AI-Powered Insights
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Leverage AI to analyze market data and uncover valuable customer pain points and opportunities.
          </p>
        </div>

        <form action={dispatch} className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Market Research Tool</CardTitle>
              <CardDescription>
                Enter a topic or question to get AI-driven insights. For example, "What are the common challenges for remote workers?" or "Analyze customer sentiment for our new product line."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="prompt">Your Research Prompt</Label>
                  <Textarea id="prompt" name="prompt" placeholder="Describe your research objective..." rows={5} />
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

        {state?.message === 'An error occurred while generating insights.' && (
          <Alert variant="destructive" className="mt-8 max-w-3xl mx-auto">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        )}

        {state?.data && (
          <Card className="mt-8 max-w-3xl mx-auto">
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
  );
}
