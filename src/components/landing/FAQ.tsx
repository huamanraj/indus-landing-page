"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the average latency?",
      answer:
        "Indus is optimized for conversational speed. Our average end-to-end latency (voice-to-voice) is under 500ms, creating a natural feeling of conversation without awkward pauses.",
    },
    {
      question: "Can the AI transfer calls to a human?",
      answer:
        'Yes. You can configure "handoff triggers" (e.g., if sentiment turns negative or specific keywords are mentioned) to warm-transfer calls to a specific SIP endpoint or phone number.',
    },
    {
      question: "Does it integrate with my CRM?",
      answer:
        "We offer native integrations for Salesforce, HubSpot, and Zendesk. For other platforms, you can use our robust Function Calling API to fetch and push data to any REST endpoint.",
    },
    {
      question: "Is my data used to train your models?",
      answer:
        "No. On Enterprise plans, we offer a strict Zero Data Retention policy where your voice and transcript data is processed in memory and never stored or used for training.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container max-w-[800px] mx-auto px-6">
        <Reveal className="text-center mb-12">
          <h2 className="text-[36px] font-semibold text-white">
            Frequency Asked Questions
          </h2>
        </Reveal>

        <Reveal>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border-light py-6">
              <div
                className="text-[18px] font-medium text-white cursor-pointer flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <i
                  className={`ph ph-plus transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                ></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-text-secondary text-[15px] leading-[1.6] ${
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
