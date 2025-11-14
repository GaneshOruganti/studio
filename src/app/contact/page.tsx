import { type Metadata } from "next";
import ContactClientPage from "./contact-form";

export const metadata: Metadata = {
    title: "Contact Us",
};

export default function ContactPage() {
  return <ContactClientPage />;
}
