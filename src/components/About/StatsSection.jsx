import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    title: "Accuracy Rate Of Verification Of Benefits",
    percentage: 95,
    color: "bg-[#002147]",
  },
  {
    title: "Successful Denials Management and Appeals",
    percentage: 85,
    color: "bg-[#002147]",
  },
  {
    title: "Revenue Increase",
    percentage: 25,
    color: "bg-[#002147]",
  },
  {
    title: "First Pass Clean Claims Rate",
    percentage: 93,
    color: "bg-[#002147]",
  },
  {
    title: "HIPAA Compliance and Data Security Standards Met",
    percentage: 99,
    color: "bg-[#002147]",
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147]">
            Why Collaborate With BilNow
          </h2>
          <p className="text-gray-600 leading-relaxed">
            BilNow delivers smart, data-driven medical billing solutions that
            fine-tune your revenue cycle. With automated claims processing,
            real-time reporting, and industry expertise, we ensure faster
            payouts, fewer denials, and compliance for your practice.
          </p>
          <div className="space-y-6" ref={ref}>
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{stat.title}</span>
                  <span>{stat.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${stat.color}`}
                    initial={{ width: '0%' }}
                    animate={controls}
                    variants={{
                      visible: {
                        width: `${stat.percentage}%`,
                        transition: { duration: 1 },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/src/assets/statsSection.webp"
              alt="Medical professionals shaking hands"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
