import { Card, CardContent } from "../components/ui/card";
import { Zap, Rocket, Building2, Users, Network, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyOpolo = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hands-on training and bootcamps",
      description: "Practical, immersive learning experiences",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Startup and venture support",
      description: "End-to-end support for entrepreneurs",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Corporate innovation labs",
      description: "Transform traditional businesses",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Career and talent-focused programs",
      description: "Build skills for the future of work",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Access to investors, mentors, and markets",
      description: "Connect with a powerful ecosystem",
    },
  ];

  return (
    <section id="why-opolo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              More than learning. A launchpad.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our programs are designed to spark innovation, build skills, and create impact. 
              We blend global expertise with local relevance, so participants leave with more 
              than knowledge — they leave with networks, opportunities, and practical results.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-slate-900 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                        {benefit.icon}
                      </div>
                      {/* Text */}
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-all duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() =>
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-purple-600 text-white text-lg hover:bg-purple-700 transition-all"
            >
              <CheckCircle className="w-5 h-5" />
              See How It Works
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyOpolo;
