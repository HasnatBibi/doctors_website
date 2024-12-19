import React, { useState } from 'react';
import Slider from 'react-slick';
import { FileText, DollarSign, FileCheck, ClipboardCheck } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    icon: FileText,
    title: 'Insurance Contract Negotiation',
    description:
      'As a trusted medical billing agency, we handle tough negotiations with insurers to secure favorable terms for your practice.',
  },
  {
    icon: DollarSign,
    title: 'Reimbursement Negotiations',
    description:
      'We negotiate reimbursements effectively, addressing payment discrepancies and maximizing revenue for your healthcare practice.',
  },
  {
    icon: FileCheck,
    title: 'Appeals',
    description:
      'We manage denied claims appeals, improving your revenue cycle and securing rightful reimbursements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Review',
    description:
      'We conduct comprehensive compliance reviews, identifying billing inaccuracies and ensuring adherence to industry regulations.',
  },
];

export default function RevenueCycle() {
  const [activeIndex, setActiveIndex] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-6 md:px-36 py-10 bg-[#EDF3F6]">
      <h1 className="text-[28px] md:text-[32px] text-center text-[#002345] mb-12 md:mb-16">
        Own Every Aspect of Your Revenue Cycle
      </h1>

      <Slider {...settings} className="revenue-slider -mx-2">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className="px-2"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`relative h-[250px] md:h-[350px] flex flex-col justify-between p-6 md:p-8 rounded-lg transition-all duration-300 overflow-hidden cursor-pointer ${
                  index === 1
                    ? 'bg-[#002B5B] text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                <div
                  className={`absolute inset-0 bg-[#002B5B] transition-all duration-500 ease-in-out origin-top-left ${
                    activeIndex === index ? 'scale-100' : 'scale-0'
                  }`}
                  style={{
                    transformOrigin: '0 0',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300 ${
                      activeIndex === index || index === 1
                        ? 'bg-white'
                        : 'bg-[#E6F4F1]'
                    }`}
                  >
                    <Icon
                      className={`w-6 md:w-8 h-6 md:h-8 transition-colors duration-300 ${
                        activeIndex === index || index === 1
                          ? 'text-[#002B5B]'
                          : 'text-[#40B9B3]'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-[18px] md:text-[22px] mb-2 md:mb-4 text-center transition-colors duration-300 ${
                      activeIndex === index || index === 1
                        ? 'text-white'
                        : 'text-[#4F4F4F]'
                    }`}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={`text-[14px] md:text-[16px] text-center transition-colors duration-300 ${
                      activeIndex === index || index === 1
                        ? 'text-white'
                        : 'text-[#7A7A7A]'
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
