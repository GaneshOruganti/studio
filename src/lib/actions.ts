'use server';

import {
  generateMarketResearchInsights,
  type MarketResearchInput,
} from '@/ai/flows/generate-market-research-insights';
import { z } from 'zod';
import admin from 'firebase-admin';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  try {
    // This check is to prevent re-initialization in hot-reload environments
    if (process.env.FIREBASE_PRIVATE_KEY) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    } else {
        console.warn("Firebase Admin SDK not initialized. Missing environment variables.");
    }
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
  }
}

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
  
  if (!admin.apps.length) {
    console.error('Firebase Admin SDK is not initialized. Cannot submit contact form.');
    return {
      message: 'Server error: Firebase connection not available.',
    };
  }

  try {
    const firestore = admin.firestore();
    const submission = {
      ...validatedFields.data,
      submissionDate: new Date(),
    };
    await firestore.collection('contactSubmissions').add(submission);

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
