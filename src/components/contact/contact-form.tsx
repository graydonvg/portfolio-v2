"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Flip, toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { contactFormSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useState } from "react";

type EmailTemplate = {
  to_name: string;
  from_name: string;
  reply_to: string;
  message: string;
};

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function sendEmail(emailData: EmailTemplate) {
    setIsSending(true);

    const loadingToastId = toast.loading("Sending email");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        emailData,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000,
          },
        },
      )
      .then(
        () => {
          toast.update(loadingToastId, {
            type: "success",
            render: "Thank you for your message. I will get back to you soon!",
            isLoading: false,
            autoClose: null,
            closeButton: null,
            closeOnClick: null,
            transition: Flip,
          });

          form.reset();
        },
        () => {
          toast.update(loadingToastId, {
            type: "error",
            render:
              "There was an error sending your message. Please try again later.",
            isLoading: false,
            autoClose: null,
            closeButton: null,
            closeOnClick: null,
            transition: Flip,
          });
        },
      )
      .catch(() => {
        toast.update(loadingToastId, {
          type: "error",
          render:
            "There was an error sending your message. Please try again later.",
          isLoading: false,
          autoClose: null,
          closeButton: null,
          closeOnClick: null,
          transition: Flip,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const emailData = {
      to_name: "Graydon",
      from_name: values.name,
      reply_to: values.email,
      message: values.message,
    };

    await sendEmail(emailData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name" className="text-lg">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Your name *"
                  autoComplete="name"
                  className={cn("text-lg", {
                    "outline outline-red-500 focus:ring-red-500":
                      form.formState.errors.name &&
                      form.formState.errors.name.message,
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email" className="text-lg">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="email"
                  type="text"
                  placeholder="Your email address *"
                  autoComplete="email"
                  className={cn("text-lg", {
                    "outline outline-red-500 focus:ring-red-500":
                      form.formState.errors.email &&
                      form.formState.errors.email.message,
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message" className="text-lg">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="message"
                  placeholder="Your message *"
                  className={cn("h-[300px] resize-none text-lg", {
                    "outline outline-red-500 focus:ring-red-500":
                      form.formState.errors.message &&
                      form.formState.errors.message.message,
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            type="submit"
            disabled={isSending}
            className="mt-4 px-10 sm:mt-6"
          >
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
