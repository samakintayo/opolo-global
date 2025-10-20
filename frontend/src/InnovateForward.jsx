import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import {
  Calendar,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Target,
  Lightbulb,
  CheckCircle,
  Menu,
  X,
  Rocket,
  Building2,
  TrendingUp,
  Zap,
  MapPin,
} from "lucide-react";
import heroBackground from "/assets/innovate-forward-hero-bg.jpg";

const InnovateForward = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Program info + Register handler
  const program = {
    slug: "innovate-forward",
    title: "InnovateForward Executive Training Program",
    type: "Executive Training",
    amount: 250000,
  };

  const handleRegister = () => {
    const query = new URLSearchParams({
      program: program.slug,
      title: program.title,
      type: program.type,
      amount: program.amount.toString(),
    });
    window.location.href = `/register?${query.toString()}`;
  };

  // Small entrance trigger for initial animations (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      document.documentElement.classList.add("page-loaded");
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <Calendar className="w-5 h-5" />, label: "Nov 5-6, 2025" },
    { icon: <MapPin className="w-5 h-5" />, label: "Lagos, Nigeria" },
    { icon: <Users className="w-5 h-5" />, label: "30 Seats Only" },
    { icon: <span className="w-5 h-5">₦</span>, label: "₦250,000" },
  ];

  const attendees = [
    "Mid- to Senior-level Professionals seeking to lead innovation",
    "Business Development & Strategy Leads driving growth",
    "Managers and Team Leads across Operations, Sales, Marketing",
    "HR & L&D Executives embedding innovation capabilities",
    "Public Sector Professionals improving service delivery",
  ];

  const objectives = [
    "Build growth strategies rooted in today's market realities",
    "Identify and implement innovative ideas in products and services",
    "Drive cost-efficiency and process improvement through innovation",
    "Retain clients and develop new markets in turbulent environments",
    "Lead teams to execute innovation across organizational silos",
    "Think like a startup — move fast, test ideas, embrace experimentation",
    "Apply agile methodologies to deliver results in complex environments",
  ];

  const modules = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Mindset & Leadership",
      description:
        "Learn how to think strategically and lead confidently through uncertainty",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Design Thinking & Agile Execution",
      description:
        "Apply practical frameworks to design and test innovative solutions quickly",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Operational Innovation & Cost Efficiency",
      description:
        "Optimize processes and uncover hidden opportunities for growth",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Client Retention & Market Expansion",
      description:
        "Strengthen customer relationships and identify new markets",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Case Studies from African & Global Markets",
      description:
        "Explore how successful organizations drive sustainable growth",
    },
  ];

  const faqs = [
    {
      question: "Where will the program take place?",
      answer:
        "The training will be held in-person in Lagos, Nigeria. Venue details will be shared with confirmed participants.",
    },
    {
      question: "What is the participation fee?",
      answer:
        "The fee is ₦250,000, covering access to all sessions, materials, and the certificate of completion.",
    },
    {
      question: "Who can attend?",
      answer:
        "Mid- to senior-level professionals, business owners, and team leads seeking practical innovation and growth strategies.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. All participants who complete the 2-day training will receive a certificate of completion from Opolo Global Innovation and Bridge57.",
    },
    {
      question: "How do I register?",
      answer:
        "Click 'Reserve Your Seat' to complete your registration form and secure your spot before October 30, 2025.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:scale-[1.02] transition-transform"
          >
           
               <img src="/assets/Opolo-logo-blue.png" alt="Opolo Global Logo" className="w-40 h-10 object-contain" />

          </Link>

          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/"
              className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100 transition cursor-pointer"
            >
              ← Back to Programs
            </Link>
            <button
              onClick={handleRegister}
              className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition transform hover:scale-[1.03] cursor-pointer"
            >
              Register Now
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white p-4 space-y-3 animate-fadeIn">
            <Link
              to="/"
              className="block w-full px-4 py-2 text-center border rounded-lg hover:bg-gray-100 transition"
            >
              ← Back to Programs
            </Link>
            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition"
            >
              Register Now
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center text-white pt-16"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-slate-900/90 to-orange-900/95" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-6 text-sm backdrop-blur-sm animate-fadeIn">
            🚀 Executive Training Program
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp">
            Innovate. Grow.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Lead
            </span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fadeInUp delay-100">
            Join{" "}
            <span className="font-semibold text-orange-400">InnovateForward</span>{" "}
            — a 2-day executive training designed to equip professionals and
            business leaders with practical tools for strategic innovation,
            growth, and business development in today's competitive economy.
          </h2>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full mb-10">
             
              <span className="font-medium text-sm">Hosted in collaboration with Bridge57</span>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition transform hover:scale-105 cursor-pointer animate-fadeInUp"
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <p className="text-sm text-white/90 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleRegister}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition transform cursor-pointer animate-fadeInUp"
          >
            Reserve Your Seat <ArrowRight className="inline w-5 h-5 ml-2" />
          </button>

          <div className="text-sm text-white/80 mt-6 space-y-1 animate-fadeIn delay-300">
            <p>⚡ Limited to 30 seats only</p>
            <p>📅 Registration closes October 30, 2025</p>
            <p>🎓 Certificate issued upon completion</p>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Unlock Growth Through <span className="text-purple-600">Innovation</span>
            </h2>
            <p className="text-lg text-gray-600">
              In today's fast-changing market, traditional business models are
              no longer enough. InnovateForward helps you think differently,
              act strategically, and deliver measurable results — even with
              limited resources.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border animate-fadeInUp delay-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Practical Skills, Real Impact</h3>
            <p className="text-gray-600">
              This program blends strategy, design thinking, and agile
              execution to help you identify opportunities, optimize operations,
              and lead innovation initiatives that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who Should Attend</h2>
          <p className="text-gray-600 text-lg">
            The InnovateForward Executive Training is ideal for:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {attendees.map((text, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:-translate-y-1 transition transform cursor-pointer animate-fadeInUp"
            >
              <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full text-purple-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp">
          {/* <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full mb-4">
            <Lightbulb className="w-5 h-5" />
            <span className="font-medium text-sm">Section 4</span>
          </div> */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Learning Objectives</h2>
          <p className="text-gray-600 text-lg">
            By the end of this 2-day program, participants will be able to:
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {objectives.map((text, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:-translate-y-1 transition transform cursor-pointer animate-fadeInUp"
            >
              <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Program Modules</h2>
          <p className="text-gray-600 text-lg">Your Innovation Journey Includes:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition transform cursor-pointer animate-fadeInUp"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                {mod.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
              <p className="text-gray-600">{mod.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
        Program Logistics
      </h2>
      <p className="text-gray-600 text-lg">
        Key details to help you plan ahead for a seamless experience.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-gray-600">2 Days (Weekday Format)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Calendar className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Dates</h3>
              <p className="text-gray-600">November 5–6, 2025</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Delivery</h3>
              <p className="text-gray-600">In-Person (Lagos, Nigeria)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <DollarSign className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Fee</h3>
              <p className="text-gray-600">₦250,000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Certificate</h3>
              <p className="text-gray-600">Issued upon successful completion</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Seats Available</h3>
              <p className="text-gray-600">30 participants</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Building2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Organized by</h3>
              <p className="text-gray-600">
                Opolo Global Innovation & Bridge57
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-4">
  
  </section>



      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500 text-white text-center px-4">
        <div className="max-w-3xl mx-auto animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Innovate Forward?</h2>
          <p className="text-lg mb-8 opacity-90">
            Take charge of your growth and position yourself as an
            innovation-driven leader. Seats are limited — secure yours today.
          </p>
          <button
            onClick={handleRegister}
            className="bg-white text-purple-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-xl transform hover:scale-105 cursor-pointer"
          >
            Reserve Your Seat <ArrowRight className="inline w-6 h-6 ml-2" />
          </button>
          <p className="mt-4 text-sm opacity-80">📅 Registration closes October 30, 2025</p>
        </div>
      </section>

      {/* OUR PARTNERS */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Partners
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            We proudly collaborate with forward-thinking organizations that share our mission of innovation and growth.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
            <img
              src="/assets/partners/bridge57-logo.jpg"
              alt="Bridge57"
              className="h-16 mx-auto object-contain opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/assets/partners/innomantra-logo.jpg"
              alt="InnoMantra"
              className="h-16 mx-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          
            
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Got questions? We've got answers.</p>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left font-semibold text-gray-800 flex justify-between items-center cursor-pointer hover:text-purple-700"
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${openFAQ === index ? "rotate-45 text-purple-600" : ""}`}
                >
                  +
                </span>
              </button>

              <div className={`mt-3 text-gray-600 transition-all duration-300 overflow-hidden ${openFAQ === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Opolo Global — InnovateForward
      </footer>
    </div>
  );
};

export default InnovateForward;
