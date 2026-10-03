export type ContactMessage = {
  name: string;
  contact: string;
  projectType: string;
  message: string;
};

export type ContactAdapter = {
  submit(message: ContactMessage): Promise<void>;
};

export function createWhatsAppUrl(recipient: string, message: ContactMessage): string {
  const body = encodeURIComponent(
    `Hello PRODYOUS, I'd like to discuss a project.\n\nName: ${message.name}\nPhone / WhatsApp: ${message.contact}\nProject: ${message.projectType}\n\n${message.message}`,
  );
  return `https://wa.me/${recipient}?text=${body}`;
}
