import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Founders() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-4xl font-medium mb-8">Our Founders, Our Foundation</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* First Founder */}
        <Card className="border-0 shadow-none bg-transparent">
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
              <h3 className="font-medium text-2xl ">Subodh Kumar</h3>
              <div className="space-y-1">
                <p className="font-medium text-base text-2xl">Founder &</p>
                <p className="font-medium text-base text-2xl">Managing Director</p>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Skilled farmer, strategic planner, and visionary leader. Expertise in farming, growth, synthesis, and innovation. Committed to developing lasting impact on agricultural sustainability.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Second Founder */}
        <Card className="border-0 shadow-none bg-transparent">
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
              <h3 className="font-medium text-2xl ">Manish Balyan</h3>
              <div className="space-y-1">
                <p className="font-medium text-base text-2xl">Co-founder &</p>
                <p className="font-medium text-base">Managing Director</p>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Driven by a passion for sustainable and innovative agricultural practices. Hard work, integrity, and smart strategic planning define his approach to agricultural sustainability.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
