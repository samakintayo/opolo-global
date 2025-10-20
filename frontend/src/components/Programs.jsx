import {
  Users,
  Brain,
  Briefcase,
  Lightbulb,
  Network,
  ArrowRight,
  MapPin,
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "SheScales Africa",
      description:
        "Equipping female founders to build and scale tech-enabled businesses.",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Business Development",
        "Funding Support",
        "Mentorship",
        "Network Access",
      ],
    },
    {
      title: "AI Bootcamp",
      description:
        "Introducing students and young professionals to artificial intelligence through practical projects.",
      icon: <Brain className="w-6 h-6" />,
      features: [
        "5-Day Intensive",
        "Hands-on Projects",
        "Certificate",
        "₦30,000 Only",
      ],
      isHighlighted: true,
    },
    {
      title: "Employability Skills Training",
      description:
        "A hub-based program to equip early career professionals with the skillset to become employable in the current world of work.",
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        "Skills Assessment",
        "Training Modules",
        "Job Placement",
        "Industry Connections",
      ],
    },
    {
      title: "InnovateForward",
      description:
        "Corporate innovation training for business leaders and teams ready to build the future.",
      icon: <Lightbulb className="w-6 h-6" />,
      features: [
        "Leadership Training",
        "Innovation Labs",
        "Digital Transformation",
        "Team Building",
      ],
    },
    {
      title: "Opolo Collective",
      description: "A curated community of founders, mentors, and investors.",
      icon: <Network className="w-6 h-6" />,
      features: [
        "Exclusive Network",
        "Monthly Events",
        "Resource Library",
        "Peer Support",
      ],
    },
  ];

  const getCardClasses = (program) => {
    const baseClasses =
      "relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-xl";
    return program.isHighlighted
      ? `${baseClasses} bg-gradient-to-br from-purple-600 to-indigo-900 text-white shadow-lg shadow-purple-500/30`
      : `${baseClasses} bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-md shadow-purple-100`;
  };

  return (

   <section id="programs" className="py-24 bg-[hsl(220_13%_97%)]">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-orange-500" />
          <span className="text-orange-500 font-medium">
          Explore Our Programs 
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
    Programs running across Africa
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Choose from our lineup of current programs. Each one has its own
          focus, partners, and opportunities.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="px-4">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 mx-auto">
        {programs.map((program, index) => {
          // alternate highlight: even index = highlighted
          const isHighlighted = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative rounded-lg shadow-md overflow-hidden ${
                isHighlighted
                  ? "bg-gradient-to-br from-purple-800 to-purple-900"
                  : "bg-white dark:bg-gray-900"
              }`}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isHighlighted
                        ? "bg-white/20 text-white"
                        : "bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-purple-300"
                    }`}
                  >
                    {program.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isHighlighted
                      ? "text-white"
                      : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {program.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-6 text-sm leading-relaxed ${
                    isHighlighted
                      ? "text-white/90"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {program.description}
                </p>

                {/* Features */}
                {/* <ul className="space-y-2 mb-6 flex-1">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isHighlighted
                            ? "bg-orange-400"
                            : "bg-purple-600 dark:bg-purple-300"
                        }`}
                      ></span>
                      <span
                        className={
                          isHighlighted
                            ? "text-white/90"
                            : "text-gray-700 dark:text-gray-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul> */}

                {/* Button */}
                <button
                  className={`w-full mt-auto py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                    isHighlighted
                      ? "bg-purple-800 hover:bg-purple-700 text-white"
                      : "bg-white dark:bg-gray-800 border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-700"
                  }`}
                  onClick={() => {
                    const programMap = {
                      "SheScales Africa": "https://shescales.opolo.global",
                      "AI Bootcamp": "/ai-bootcamp",
                      "Employability Skills Training": "/employability",
                      "InnovateForward": "/innovate-forward",
                      "Opolo Collective": "https://collective.opolo.global",
                    };
                    const url = programMap[program.title];
                    if (url) {
                      window.location.href = url;
                    } else {
                      console.error("No URL found for program:", program.title);
                    }
                  }}
                >
                  Get More Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      </div>

     
    </div>
  </div>
</section>

  );
};

export default Programs;
