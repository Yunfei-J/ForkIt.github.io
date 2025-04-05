import { motion } from "framer-motion";

const features = [
  {
    icon: "rocket",
    color: "primary",
    title: "Lost Travelers",
    description:
      "To enjoy local cuisine without feeling lost, embarrassed, or resorting to safe but boring choices.",
  },
  {
    icon: "users",
    color: "pink",
    title: "Food Enthusiasts",
    description:
      "Display dish details such as origin, ingredients, pairings. Savoring every experience and the ability to try out newer dishes",
  },
  {
    icon: "bar-chart",
    color: "amber",
    title: "International Students/Workers",
    description:
      "Provides dish translations and cultural context. Visual aids like images and descriptions to reduce confusion.",
  },
  {
    icon: "shield",
    color: "purple",
    title: "Decision Paralysis Diners",
    description:
      "Personalized filters and recommendations to avoid decision fatigue and choose confidently.",
  },
  {
    icon: "smartphone",
    color: "blue",
    title: "Health Conscious Diners",
    description:
      "Filter out allergens and preferences (vegan, keto, halal, etc.)",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  rocket: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  users: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 8.5L12 4l2.5 4.5M6 8.5h12l-1.5 8h-9L6 8.5zM12 16v4m-3 0h6"
      />
    </svg>
  ),
  "bar-chart": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  ),
  shield: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  smartphone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4c4 0 7 3 7 7 0 4-3 7-7 7s-7-3-7-7c0-4 3-7 7-7zm0 0v18M9 16l3-3 3 3m-6-6l3 3 3-3"
      />
    </svg>
  ),
};

const colorVariants: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary-100", text: "text-primary-600" },
  pink: { bg: "bg-pink-100", text: "text-pink-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
};

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4"
          >
            User Profiles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4"
          >
            Who is this app for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Significantly elevate your life experience if you are one of the
            following:
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-lg ${colorVariants[feature.color].bg} ${colorVariants[feature.color].text} flex items-center justify-center mb-6`}
              >
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
