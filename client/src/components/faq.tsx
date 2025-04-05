import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will JoinNova launch?",
    answer: "We're working hard to launch in Q3 2023. Joining our waitlist ensures you'll be the first to know when we're ready."
  },
  {
    question: "Will there be a free plan?",
    answer: "Yes! We'll offer a generous free tier that includes all core features, with premium plans for additional capabilities and higher usage limits."
  },
  {
    question: "What makes JoinNova different from other platforms?",
    answer: "Our unique approach combines AI-powered automation with intuitive collaboration tools, creating a seamless workspace that adapts to your team's workflow."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Security is our top priority. We use industry-leading encryption and follow best practices to ensure your data stays private and protected."
  },
  {
    question: "Will there be special pricing for early adopters?",
    answer: "Yes! Everyone who joins our waitlist will receive a special founding member discount when we launch."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Everything you need to know about our platform and waitlist.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden px-2">
                <AccordionTrigger className="text-lg font-bold text-gray-900 font-poppins py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
