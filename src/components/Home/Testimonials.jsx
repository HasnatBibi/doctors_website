

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sandra Edwards",
    role: "Medical Billing Manager",
    image: "src/assets/rebeeca-testimonial.png",
    quote: "Partnering with BILNOW was one of the best decisions we made for our business. Their team's expertise and proactive support have streamlined our operations and allowed us to focus more on patient care. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Healthcare Administrator",
    image: "src/assets/micheal-testimonial.png",
    quote: "The level of professionalism and attention to detail from the BILNOW team has been exceptional. They've helped us optimize our billing processes and improve our revenue cycle significantly.",
    rating: 5
  },
  {
    id: 3,
    name: "Patricia Rodriguez",
    role: "Practice Manager",
    image: "src/assets/kevin-testimonial.png",
    quote: "We've seen a dramatic improvement in our claims processing efficiency since working with BILNOW. Their customer service is outstanding, and they're always available when we need them.",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Medical Director",
    image: "src/assets/testimonial-image.webp",
    quote: "BILNOW has transformed our billing operations. Their innovative solutions and dedicated support team have made a significant impact on our practice's financial performance.",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] text-[#002345] text-center mb-12">
          What Our Client Says
        </h2>
        
        <div className="relative bg-[#edf3f6] rounded-lg shadow-2xl p-8">
          <div className="flex items-center gap-16">
            {/* Image */}
            <div className="hidden md:block w-1/3">
              <div className=" p-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Quote mark */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#002345] text-[16px] mb-6">
                {testimonials[currentIndex].quote}
              </p>

              {/* Author */}
              <div>
                <h4 className="font-bold text-[#002345] text-[16px]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 text-[16px]">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

