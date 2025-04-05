import { useRef } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Features from "@/components/features";
import About from "@/components/about";

import WaitlistForm from "@/components/waitlist-form";
import { motion } from "framer-motion";

const Home = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
      <Header onJoinWaitlist={scrollToWaitlist} />
      {/* Full-width hero image */}
      <div className="w-full h-screen bg-[#F3EDE0]/90 relative">
        <img 
          src="/images/Hero2.png" 
          alt="Landing page hero"
          className="w-full h-full object-cover mx-auto block" 
        />
        </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full md:w-1/2 z-10">
              <div className="max-w-lg">
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl md:text-4xl text-gray-600 mb-8"
                >
                  Everything you need, all in one place.  
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-600 mb-8"
                >
                  With ForkIt—the smartest, most user-friendly menu translator ever—you’ll eat better, spend smarter, and explore bolder.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={scrollToWaitlist}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-400 to-pink-500 hover:from-pink-400 hover:to-red-500 hover:shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Join Alpha Testing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-300 rounded-full opacity-20 animate-[bounce_3s_infinite]"></div>
                <img
                  src="/images/thumbnail.png"
                  alt="Startup team working together"
                  className="w-full h-auto rounded-2xl shadow-xl z-10 relative"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-tr-full opacity-50"></div>
      </section>

      <Features />
      <About />

      {/* Waitlist Section */}
      <div ref={waitlistRef} id="waitlist">
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-pink-400 p-10 text-white flex items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                      Join our Alpha Testing Waitlist
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Early access to all features</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Exclusive discount at launch</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-10">
                  <WaitlistForm />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-100 rounded-full opacity-70"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-pink-100 rounded-full opacity-70"></div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
