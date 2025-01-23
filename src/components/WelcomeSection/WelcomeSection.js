"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WelcomeSection() {
  return (
    <section className="w-full py-16 px-4 md:py-24">
      <div className="mx-auto" style={{ maxWidth: '90rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Delivering premium agro-products globally with excellence and care.
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed text-align-justify">
                Our mission is to bridge the gap between farmers and global consumers by providing high-quality, sustainably sourced agro-products.
                We believe in fostering relationships built on trust, innovation, and a shared commitment to agricultural excellence.
              </p>
            </div>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8"
              onClick={() => (window.location.href = '/about')}
            >
              Read More
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/welcome/w-1.png"
              alt="Industrial facility showing manufacturing equipment"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
