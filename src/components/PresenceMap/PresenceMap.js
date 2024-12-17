import Image from "next/image";

export default function PresenceMap() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Presence</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We have a presence in Maharashtra (Aurangabad), complemented by our
            manufacturing facilities in Gujarat (Halol). And with strong distribution footprint across
            India, we are well-positioned to serve our customers across the country. Based in
            Halol and Aurangabad, we have recently expanded our company by setting up in our
            new facility in Aurangabad.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Through this unique approach, we are not only consolidating our presence domestically but
            also expanding our reach to international markets, strengthening our commitment to
            operational growth and global excellence.
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[3/4] sm:aspect-square max-w-lg mx-auto lg:max-w-none">
          <Image
            src="/map.png"
            alt="Map of India showing company presence"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
        </div>
      </div>
    </div>
  )
}

