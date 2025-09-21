import { 
  Search, 
  Target, 
  FileText, 
  UserCheck,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Search className="w-5 h-5" />,
      title: "Browse Programs",
      description: "Explore our programs for different skill levels"
    },
    {
      number: "2", 
      icon: <Target className="w-5 h-5" />,
      title: "Select Interest",
      description: "Choose what aligns with your goals"
    },
    {
      number: "3",
      icon: <FileText className="w-5 h-5" />,
      title: "Get Details",
      description: "Learn curriculum and requirements"
    },
    {
      number: "4",
      icon: <UserCheck className="w-5 h-5" />,
      title: "Register",
      description: "Secure your spot with payment"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-slate-800">
            How It Works
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto text-slate-500">
            Four simple steps to transform your career
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 sm:mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group flex flex-col"
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 z-0 bg-gradient-to-r from-slate-200 to-slate-300"></div>
              )}
              
              <div 
                className="relative z-10 p-5 sm:p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-slate-50 border border-slate-200"
              >
                {/* Step Number */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-white bg-gradient-to-br from-purple-600 to-blue-500 text-sm sm:text-base">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-slate-100 text-purple-600">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-semibold mb-1 sm:mb-2 text-slate-800 text-base sm:text-lg">
                  {step.title}
                </h3>
         
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-medium text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

            
        