'use client';

export default function WelcomeSection() {
  return (
    <div className="flex flex-col w-full mt-12">
      {/* Top Banner */}
      <div className="w-full bg-[#FFD55F] py-6 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          WELCOME TO ABRAM GENERAL TRADING
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-16 lg:py-20" style={{ maxWidth: '90rem' }}>
        <div className="space-y-8">
          {/* Heading Section */}
          <div className="space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We build bridges between
              <br />
              <span className="text-emerald-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                suppliers and customers
              </span>
            </h2>
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-justify">
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              To build bridges that serve customer needs based on trust and satisfaction between the ability to create fruitful and enduring relationships with customers.
            </p>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="font-semibold text-lg sm:text-xl md:text-2xl">{`Abram General Trading L.L.C.`}</span>{` is a Limited Liability Company headquartered in Dubai, UAE. Professionally managed by a prominent business entity with extensive expertise in agro-based industries, the company specializes in sourcing and delivering premium-quality products of Indian origin. Our offerings include Basmati Rice, Chickpeas (Kabuli), Groundnuts, Spices, Pulses, Sugar, Dairy Products, Yellow Corn, Coffee Beans, Tea, Sorghum, Millet, Soybean Meal, Rapeseed Meal, Sesame Seeds, and Dry Fruits, among others.`}
            </p>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              {` Located in the commercial hub of Al Ras Deira, Dubai, Abram General Trading L.L.C. is dedicated to providing the best Indian Basmati rice, renowned globally as the "King of Fragrance," along with other high-quality rice varieties, especially cherished in the Gulf region. With continuous improvements in production techniques and adherence to European food safety and quality standards, we ensure unparalleled product traceability and utilize state-of-the-art machinery.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
