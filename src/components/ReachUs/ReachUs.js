import Image from "next/image"

export default function ReachUs() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Contact Information */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Reach Us</h2>

                    <div className="space-y-2">
                        <p className="font-medium">ABRAM GENERAL TRADING</p>
                        <p className="text-gray-600">
                            Shop Number:- 5, AL-Ras Building, Alras,Deira
                            <br />
                            P.o. Box: 120510, Dubai - U.A.E.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <p className="font-medium">Contact</p>
                            <p className="text-gray-600">00971-4-2202424</p>
                        </div>

                        <div>
                            <p className="font-medium">Fax</p>
                            <p className="text-gray-600">00971-4-2202424</p>
                        </div>

                        <div>
                            <p className="font-medium">Mail</p>
                            <p className="text-gray-600">abramgeneraltrading@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Map Image */}
                {/* Map iframe */}
                <div className="relative aspect-[20/10] w-full rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4248.803213139318!2d75.80016157622441!3d30.886397878188745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83fa24e07b1b%3A0xc4b205480ff0d3e6!2sPITAMAAS%20PVT.%20LTD!5e1!3m2!1sen!2sin!4v1734512150336!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    />
                </div>
            </div>
        </section>
    )
}

