import { Card, CardContent } from "@/components/ui/card";

export default function WhoWeAre() {
  return (
    <div className="flex items-center justify-center px-6 sm:px-8 md:px-12 py-16 md:py-20 bg-gray-50">
      <Card className="max-w-[90rem] w-full bg-white shadow-md rounded-xl">
        <CardContent className="p-8 sm:p-12 md:p-16">
          <div className="space-y-10 md:space-y-14">
            {/* Section Heading */}
            <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold text-left">
              Who We Are?
            </h2>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-gray-700 leading-relaxed text-lg sm:text-xl md:text-2xl">
              <p>
                {`ABRAM GENERAL TRADING L.L.C. is a Dubai-based company that bridges the gap between tradition and modern trade. 
                Specializing in agro-products of Indian origin, we deliver a wide array of high-quality offerings, including Basmati Rice, 
                Pulses, Spices, Dairy Products, and Dry Fruits, among others. With our roots deeply connected to the agricultural heritage of India, 
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
  );
}
