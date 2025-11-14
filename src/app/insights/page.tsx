
import { type Metadata } from "next";
import InsightsClientPage from "./insights-client-page";

export const metadata: Metadata = {
    title: "AI Insights",
};

export default function InsightsPage() {
  return <InsightsClientPage />;
}
