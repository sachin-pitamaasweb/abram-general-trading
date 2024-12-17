import { Eye, Flag, FileSearch } from 'lucide-react';
export default function CompanyInfo() {
  return (
    <div className="container mx-auto p-4 space-y-8 mt-4">
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl font-semibold text-green-600">Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our vision is to be the world leading food company as an exporter and supplier of all kind of agro products. We strongly believe that people are our strength. Our customers, professional team, stakeholders, partners and the larger community are those who help in our empowerment. Our people are our source of inspiration and we believe that these very people must also stand to benefit with every success that Sunistar accomplishes. We take pride and honor in the fact that our stakeholders work relentlessly and passionately towards realizing our vision. We encourage the engagement of all our stakeholders in this process.
          </p>
        </div>
        <div className="hidden md:flex items-start justify-center">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12 text-white" />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl font-semibold text-green-600">Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We have adopted the mission to bring you the best quality of Agro Products, which is cultivated and processed in modern procedures yet ensuring 100% nutritional values. The sole motive of the company has been to provide complete satisfaction to the valued customers through our products and services. Our mission is focused on executing:
          </p>
          <ul className="list-disc list-inside space-y-1 text-lg text-gray-600 pl-4">
            <li>Enhance management with fairness and transparency</li>
            <li>Emphasize on timely and accurate decision-making processes</li>
            <li>Believe in full compliance and fortification of risk management</li>
            <li>Believe in providing the best customer-centric services</li>
          </ul>
        </div>
        <div className="hidden md:flex items-start justify-center">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
            <Flag className="w-12 h-12 text-white" />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl font-semibold text-green-600">Motto</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The quality of the product has always been the motto and the priority of our organization. We have an experienced team of quality inspectors who check the quality of the products at every level, right from the procurement to final dispatch. Further, we also ensure that our products are processed hygienically and packed in durable packing to prevent damage during transportation as well as possess long shelf life.
          </p>
        </div>
        <div className="hidden md:flex items-start justify-center">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
            <FileSearch className="w-12 h-12 text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
