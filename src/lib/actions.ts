'use server';

import {
  generateMarketResearchInsights,
  type MarketResearchInput,
} from '@/ai/flows/generate-market-research-insights';
import { initializeFirebase } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import {z} from 'zod';

const insightsFormSchema = z.object({
  prompt: z.string().min(10, 'Prompt must be at least 10 characters long.'),
});

export type InsightsState = {
  message: string;
  data?: {insights: string};
  errors?: {
    prompt?: string[];
  };
};

export async function getInsights(
  prevState: InsightsState,
  formData: FormData
): Promise<InsightsState> {
  const validatedFields = insightsFormSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid prompt.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: MarketResearchInput = {prompt: validatedFields.data.prompt};
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

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { firestore } = initializeFirebase();
    const submission = {
      ...validatedFields.data,
      submissionDate: new Date(),
    };
    await addDoc(collection(firestore, 'contactSubmissions'), submission);

    return {
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'An error occurred while saving your message. Please try again.',
    };
  }
}
