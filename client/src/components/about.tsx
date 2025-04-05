import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "85%", label: "Productivity Boost" },
    { value: "10k+", label: "Waitlist Signups" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6"
            >
              No more Googling back and forth.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              Translation, pictures, taste descriptions. We have them all in one
              place, with one scan.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full opacity-30"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="mx-auto h-[70vh] w-auto rounded-3xl shadow-xl object-cover relative z-10"
              >
                <source src="/videos/ScanAndConvert.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6"
            >
              Get help in seconds.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              Feel curious, feel picky, feel lazy? Ask ForkIt GPT.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full opacity-30"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-3xl object-cover relative z-10"
              >
                <source src="/videos/chatPreview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6"
            >
              Efficiently narrow down options for you.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              We flag menu items based on your preferences and dietary
              restrictions.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Abstract business concept"
                className="w-full aspect-square rounded-2xl shadow-xl object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6"
            >
              Ordering as a group is no longer a pain in the A
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              Sort out the dishes that work for everyone by simply pooling
              everyone’s ForkIt profile together.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Abstract business concept"
                className="w-full aspect-square rounded-2xl shadow-xl object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-50 rounded-full opacity-50 transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-amber-50 rounded-full opacity-50 transform -translate-x-1/2"></div>
    </section>
  );
};

export default About;
