import { FiPhoneCall } from 'react-icons/fi'; // Make sure to import the correct icon

export default function Contact() {
  return (
    <div className="w-full bg-[#1dbfcc] py-8">
      <div className="container mx-auto px-36">
        {/* Flex container without gaps */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Column */}
          <div className="text-white md:mr-12"> {/* Add margin-right for spacing */}
            <h2 className="text-3xl font-bold mb-4">
              Schedule a free{" "}
              <a
                href="/demo"
                className="underline hover:text-white/90 transition-colors"
              >
                Demo
              </a>
            </h2>
            <p className="text-xl">
              A member of our team will get in touch with you in 12 hours.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex items-center gap-4 text-white">
            <div className="bg-white/20 border border-white rounded-full p-4">
              <FiPhoneCall className="w-8 h-8" />
            </div>
            <div>
              <div className="text-md font-medium">CALL US AT</div>
              <a
                href="tel:7187018169"
                className="text-lg font-bold hover:text-white/90 transition-colors"
              >
                718 701 8169
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
