import { siteConfig } from "@/lib/site";

const message = "Hello PRODYOUS, I'd like to discuss a project.";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with PRODYOUS on WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M26.7 5.4A14.7 14.7 0 0 0 3.6 23.1L1.5 30l7.1-1.9a14.7 14.7 0 0 0 18.1-22.7Zm-10.6 21a12 12 0 0 1-6.1-1.7l-.4-.2-4.2 1.1 1.1-4.1-.3-.4a12 12 0 1 1 9.9 5.3Z" />
        <path d="M22.7 18.9c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.6-4.9-.4-.7.4-.7 1.2-2.2.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.5c.2.3 3.1 4.7 7.5 6.6 2.8 1.2 3.9 1.3 5.3 1.1 1-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.2-.4-.5-.5-.9-.7Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
