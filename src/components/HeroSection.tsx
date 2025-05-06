
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"; // Ensured correct import path
import { Shield, Cloud, ExternalLink, AlertTriangle } from "lucide-react";
import { gsap } from 'gsap';
import FeaturesSection from './FeaturesSection';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
      
      // Animate the description
      gsap.from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
      
      // Animate the status
      gsap.from('.hero-status', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });
      
      // Animate features
      gsap.from('.hero-feature', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
      });
      
      // Animate buttons
      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1,
      });
      
      // Animate login form
      gsap.from('.login-card', {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });
      
      // Animate security circles
      gsap.from('.security-circle', {
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 1.2,
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={heroRef} className="relative pt-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 honeycomb-bg -z-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-shakuni-accent/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-shakuni-accent/5 blur-3xl -z-10"></div>
        
        {/* Security circles */}
        <div className="security-circle absolute top-20 left-[10%] w-5 h-5 rounded-full border border-shakuni-accent opacity-20"></div>
        <div className="security-circle absolute top-[40%] left-[15%] w-10 h-10 rounded-full border border-shakuni-accent opacity-20"></div>
        <div className="security-circle absolute bottom-[30%] left-[5%] w-8 h-8 rounded-full border border-shakuni-accent opacity-20"></div>
        <div className="security-circle absolute top-[25%] right-[15%] w-8 h-8 rounded-full border border-shakuni-accent opacity-20"></div>
        <div className="security-circle absolute bottom-[20%] right-[10%] w-12 h-12 rounded-full border border-shakuni-accent opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6"> {/* Reduced bottom padding pb-12 to pb-6 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero content */}
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="ring-pulse w-4 h-4 rounded-full bg-shakuni-accent"></div>
                <p className="hero-status text-sm text-shakuni-accent">Honeypot Active</p>
              </div>
              
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Shakuni
              </h1>
              
              <p className="hero-description text-xl mb-8 text-shakuni-text-muted leading-relaxed">
                Advanced protection for your digital assets with enterprise-grade security protocols and intelligent honeypot traps.
              </p>
              
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-shakuni-accent/10 animate-pulse-glow">
                  <AlertTriangle className="w-4 h-4 text-shakuni-accent" />
                </div>
                <p className="hero-status text-sm text-shakuni-text-muted">Currently monitoring potential threats...</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="hero-feature flex items-center space-x-2">
                  <Cloud className="w-5 h-5 text-shakuni-accent" />
                  <span className="text-shakuni-text-muted">Multi Cloud Support</span>
                </div>
                <div className="hero-feature flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-shakuni-accent" />
                  <span className="text-shakuni-text-muted">Cloud Native</span>
                </div>
                <div className="hero-feature flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-shakuni-accent">
                    <path d="M2 12h5"></path><path d="M7 12a5 5 0 0 1 5-5"></path><path d="M12 7v10"></path><path d="M7 12a5 5 0 0 0 5 5"></path><path d="M12 17a5 5 0 0 0 5-5"></path><path d="M17 12h5"></path>
                  </svg>
                  <span className="text-shakuni-text-muted">Honeynetworks</span>
                </div>
                <div className="hero-feature flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-shakuni-accent">
                    <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"></path><path d="M14.572 8.104c.912-1.09 2.74-1.007 3.784.185a3 3 0 0 1 .52 2.692 6.93 6.93 0 0 1-2.458 3.192"></path><path d="m4 8 2 3"></path><path d="m11 16 3.923 1.697a.93.93 0 0 0 1.264-.612l1.363-4.592c.1-.337.129-.686.028-1.022"></path><path d="m11 13 2.5 2"></path><path d="M13 5c1.5-1 3.83-1 5 0"></path><path d="M8 14a3 3 0 0 1-1.543-5.606"></path><path d="M17 16a3 3 0 1 0-2.995-3.236"></path>
                  </svg>
                  <span className="text-shakuni-text-muted">Alerting</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="hero-cta bg-shakuni-accent text-shakuni-dark hover:bg-shakuni-accent/90">
                  Get Started
                </Button>
                <Button variant="outline" className="hero-cta border-shakuni-accent text-shakuni-accent hover:bg-shakuni-accent/10">
                  Watch Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Login card - repurposed */}
            <div className="login-card">
              <div className="bg-shakuni-bg rounded-lg border border-white/10 shadow-xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-6">Shakuni Dark Guard</h2>
                <p className="text-sm text-shakuni-text-muted mb-6">Open-source honeypot and threat intelligence tool for cloud-native environments. Deploy, monitor, and defend with ease.</p>
                <ul className="list-disc pl-5 mb-6 text-shakuni-text-muted text-sm space-y-1">
                  <li>Enterprise-grade honeypot traps</li>
                  <li>Multi-cloud support</li>
                  <li>Real-time alerting and analytics</li>
                  <li>Easy integration & deployment</li>
                </ul>
                <a href="https://github.com/shashvik/shakuni_honeypot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-shakuni-accent text-shakuni-dark rounded-md font-medium hover:bg-shakuni-accent/90 transition-colors w-full justify-center mb-4">
                  View on GitHub
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-4 7h7a2 2 0 0 0 2-2v-7"/></svg>
                </a>
                <div className="flex items-center justify-center mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-shakuni-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span className="text-xs text-shakuni-text-muted">Secured by enterprise-grade encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <video 
          src="/shakuni.mov" 
          controls 
          className="w-full rounded-lg shadow-xl cursor-pointer"
          onClick={(e) => {
            const video = e.target as HTMLVideoElement;
            if (video.requestFullscreen) {
              video.requestFullscreen();
            }
            video.play();
          }}
          preload="metadata" // Using the first frame as the banner
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <FeaturesSection />
    </>
  );
};

export default HeroSection;
