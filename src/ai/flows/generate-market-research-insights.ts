'use server';

/**
 * @fileOverview An AI-powered market research insights generator.
 *
 * - generateMarketResearchInsights - A function that generates market research insights based on user input.
 * - MarketResearchInput - The input type for the generateMarketResearchInsights function.
 * - MarketResearchOutput - The return type for the generateMarketResearchInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketResearchInputSchema = z.object({
  prompt: z.string().describe('A prompt related to market research.'),
});
export type MarketResearchInput = z.infer<typeof MarketResearchInputSchema>;

const MarketResearchOutputSchema = z.object({
  insights: z.string().describe('AI-driven insights on market research.'),
});
export type MarketResearchOutput = z.infer<typeof MarketResearchOutputSchema>;

const ResearchSourceSchema = z.object({
  name: z.string().describe('Name of the research source'),
  credibilityRating: z.number().describe('Credibility rating of the source (1-5, 5 being the most credible).'),
  content: z.string().describe('Content from the research source.'),
});

const getResearchSource = ai.defineTool(
  {
    name: 'getResearchSource',
    description: 'Retrieves content from a specified research source based on its credibility rating.',
    inputSchema: z.object({
      sourceName: z.string().describe('Name of the research source to retrieve.'),
      credibilityThreshold: z.number().describe('Minimum credibility rating (1-5) for the source to be considered credible.'),
    }),
    outputSchema: ResearchSourceSchema.nullable(),
  },
  async (input) => {
    // Placeholder implementation - replace with actual data retrieval logic
    console.log(`Tool: getResearchSource called with ${JSON.stringify(input)}`);
    if (input.sourceName === 'Example Source' && input.credibilityThreshold <= 3) {
      return {
        name: 'Example Source',
        credibilityRating: 3,
        content: 'Example content from a source with a credibility rating of 3.',
      };
    }
    if (input.sourceName === 'High Credibility Source' && input.credibilityThreshold <= 5) {
      return {
        name: 'High Credibility Source',
        credibilityRating: 5,
        content: 'Highly credible content for market research insights.',
      };
    }
    return null;
  }
);

export async function generateMarketResearchInsights(input: MarketResearchInput): Promise<MarketResearchOutput> {
  return generateMarketResearchInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketResearchInsightsPrompt',
  input: {schema: MarketResearchInputSchema},
  output: {schema: MarketResearchOutputSchema},
  tools: [getResearchSource],
  system: `You are an AI-powered market research assistant. Your goal is to provide insights on market research based on user input.

  You have access to a tool called 'getResearchSource' which allows you to retrieve content from different research sources based on their credibility rating.
  Use this tool to gather information from credible sources to identify customer pain points and opportunities.
  Prioritize sources with higher credibility ratings.

  If the user's prompt requires information from a specific source, use the 'getResearchSource' tool to retrieve the information.
  Otherwise, use your own knowledge and reasoning to provide the best possible insights.
  Do not make up information, always refer to credible sources.
  If you use the getResearchSource tool, use the following format:
  Source Name: {sourceName}
  Credibility Rating: {credibilityRating}
  Content: {content}

  Always cite your sources.
  
  IMPORTANT: Do not use any markdown formatting in your response. For example, do not use asterisks for bullet points.
  `,
  prompt: `User Input: {{{prompt}}}`, // Directly use user input in the prompt.
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateMarketResearchInsightsFlow = ai.defineFlow(
  {
    name: 'generateMarketResearchInsightsFlow',
    inputSchema: MarketResearchInputSchema,
    outputSchema: MarketResearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
