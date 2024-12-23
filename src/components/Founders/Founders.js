"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function Founders() {
  // Animation Variants for Scroll and Reverse Scroll
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    reverse: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <section className="container mx-auto max-w-6xl px-4 py-12" style={{ maxWidth: "90rem" }}>
      <h2 className="text-4xl font-medium mb-8">Our Founders, Our Foundation</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* First Founder */}
        <motion.div
          className="card-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="reverse"
          variants={cardVariants}
        >
          <Card className="border-0 shadow-none bg-transparent hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col sm:flex-row gap-6 p-0">
              <div className="relative w-full sm:w-90 h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/home/f-1.png"
                  alt="Profile photo of first founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-2xl">Subodh Kumar</h3>
                <div className="space-y-1">
                  <p className="font-medium text-base text-2xl">Founder &</p>
                  <p className="font-medium text-base text-2xl">Managing Director</p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Skilled farmer, strategic planner, and visionary leader. Expertise in farming, growth,
                  synthesis, and innovation. Committed to developing lasting impact on agricultural
                  sustainability.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Second Founder */}
        <motion.div
          className="card-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="reverse"
          variants={cardVariants}
        >
          <Card className="border-0 shadow-none bg-transparent hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="flex flex-col sm:flex-row gap-6 p-0">
              <div className="relative w-full sm:w-90 h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/home/f-2.png"
                  alt="Profile photo of second founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-2xl">Manish Balyan</h3>
                <div className="space-y-1">
                  <p className="font-medium text-base text-2xl">Co-founder &</p>
                  <p className="font-medium text-base">Managing Director</p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Driven by a passion for sustainable and innovative agricultural practices. Hard work,
                  integrity, and smart strategic planning define his approach to agricultural sustainability.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
