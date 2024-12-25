"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function Founders() {
  // Animation Variants for Scroll and Reverse Scroll
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    reverse: { opacity: 0, scale: 1.1, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const animateParagraph = (text) => {
    const words = text.split(" "); // Split paragraph into words
    return (
      <motion.p
        className="text-base text-muted-foreground leading-relaxed flex flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    );
  };

  return (
    <section className="container mx-auto max-w-6xl px-4 py-12" style={{ maxWidth: "90rem" }}>
      <motion.h2
        className="text-4xl font-medium mb-8"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Founders, Our Foundation
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* First Founder */}
        <motion.div
          className="card-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="border-0 shadow-none bg-transparent hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col sm:flex-row gap-6 p-0">
              <div className="relative w-full sm:w-90 h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/home/f-1.png"
                  alt="Profile photo of Subodh Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-2xl">Subodh Kumar</h3>
                <div className="space-y-1">
                  <p className="font-medium text-base">Founder &</p>
                  <p className="font-medium text-base">Managing Director</p>
                </div>
                {animateParagraph(
                  "Skilled farmer, strategic planner, and visionary leader. Expertise in farming, growth, synthesis, and innovation. Committed to developing lasting impact on agricultural sustainability."
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Second Founder */}
        <motion.div
          className="card-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="border-0 shadow-none bg-transparent hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col sm:flex-row gap-6 p-0">
              <div className="relative w-full sm:w-90 h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/home/f-2.png"
                  alt="Profile photo of Manish Balyan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-2xl">Manish Balyan</h3>
                <div className="space-y-1">
                  <p className="font-medium text-base">Co-founder &</p>
                  <p className="font-medium text-base">Managing Director</p>
                </div>
                {animateParagraph(
                  "Driven by a passion for sustainable and innovative agricultural practices. Hard work, integrity, and smart strategic planning define his approach to agricultural sustainability."
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
