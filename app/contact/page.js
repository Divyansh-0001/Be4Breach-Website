"use client";

import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (values) => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.company.trim()) {
      nextErrors.company = "Please enter your company.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please share a short message.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Contact
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Start a secure conversation.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          Connect with our security team for enterprise readiness assessments,
          AI-driven defense planning, and rapid response support.
        </p>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          {isSubmitted ? (
            <div className="mb-6 rounded-lg border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-white">
              Thank you for reaching out. Our team will respond within one
              business day.
            </div>
          ) : null}
          <form
            className="space-y-4 rounded-lg border border-brand-white/10 bg-brand-black/60 p-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.35em] text-brand-white/60"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`mt-2 w-full rounded-md border bg-brand-black/80 px-3 py-2 text-sm text-brand-white outline-none transition focus:border-brand-red/70 focus:ring-1 focus:ring-brand-red/70 ${
                  errors.name ? "border-brand-red/70" : "border-brand-white/10"
                }`}
                placeholder="Jordan Lee"
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-xs text-brand-red">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.35em] text-brand-white/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`mt-2 w-full rounded-md border bg-brand-black/80 px-3 py-2 text-sm text-brand-white outline-none transition focus:border-brand-red/70 focus:ring-1 focus:ring-brand-red/70 ${
                  errors.email ? "border-brand-red/70" : "border-brand-white/10"
                }`}
                placeholder="jordan@company.com"
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-xs text-brand-red">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="company"
                className="text-xs uppercase tracking-[0.35em] text-brand-white/60"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "company-error" : undefined}
                className={`mt-2 w-full rounded-md border bg-brand-black/80 px-3 py-2 text-sm text-brand-white outline-none transition focus:border-brand-red/70 focus:ring-1 focus:ring-brand-red/70 ${
                  errors.company
                    ? "border-brand-red/70"
                    : "border-brand-white/10"
                }`}
                placeholder="Before Breach"
              />
              {errors.company ? (
                <p id="company-error" className="mt-2 text-xs text-brand-red">
                  {errors.company}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.35em] text-brand-white/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`mt-2 w-full rounded-md border bg-brand-black/80 px-3 py-2 text-sm text-brand-white outline-none transition focus:border-brand-red/70 focus:ring-1 focus:ring-brand-red/70 ${
                  errors.message
                    ? "border-brand-red/70"
                    : "border-brand-white/10"
                }`}
                placeholder="Tell us about your security priorities."
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-brand-red">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full rounded-md border border-brand-red bg-brand-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-black transition hover:bg-brand-white hover:text-brand-black"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="space-y-4 rounded-lg border border-brand-white/10 bg-brand-black/60 p-6 text-sm text-brand-white/70">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
              Contact details
            </p>
            <p className="mt-3">security@beforebreach.example</p>
            <p className="mt-2">+1 (555) 010-2901</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
              Response time
            </p>
            <p className="mt-3">
              We respond within one business day for new inquiries.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
              Trusted intake
            </p>
            <p className="mt-3">
              Secure intake workflows and confidential handling for enterprise
              clients.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
