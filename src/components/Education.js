import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white text-gray-800 py-20 px-6 flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto"
    >
      {/* Left Side - Timeline */}
      <div>
        <h2 className="text-3xl font-semibold mb-10 uppercase tracking-wide">
          Education
        </h2>
        <ul className="space-y-8 relative border-l-2 border-gray-400 pl-6">
          <li>
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1"></div>
            <p className="text-sm text-gray-500">2009 - 2019</p>
            <p className="font-medium">Primary and Middle School</p>
            <p className="text-sm text-gray-600">
              Loselling Middle Secondary School
            </p>
          </li>

          <li>
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-[90px]"></div>
            <p className="text-sm text-gray-500">2019 - 2021</p>
            <p className="font-medium">High School</p>
            <p className="text-sm text-gray-600">
              Yangchenphug Higher Secondary School
            </p>
          </li>

          <li>
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-[180px]"></div>
            <p className="text-sm text-gray-500">2022 - 2026</p>
            <p className="font-medium">College</p>
            <p className="text-sm text-gray-600">
              Gyalpozhing College of Information Technology
            </p>
          </li>
        </ul>
      </div>

      {/* Right Side - QR */}
      <div className="mt-10 md:mt-0 flex flex-col items-center">
        <Image
          src="/images/qrcode.png"
          alt="QR Code"
          width={150}
          height={150}
          className="mb-2"
        />
        <p className="text-sm text-gray-500">my curriculum vitae</p>
      </div>
    </section>
  );
}
