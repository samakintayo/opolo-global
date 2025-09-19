import { 
  Search, 
  Target, 
  FileText, 
  UserCheck,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Browse through programs",
      description:
        "Explore our diverse range of programs designed for different skill levels and career stages.",
    },
    {
      number: "02",
      icon: <Target className="w-8 h-8" />,
      title: "Select your interest area",
      description:
        "Choose the program that aligns with your goals, whether it's AI, entrepreneurship, or innovation.",
    },
    {
      number: "03",
      icon: <FileText className="w-8 h-8" />,
      title: "Get more details on the dedicated page",
      description:
        "Learn about curriculum, schedule, requirements, and outcomes for your chosen program.",
    },
    {
      number: "04",
      icon: <UserCheck className="w-8 h-8" />,
      title: "Register and secure your spot",
      description:
        "Complete your registration and payment to confirm your participation in the program.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              One place. Many paths.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Browse programs, click to learn more, and register directly on each
              program's page.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-0"></div>
                  )}

                  <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 text-center group z-10">
                    {/* Step Number */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>
                  )}

                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex items-start gap-6 group">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
