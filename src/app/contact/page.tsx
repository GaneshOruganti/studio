
import { type Metadata } from "next";
import ContactClientLoader from "./contact-client-loader";

export const metadata: Metadata = {
    title: "Contact Us",
};

export default function ContactPage() {
  return <ContactClientLoader />;
}
