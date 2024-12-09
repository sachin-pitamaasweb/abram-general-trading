import React from "react";

export default function WelcomeSection() {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-emerald-500 p-6">
          <h1 className="text-center text-white text-2xl md:text-3xl font-bold">
            WELCOME TO ABRAM GENERAL TRADING
          </h1>
        </div>
        
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">
                  We build bridges between{" "}
                  <span className="text-emerald-500">
                    suppliers and customers
                  </span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To build bridges that serve customer needs based on trust and satisfaction 
                  between the ability to create fruitful and enduring relationships with customers.
                </p>
              </div>
  
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  ABRAM GENERAL TRADING L.L.C. a Limited Liability Company having its Head 
                  Office in DUBAI, professionally managed by prominent business entity having 
                  vast experience in handling agro based business specially RICE and other Agro 
                  Products of Indian Origin. We provide finest quality of various Agro Products like 
                  Basmati Rice, Chickpeas (Kabuli), Groundnuts, Spices, Pulses, Sugar, Dairy 
                  Products, Yellow Corn, Coffee Bean, Tea,Sorghum, Millet, Soya Bean ,Meal, 
                  Rapeseed Meal, Sesame Seed and Dry Fruits etc.
                </p>
  
                <p className="text-gray-700 leading-relaxed">
                  Our Parent Company M/s. GLOBAL AGRO CORP an ISO 22000-2005 and HACCP Certified Company, having its Head Office in Delhi (India) engaged in Export of all Varieties 
                  of INDIAN Rice and other Agro Products since 2005. Being located in the RICE Belt of India, GAC enjoys the proximity to major basmati growing area like Haryana, Punjab, 
                  Rajasthan & Uttar Pradesh. The locational advantage confirms the supply of uninterrupted traded goods for Export at a competitive price.
                </p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                An extensive Range is available to the most judicious of customers and with 
                continuous development and improvement in production techniques, operating 
                to All European standards. Food Safety and quality is assured with the latest 
                traceability technology and latest state of art machineries.
              </p>
  
              <p className="text-gray-700 leading-relaxed">
                Having its Head Office in centre of Commercial Hub at AL Ras Deira, Dubai, 
                ABRAM GENERAL TRADING L.L.C. is committed to provide best of Indian Basmati 
                (King of Fragrance) and other variety of RICE which are very famous in the 
                entire world specially in GULF REGION.
              </p>
  
              <p className="text-gray-700 leading-relaxed">
                Thus ABRAM GENERAL TRADING L.L.C. is providing best of Indian Agro Products at very reasonable & competitive price with strict quality control to the customers of entire 
                Gulf Countries.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  