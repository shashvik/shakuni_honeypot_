
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-shakuni-dark/80 backdrop-blur-md border-b border-shakuni-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-shakuni-accent" />
              <span className="text-xl font-semibold tracking-tight">
                Shakuni
              </span>
              <span className="text-xs bg-shakuni-accent/20 text-shakuni-accent px-2 py-0.5 rounded-full">
                Beta
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Links removed as per request */}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/shashvik/shakuni_honeypot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-shakuni-accent text-shakuni-dark-text hover:bg-shakuni-accent/90 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2"
            >
              Get Started
              {/* <ArrowRight className="h-4 w-4" /> */}
            </a>
            {/* Buttons removed as per request */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-shakuni-text-muted hover:text-shakuni-accent"
            >
              <svg
                className={cn("h-6 w-6", isMenuOpen ? "hidden" : "block")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={cn("h-6 w-6", isMenuOpen ? "block" : "hidden")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-shakuni-dark border-b border-shakuni-accent/10">
          {/* Links removed as per request */}
          <div className="pt-4 pb-3 border-t border-shakuni-accent/10">
            <a
              href="https://github.com/shashvik/shakuni_honeypot"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-shakuni-accent text-shakuni-dark-text hover:bg-shakuni-accent/90 px-3 py-2 rounded-md text-base font-medium text-center flex items-center justify-center gap-2"
            >
              Get Started
              {/* <ArrowRight className="h-4 w-4" /> */}
            </a>
            {/* Buttons removed as per request */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
