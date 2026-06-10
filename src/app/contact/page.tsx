"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Opens native mail client — swap for a real form endpoint (e.g. Resend, Formspree, or a Next.js route handler)
    const body = encodeURIComponent(`${fields.message}\n\nFrom: ${fields.name}`);
    window.location.href = `mailto:nnhenry99@gmail.com?subject=${encodeURIComponent(fields.subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left — info */}
          <AnimatedSection>
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 mb-5">
              Let&apos;s talk.
            </h1>
            <p className="text-zinc-500 leading-relaxed mb-10">
              Whether you&apos;re looking for a designer to join your team, want to
              collaborate on something interesting, or just want to say hi, I&apos;d
              love to hear from you.
            </p>

            <div className="space-y-5">
              <ContactItem
                icon={
                  <path d="M2 4h10v8H2zM2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                }
                label="Email"
                value="nnhenry99@gmail.com"
                href="mailto:nnhenry99@gmail.com"
              />
              <ContactItem
                icon={
                  <path d="M2 6a4 4 0 018 0c0 4-4 6-4 6S2 10 2 6z M6 6a1 1 0 100-2 1 1 0 000 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                }
                label="Location"
                value="Washington, D.C."
              />
              <ContactItem
                icon={
                  <path d="M2 3h10v8H2zM5 6h4M5 8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                }
                label="LinkedIn"
                value="linkedin.com/in/noah-henry-ux"
                href="https://linkedin.com/in/noah-henry-ux"
              />
            </div>

            <div className="mt-12 pt-10 border-t border-zinc-100">
              <p className="text-sm text-zinc-400 leading-relaxed">
                I typically respond within 1–2 business days. If your request is
                time-sensitive, feel free to note that in your message.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.1}>
            {sent ? (
              <div className="bg-indigo-50 rounded-2xl p-10 text-center border border-indigo-100">
                <div className="text-3xl mb-4">✓</div>
                <h2 className="text-xl font-semibold text-zinc-900 mb-2">Message sent!</h2>
                <p className="text-zinc-500 text-sm">
                  Your email client opened with the message pre-filled. I&apos;ll be in
                  touch soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option>Full-time role</option>
                    <option>Freelance / Contract</option>
                    <option>Collaboration</option>
                    <option>Just saying hi</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me a bit about what you're working on or what you have in mind..."
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-zinc-700 transition-colors"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-zinc-700 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
      />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          {icon}
        </svg>
      </div>
      <div>
        <div className="text-xs text-zinc-400">{label}</div>
        <div className="text-sm font-medium text-zinc-700">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:opacity-70 transition-opacity">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}
