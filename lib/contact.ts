export type ContactMessage = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export type ContactAdapter = {
  submit(message: ContactMessage): Promise<void>;
};

export function createMailtoUrl(recipient: string, message: ContactMessage): string {
  const subject = encodeURIComponent(`Project enquiry from ${message.name}`);
  const body = encodeURIComponent(
    `Name: ${message.name}\nEmail: ${message.email}\nProject: ${message.projectType}\n\n${message.message}`,
  );
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
