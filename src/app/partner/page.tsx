
import { type Metadata } from "next";
import PartnerForm from "./partner-form";

export const metadata: Metadata = {
    title: "Partner With Us",
};

export default function PartnerPage() {
  return <PartnerForm />;
}
