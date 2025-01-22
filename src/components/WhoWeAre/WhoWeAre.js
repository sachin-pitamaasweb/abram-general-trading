import { Card, CardContent } from "@/components/ui/card"

export default function WhoWeAre() {
  return (
    <div className="flex items-center justify-center p-4 mt-12 mb-12">
      <Card className="max-w-7xl w-full bg-white shadow-sm" style={{ maxWidth: "90rem" }}>
        <CardContent className="p-8 md:p-12">
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Who We Are?</h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 text-gray-600 leading-relaxed">
              <p>
                {`  ABRAM GENERAL TRADING L.L.C. is a Dubai-based company that bridges the gap between tradition and modern trade.
                Specializing in agro-products of Indian origin, we deliver a wide array of high-quality offerings, including Basmati Rice, Pulses,
                Spices, Dairy Products, and Dry Fruits, among others. With our roots deeply connected to the agricultural heritage of India,
                we aim to bring the essence of its flavors to plates around the world.`}
              </p>

              <p>
                {`Our commitment to quality is unmatched, with every product undergoing rigorous standards to ensure purity, safety, and authenticity.
                Operating from the heart of Dubai's commercial hub, we cater to the Gulf region and beyond, where our products are highly cherished.
                At Abram General Trading, we don’t just trade goods—we deliver trust, tradition, and excellence.`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

