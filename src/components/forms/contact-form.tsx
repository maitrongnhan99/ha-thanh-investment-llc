'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const inputClassName = 'h-12 rounded-full px-4 py-3 text-base md:text-base';
const textareaClassName =
  'min-h-36 rounded-2xl px-4 py-3 text-base md:text-base';

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    // TODO: wire Server Action or email API
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-border bg-card rounded-xl border p-8 text-center">
        <p className="text-ink text-lg font-medium">
          Thank you for your message
        </p>
        <p className="text-body mt-2 text-sm">
          We will get back to you as soon as possible. For urgent requests,
          please call us directly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setValues(initialState);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input
            id="contact-name"
            name="name"
            className={inputClassName}
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name && <FieldError>{errors.name}</FieldError>}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            className={inputClassName}
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-phone">Phone (optional)</FieldLabel>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            className={inputClassName}
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            autoComplete="tel"
          />
        </Field>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            className={textareaClassName}
            value={values.message}
            onChange={(e) => handleChange('message', e.target.value)}
            aria-invalid={!!errors.message}
          />
          {errors.message && <FieldError>{errors.message}</FieldError>}
        </Field>

        <Button type="submit" className="h-12 w-full px-8 text-base sm:w-auto">
          Send message
        </Button>
      </FieldGroup>
    </form>
  );
}
