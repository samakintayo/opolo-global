import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-200">
      {/* Final CTA Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to build, grow, and scale?
            </h2>
            <p className="text-lg sm:text-xl mb-8 md:mb-12 opacity-80 leading-relaxed">
              Innovation starts with one step. Explore the program that fits your journey 
              and get started today.
            </p>
            <button
              className="cursor-pointer bg-indigo-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 mx-auto hover:bg-indigo-500 transition-colors"
              onClick={() =>
                document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Programs
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-10 sm:py-14">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand / Logo */}
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-5">
                {/* Logo */}
                <img 
                  src="/assets/opolo-white.png" 
                  alt="Opolo Logo" 
                  className="w-50 h-14 object-contain"
                />
                {/* <span className="text-lg sm:text-xl font-bold leading-tight">
                  Opolo Global <br className="hidden sm:block"/> Innovation
                </span> */}
              </div>
              <p className="opacity-80 text-sm sm:text-base max-w-md">
                Driving innovation and growth across Africa through world-class programs, 
                mentorship, and community building.
              </p>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-4 text-left">Programs</h4>
              <ul className="space-y-3 opacity-80 text-left text-sm sm:text-base">
                {[
                  { label: "SheScales Africa", href: "hthttps://shescales.opolo.global" },
                  { label: "AI Bootcamp", href: "/ai-bootcamp" },
                  { label: "Employability Skills", href: "#" },
                  { label: "InnovateForward", href: "#" },
                  { label: "Opolo Collective", href: "https://collective.opolo.global" },
                ].map((program) => (
                  <li key={program.label}>
                    <a href={program.href} className="hover:text-indigo-400 transition-colors">
                      {program.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4 text-left">Connect</h4>
              <ul className="space-y-3 opacity-80 text-left text-sm sm:text-base">
                {["About Us", "Contact", "Partners", "Alumni"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-10 sm:mt-14 pt-6 text-center opacity-60 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} Opolo Global Innovation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
