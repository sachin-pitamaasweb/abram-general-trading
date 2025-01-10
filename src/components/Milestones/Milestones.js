"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const currentRef = countRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return { count, countRef };
};

export default function Milestones() {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);

  // Counter configurations
  const products = useCountUp(200, 1500);
  const network = useCountUp(1700, 2000);
  const brands = useCountUp(10, 1000);

  const stats = [
    { count: products, label: "Products across multiple domains" },
    { count: network, label: "People-strong network of dealers and channel partners" },
    { count: brands, label: "Multinational Brands have worked with us so far" },
  ];

  // Add 3D rotation effect
  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const bgImage = bgImageRef.current;
    if (!container || !bgImage) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // normalized X (-0.5 to 0.5)
    const y = (e.clientY - rect.top) / rect.height - 0.5; // normalized Y (-0.5 to 0.5)

    bgImage.style.transform = `perspective(1000px) rotateX(${y * 15}deg) rotateY(${x * 15}deg)`;
  };

  const reset3DEffect = () => {
    if (bgImageRef.current) {
      bgImageRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section
      ref={containerRef}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={reset3DEffect}
      className="relative mx-auto min-h-[600px] w-full overflow-hidden rounded-lg cursor-pointer"
      style={{ maxWidth: "90rem" }}
    >
      {/* 3D Background Image */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 transition-transform duration-300"
        style={{
          transformOrigin: "center",
          willChange: "transform",
        }}
      >
        <Image
          src="/images/home/Milestones.png"
          alt="Terraced agricultural fields with misty mountains"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 grid gap-4 p-6 md:absolute md:right-6 md:top-1/2 md:w-[450px] md:-translate-y-1/2 md:gap-6 md:p-0">
        <Card className="bg-white/95 backdrop-blur hover:shadow-lg transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-medium">Milestones</CardTitle>
            <p className="text-sm text-muted-foreground">
              These numbers reflect our journey of agricultural excellence and trailblazing innovation.
            </p>
          </CardHeader>
        </Card>

        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white/95 backdrop-blur hover:shadow-lg hover:bg-white transition-transform hover:scale-105"
          >
            <CardContent className="flex items-center gap-4 p-6">
              <div className="text-3xl font-semibold" ref={stat.count.countRef}>
                {stat.count.count}+
              </div>
              <p className="text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}