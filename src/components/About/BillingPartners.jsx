import { motion } from 'framer-motion';

const BillingPartners = () => {
  const partners = [
    { src: "../src/assets/partner-cmrs.svg" },
    { src: "../src/assets/partner-cpb.svg" },
    { src: "../src/assets/partner-cca.svg" },
    { src: "../src/assets/partner-cmaa.svg" },
    { src: "../src/assets/partner-hipaa.svg" },
    { src: "../src/assets/partner-cpc.svg" },
  ];

  return (
    <section className="py-20 bg-[#ebf2fa]">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-4xl text-center mb-12 text-[#002345]"
        >
          BILNOW: Your Certified Medical Billing Partner
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={`Partner logo ${index + 1}`}
                className="max-w-[150px] h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingPartners;
