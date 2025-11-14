
'use client';

import dynamic from 'next/dynamic';

// Dynamically import the contact form with SSR turned off.
// This ensures it only renders on the client, avoiding hydration mismatches.
const ContactForm = dynamic(() => import('./contact-form'), {
  ssr: false,
  // Optional: you can add a loading component here
  // loading: () => <p>Loading form...</p>
});

export default function ContactClientLoader() {
  return <ContactForm />;
}
