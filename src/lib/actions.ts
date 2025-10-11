"use server";

import { 
  generateMarketResearchInsights, 
  type MarketResearchInput 
} from '@/ai/flows/generate-market-research-insights';
import { z } from 'zod';

const formSchema = z.object({
  prompt: z.string().min(10, "Prompt must be at least 10 characters long."),
});

export type InsightsState = {
  message: string;
  data?: { insights: string };
  errors?: {
    prompt?: string[];
  };
};

export async function getInsights(prevState: InsightsState, formData: FormData): Promise<InsightsState> {
  const validatedFields = formSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid prompt.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: MarketResearchInput = { prompt: validatedFields.data.prompt };
    const result = await generateMarketResearchInsights(input);
    return {
      message: 'Success',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating insights.',
    };
  }
}
