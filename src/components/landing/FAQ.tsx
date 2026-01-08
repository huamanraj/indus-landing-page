"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does pricing work?",
      answer:
        "It's based on call minutes, phone numbers, integrations, and deployment requirements. Book a demo and we'll quote accurately based on your specific needs.",
    },
    {
      question: "Can Mercury transfer to a human?",
      answer:
        "Yes. Set rules for warm transfer based on intent, sentiment, keywords, or VIP callers. Mercury can pass a summary and context to ensure seamless handoffs.",
    },
    {
      question: "Does it integrate with my CRM and tools?",
      answer:
        "Yes. Use native integrations where available or connect any REST API via tool calling. We support Salesforce, HubSpot, Zendesk, and more out of the box.",
    },
    {
      question: "How do you prevent hallucinations or risky behavior?",
      answer:
        "You set guardrails: approved knowledge, allowed actions, restricted phrases, and escalation rules. Everything is observable and auditable.",
    },
    {
      question: "How fast can we go live?",
      answer:
        "Most teams launch a working agent quickly, then iterate based on real call outcomes. Up and running in less than 15 minutes for simple use cases.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container max-w-[800px] mx-auto px-6">
        <Reveal className="text-center mb-12">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-white">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border-light py-6">
              <div
                className="text-[16px] sm:text-[18px] font-medium text-white cursor-pointer flex justify-between items-center gap-4 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="group-hover:text-accent-primary transition-colors">
                  {faq.question}
                </span>
                <i
                  className={`ph ph-plus transition-transform duration-300 text-text-secondary group-hover:text-accent-primary flex-shrink-0 ${
                    openIndex === index ? "rotate-45 text-accent-primary" : ""
                  }`}
                ></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-text-secondary text-[14px] sm:text-[15px] leading-[1.7] ${
                  openIndex === index
                    ? "max-h-[200px] mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
