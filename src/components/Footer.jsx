import React from "react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="ml-3 text-2xl font-bold">CurrencyPro</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Your trusted partner for accurate and fast currency conversions.
              Get real-time exchange rates for all major world currencies with
              professional-grade reliability.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-to-use"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                >
                  How to Use
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MNTN. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            A Concept by{" "}
            <a
              href="https://saad-portfolio-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Muhammad Saad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
