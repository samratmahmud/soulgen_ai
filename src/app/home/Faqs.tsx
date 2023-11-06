"use client";
import FaqsProps from "@/components/common/FaqsProps";
import React from "react";

const faqsDetails = [
  {
    name: "1. How Do AI Image Generators Work?",
    title:
      "AI Image generators use machine learning algorithms and deep neural networks to generate pictures. Large sets of already-made art are used to teach these algorithms how to find patterns and style that can be used to make new image.",
  },
  {
    name: "2. Is Commercial Use Allowed?",
    title:
      "AI Image generators use machine learning algorithms and deep neural networks to generate pictures. Large sets of already-made art are used to teach these algorithms how to find patterns and style that can be used to make new image.",
  },
  {
    name: "3. Are AI Generated Images Copyrighted?",
    title:
      "AI Image generators use machine learning algorithms and deep neural networks to generate pictures. Large sets of already-made art are used to teach these algorithms how to find patterns and style that can be used to make new image.",
  },
  {
    name: "4. Is My AI-generated Image Going to Be Completely Unique?",
    title:
      "AI Image generators use machine learning algorithms and deep neural networks to generate pictures. Large sets of already-made art are used to teach these algorithms how to find patterns and style that can be used to make new image.",
  },
];

function Faqs() {
  return (
    <section className="md:mb-36 mb-16">
      <div className="md:text-xl text-2xl text-white font-bold capitalize md:mb-20 mb-10 text-center">
        AI Art Generator FAQs
      </div>
      <div className="flex flex-col md:gap-12 gap-5">
        {faqsDetails.map((item, index) => (
          <div key={index}>
            <FaqsProps {...item} key={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
