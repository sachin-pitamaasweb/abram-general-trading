export default function MetricsSection() {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              TOGETHER WE ARE STRONG
            </h2>
            <p className="text-gray-600">
              Our drive is always getting bigger. But we all work together to achieve our goals and make it the best possible for excellence for future everyone.
            </p>
            <div className="space-y-1">
              <h3 className="font-semibold uppercase">Management Team</h3>
              <p className="text-gray-600 uppercase">Asray Trading Company</p>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 flex items-center">
            <p className="text-white text-sm md:text-base">
              Our goal is to be a trusted name in the wholesale trade sector, offering exceptional service and unparalleled product quality.
            </p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">YEARS</span>
            </div>
            <span className="text-sm uppercase text-gray-600">Of Experience</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">THAUSANDS</span>
            </div>
            <span className="text-sm uppercase text-gray-600">Of Satisfied Customers</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">VARIOUS</span>
            </div>
            <span className="text-sm uppercase text-gray-600">Range of Products</span>
          </div>
        </div>
      </div>
    )
  }
  
  