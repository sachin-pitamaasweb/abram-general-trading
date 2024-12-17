export default function SupportSection() {
    return (
      <section className="bg-green-600 w-full min-h-[300px] p-8 md:p-12 lg:p-16">
        <div className="mx-auto space-y-4">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Have a question?
          </h2>
          <h3 className="text-white text-xl md:text-2xl font-medium">
            Our team is happy to assist you
          </h3>
          <p className="text-white/90 text-sm md:text-base max-w-2xl">
            Get direct support from our expert team on anything about our products. Our
            highly trained team are standing by ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-white/90 transition-colors">
              Contact Us
            </button>
            <span className="text-white text-sm md:text-base">
              or call +00971-4-2202424
            </span>
          </div>
        </div>
      </section>
    )
  }
  
  