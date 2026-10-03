"use client";

import { useState, type FormEvent } from "react";
import { createWhatsAppUrl, type ContactMessage } from "@/lib/contact";

export function ContactForm({ whatsappNumber }: { whatsappNumber: string }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message: ContactMessage = {
      name: String(data.get("name") ?? "").trim(),
      contact: String(data.get("contact") ?? "").trim(),
      projectType: String(data.get("projectType") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
    window.open(createWhatsAppUrl(whatsappNumber, message), "_blank", "noopener,noreferrer");
    setStatus("WhatsApp should now be open with your enquiry filled in.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label><span>Name</span><input name="name" autoComplete="name" required /></label>
        <label><span>Phone / WhatsApp</span><input name="contact" type="tel" autoComplete="tel" required /></label>
      </div>
      <label>
        <span>What are we making?</span>
        <select name="projectType" defaultValue="" required>
          <option value="" disabled>Choose a project type</option>
          <option>Photography campaign</option>
          <option>Editorial</option>
          <option>Film</option>
          <option>Something else</option>
        </select>
      </label>
      <label><span>Tell us about it</span><textarea name="message" rows={6} required /></label>
      <button className="text-button" type="submit">Continue on WhatsApp</button>
      <p className="form-note">Your message will open in WhatsApp. Nothing is sent or stored by this website.</p>
      <p className="sr-only" aria-live="polite">{status}</p>
    </form>
  );
}
