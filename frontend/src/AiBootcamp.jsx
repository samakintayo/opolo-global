import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Brain, Laptop, Award, CheckCircle, ArrowRight, Star, Zap, Target, BookOpen } from "lucide-react";
import { CardContent } from "./components/ui/card";
import "./index.css";

const program = {
  slug: "ai-bootcamp",
  title: "2-Days Intensive AI Training Program",
  type: "AI Bootcamp",
  amount: 30000,
};

const benefits = [
  { icon: <Brain className="w-6 h-6 text-white" />, title: "Learn AI, Machine Learning & Generative AI basics", description: "Master the fundamental concepts that power modern AI systems" },
  { icon: <Laptop className="w-6 h-6 text-white" />, title: "Get hands-on with tools (Teachable Machine, ChatGPT & more)", description: "Practice with industry-standard tools and platforms" },
  { icon: <Target className="w-6 h-6 text-white" />, title: "Explore real-world AI applications across industries", description: "Understand how AI is transforming businesses worldwide" },
  { icon: <Zap className="w-6 h-6 text-white" />, title: "Build and launch your first AI-powered project", description: "Create something tangible you can showcase to employers" },
];

const audience = [
  { icon: <BookOpen className="w-8 h-8 text-white" />, title: "Students", description: "Learn the future of tech while you study" },
  { icon: <Users className="w-8 h-8 text-white" />, title: "Professionals", description: "Stay competitive in today's evolving job market" },
  { icon: <Zap className="w-8 h-8 text-white" />, title: "Entrepreneurs", description: "Build AI-powered solutions for your business" },
  { icon: <Star className="w-8 h-8 text-white" />, title: "Innovators", description: "Turn your ideas into working AI projects" },
];

const features = [
  "AI Fundamentals & Hands-On Tools",
  "Real-World Applications",
  "AI Project Development",
  "Exclusive Community Access",
];

const faqs = [
  { question: "Is the bootcamp virtual or in-person?", answer: "The bootcamp is 100% virtual, so you can join from anywhere." },
  { question: "What do I need to participate?", answer: "A laptop, stable internet, and curiosity to learn!" },
  { question: "Will I receive a certificate?", answer: "Yes, participants who complete the program will receive a certificate of completion." },
  { question: "What if I miss a session?", answer: "Recordings will be available for registered participants." },
  { question: "Is there a deadline to register?", answer: "Registration closes once slots are filled, so secure your spot early." },
];

const AiBootcamp = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const handleRegister = () => {
    const query = new URLSearchParams({
      program: program.slug,
      title: program.title,
      type: program.type,
      amount: program.amount.toString(),
    });
    window.location.href = `/register?${query.toString()}`;
  };

  const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="border-b border-gray-300 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/assets/Opolo-logo-blue.png" alt="Opolo Global Logo" className="w-40 h-10 object-contain" />
            </Link>
            <Link to="/" className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:text-gray-900 hover:border-gray-900 transition">
              ← Back to Programs
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-center bg-cover opacity-100" style={{ backgroundImage: `url("/assets/ai-bg-1.svg")` }}></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-black/60 mix-blend-multiply"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
            <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F37AD1] to-[#F97415CC] bg-clip-text text-transparent">
              Future-Proof Your Skills with AI
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Join the AI Fundamentals Training Bootcamp — a 2-day intensive program by Opolo Global Innovation.
            </motion.h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 text-base sm:text-lg text-white">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Starts: 29th October, 2025</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <span className="font-semibold text-orange-400">₦30,000 only</span>
              </motion.div>
            </div>

            <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(0,0,0,0.5)" }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} onClick={handleRegister} className="mx-auto cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold px-8 sm:px-12 py-4 sm:py-5 bg-indigo-600 text-white rounded-lg">
              Register & Pay Now <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Build the Skills That Power the Future</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Artificial Intelligence is reshaping industries worldwide. This bootcamp gives you 
                the knowledge, tools, and practical experience to become part of this transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white border border-gray-200 shadow-md rounded-xl cursor-pointer" {...fadeUp} transition={{ delay: idx * 0.1 }}>
                  <CardContent className="p-8 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white transition-transform">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.p className="text-lg text-blue-700 font-semibold" {...fadeUp}>We're not just training you, we're preparing you to thrive in the age of intelligent technology.</motion.p>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Who Should Join?</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">This program is designed for ambitious minds ready to sharpen their skills.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audience.map((person, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white border border-gray-200 shadow-md rounded-xl text-center cursor-pointer" {...fadeUp} transition={{ delay: idx * 0.1 }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto mb-6">{person.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{person.title}</h3>
                    <p className="text-gray-700">{person.description}</p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Gain & Timeline */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <motion.h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-900" {...fadeUp}>What You'll Gain</motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {features.map((feat, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex items-center gap-4 p-6 rounded-xl bg-white shadow-md cursor-pointer" {...fadeUp} transition={{ delay: idx * 0.1 }}>
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-900">{feat}</span>
                </motion.div>
              ))}
            </div>

            <motion.div className="bg-[linear-gradient(135deg,#9333ea_0%,#0f172a_100%)] text-white p-8 rounded-xl shadow-lg" {...fadeUp}>
              <h3 className="text-2xl font-bold mb-6">Program Timeline</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Calendar className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <div className="font-bold text-lg text-orange-400">October 29 – 30, 2025</div>
                  <div className="opacity-90">2 days intensive</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <div className="font-bold text-lg text-orange-400">2-3 hours daily</div>
                  <div className="opacity-90">Online & practical sessions</div>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <div className="font-bold text-lg text-orange-400">₦30,000 only</div>
                  <div className="opacity-90">Full program investment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.section className="py-24 text-center" {...fadeUp}>
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-12">
              Take the step to become AI-ready. Register now, secure your slot, and complete your payment online.
            </p>
            <button onClick={handleRegister} className="cursor-pointer inline-flex items-center justify-center gap-2 text-xl px-12 py-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Register & Pay Now <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-green-600 font-semibold mt-6">⚡ Limited slots available. Don't miss out!</p>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeUp}>Frequently Asked Questions</motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} className="border border-gray-300 rounded-xl" {...fadeUp} transition={{ delay: idx * 0.1 }}>
                  <button className="w-full p-6 text-left flex justify-between items-center font-semibold text-gray-900" onClick={() => toggleFAQ(idx)}>
                    {faq.question}
                    <span>{openFAQ === idx ? "−" : "+"}</span>
                  </button>
                  {openFAQ === idx && <div className="p-6 pt-0 text-gray-700">{faq.answer}</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

       <footer id="footer" className="bg-gray-900 text-gray-200">
            {/* Final CTA Section */}
            <div className="py-10 md:py-14">
                    
                {/* Copyright */}
                <div className="border-t border-gray-800 mt-10 sm:mt-14 pt-6 text-center opacity-60 text-sm sm:text-base">
                  <p>&copy; {new Date().getFullYear()} Opolo Global Innovation. All rights reserved.</p>
                </div>
             
            </div>
          </footer>
    </div>
    
  );
  
};



export default AiBootcamp;
