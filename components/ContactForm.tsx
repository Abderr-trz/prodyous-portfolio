"use client";

import { useState, type FormEvent } from "react";
import { createMailtoUrl, type ContactMessage } from "@/lib/contact";

export function ContactForm({ recipient }: { recipient: string }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message: ContactMessage = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      projectType: String(data.get("projectType") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
    window.location.href = createMailtoUrl(recipient, message);
    setStatus("Your email application should now be open with this enquiry filled in.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label><span>Name</span><input name="name" autoComplete="name" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
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
      <button className="text-button" type="submit">Open enquiry in email</button>
      <p className="form-note">This form uses your email application. Nothing is sent or stored by this website.</p>
      <p className="sr-only" aria-live="polite">{status}</p>
    </form>
  );
}
