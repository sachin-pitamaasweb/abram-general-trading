import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function WelcomeSection() {
  return (
    <section className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Welcome to Abram General Trading
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                At Abram General Trading, we have pride in our stable reputation as a
                reliable supplier of agricultural commodities. Our wide range of
                services activities includes farming rice, feed items, rice by-products,
                sea, sorghum, miller sunflower meal, rapeseed meal, sesame seed, and
                a much more.
              </p>
              <p className="leading-relaxed">
                We are committed to produce and supply high quality of products and
                adhere to organic farming practices ensuring the highest standards of
                hygiene, taste, and quality. Our outstanding commitment to quality is
                reflected in our products and services. We have earned an excellent
                business guaranteeing satisfaction for our clients.
              </p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
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
  )
}

