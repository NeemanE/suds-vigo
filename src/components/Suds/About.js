import Image from "next/image";
import Pic from "@/public/images/placeholder.png";

export default function About() {
  return (
    <section className="py-12 bg-blue-400">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-center lg:text-left text-gray-800 mb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 lg:mb-0">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Subsection 1</h3>
              <p className="text-gray-600">
                Detailed information about subsection 1...
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Subsection 2</h3>
              <p className="text-gray-600">
                Detailed information about subsection 2...
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Subsection 3</h3>
              <p className="text-gray-600">
                Detailed information about subsection 3...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            alt="Placeholder"
            src={Pic}
            width={500} // Adjust as needed for your layout
            height={300} // Adjust as needed for your layout
            layout="intrinsic"
          />
        </div>
      </div>
    </section>
  );
}
