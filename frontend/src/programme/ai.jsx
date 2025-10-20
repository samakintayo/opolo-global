
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { 
  Calendar, 
  DollarSign, 
  Brain, 
  Laptop, 
  Zap, 
  Target, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// 👉 Button defined inside this file
const Button = ({ children, className = "", onClick, variant = "default", size = "md", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition focus:outline-none";

  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    hero: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-10 py-5 text-xl"
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const AiBootcamp = () => {
  const program = {
    slug: "ai-bootcamp",
    title: "5-Day Intensive AI Training Program",
    type: "AI Bootcamp",
    amount: 30000,
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

  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Learn AI & Generative AI Basics",
      description: "Master the fundamental concepts that power modern AI systems."
    },
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: "Hands-on Tools",
      description: "Practice with Teachable Machine, ChatGPT & more."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Real-World Applications",
      description: "Understand how AI is transforming industries."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Build Your First AI Project",
      description: "Create something tangible you can showcase to employers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent"></div>
              <span className="text-xl font-bold">Opolo Global Innovation</span>
            </Link>
            <Button variant="outline">
              <Link to="/">← Back to Programs</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Tailwind Badge */}
              <span className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                🚀 Featured Program
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Future-Proof Your Skills with AI
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Join the AI Fundamentals Training Bootcamp — a 5-day intensive program by 
                Opolo Global Innovation in partnership with the University of Nigeria Technology 
                Advancement Program (UNTAP).
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-lg">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Starts: September 22, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">₦30,000 only</span>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleRegister}
              >
                Register & Pay Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section using Card */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              What You’ll Gain
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition">
                  <CardHeader>
                    <div className="flex justify-center">{item.icon}</div>
                    <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 mb-8">
                  Take the step to become AI-ready. Register now, secure your slot, 
                  and complete your payment online.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleRegister}
                >
                  Register & Pay Now
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <p className="text-purple-600 font-semibold mt-6">
                  ⚡ Limited slots available. Don’t miss out!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AiBootcamp;
