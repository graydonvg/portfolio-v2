"use client";

import ContactForm from "./contact-form";
import TypographyP from "../ui/typography/p";
import Link from "next/link";
import { EMAIL_ADDRESS, navLinks } from "@/lib/constants";
import TypographyH2 from "../ui/typography/h2";
import TypographyH3 from "../ui/typography/h3";
import { handleScrollToContactForm } from "@/lib/utils";

export default function ContactMe() {
  const navOptionsWithLinks = navLinks.filter((option) => option.externalLink);

  return (
    <div
      id="contact"
      className="mx-auto max-w-screen-2xl bg-card px-4 py-16 sm:py-24 md:px-8 lg:px-12 xl:px-[13.5rem]"
    >
      <TypographyH2>
        Contact <span className="text-accent">Me</span>
      </TypographyH2>

      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="text-center lg:text-left">
          <TypographyH3>
            I&apos;m seeking a full-time front-end developer role.
          </TypographyH3>
          <div className="mt-6 sm:mt-8">
            <TypographyP>
              Whether you&apos;d like to collaborate on a project, have a job
              offer, or just want to chat about code, send me a message, and
              I&apos;ll get back to you as soon as I can.
            </TypographyP>
            <div className="mt-4 text-lg sm:mt-6">
              <Link
                href={`mailto:${EMAIL_ADDRESS}`}
                className="focus-ring rounded-full text-blue-400 hover:text-blue-500 hover:underline"
                onFocus={handleScrollToContactForm}
              >
                {EMAIL_ADDRESS}
              </Link>{" "}
              -{" "}
              {navOptionsWithLinks.map((option, index) => {
                const isLastOption = index === navOptionsWithLinks.length - 1;

                return (
                  <span key={index}>
                    <Link
                      href={option?.externalLink ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-full text-blue-400 hover:text-blue-500 hover:underline"
                      onFocus={handleScrollToContactForm}
                    >
                      {option?.label}
                    </Link>
                    {!isLastOption ? <span> - </span> : null}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
