
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsSection from '@/components/sections/NewsSection';

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio | Home";
    
    // Preload the profile image with highest priority
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/lovable-uploads/7a5ec607-643c-4b67-ad00-baa817466d01.png';
    link.as = 'image';
    link.type = 'image/png';
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  }, []);
  
  const roles = ["Software Engineer", "Web Developer", "UI/UX Designer", "Open Source Contributor"];
  
  return <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
          {/* Background subtle noise pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" aria-hidden="true"></div>
          
          {/* Hero content */}
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Profile Image for Mobile (shown only on small screens) - Repositioned lower */}
              <div className="md:hidden w-48 h-48 relative mb-6 mt-16">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden border border-white/10 relative">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-30">
                    <path fill="none" stroke="hsl(var(--primary))" strokeWidth="2" d="M 0,100 C 0,30 30,0 100,0 S 200,30 200,100 170,200 100,200 0,170 0,100" className="animate-[spin_20s_linear_infinite]" />
                  </svg>
                  
                  {/* Person image with optimized loading */}
                  <div className="w-full h-full overflow-hidden rounded-full relative z-10">
                    <img 
                      src="/lovable-uploads/7a5ec607-643c-4b67-ad00-baa817466d01.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                      loading="eager" 
                      fetchPriority="high"
                      decoding="async"
                      width="192" 
                      height="192" 
                    />
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 animate-pulse -z-10"></div>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-gradient block">Gourab Das</span>
                </h1>
                
                <div className="text-xl md:text-2xl text-foreground/80 font-medium flex flex-wrap items-center justify-center md:justify-start gap-x-2">
                  I'm a <AnimatedText phrases={roles} className="text-primary font-semibold" />
                </div>
                
                <p className="text-foreground/70 max-w-lg">
                  Senior Software Engineer with 5+ years of experience in full-stack development, 
                  specializing in modern JavaScript frameworks and cloud technologies. 
                  Passionate about creating scalable, maintainable code and optimizing application performance. 
                  Strong background in leading development teams and implementing efficient CI/CD pipelines.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Link to="/resume" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">View Resume
                </Link>
                  <Link to="/contact" className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors">
                    Contact Me
                  </Link>
                </div>
              </div>
              
              {/* Professional Image (hidden on mobile, shown on larger screens) */}
              <div className="hidden md:block w-60 h-60 lg:w-72 lg:h-72 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden border border-white/10 relative">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-30">
                    <path fill="none" stroke="hsl(var(--primary))" strokeWidth="2" d="M 0,100 C 0,30 30,0 100,0 S 200,30 200,100 170,200 100,200 0,170 0,100" className="animate-[spin_20s_linear_infinite]" />
                  </svg>
                  
                  {/* Person image with optimized loading */}
                  <div className="w-full h-full overflow-hidden rounded-full relative z-10">
                    <img 
                      src="/lovable-uploads/7a5ec607-643c-4b67-ad00-baa817466d01.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                      loading="eager" 
                      fetchPriority="high"
                      decoding="async"
                      width="288" 
                      height="288" 
                    />
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 animate-pulse -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator - hidden on mobile */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce hidden md:flex">
            <span className="text-xs text-foreground/50 mb-2">Scroll</span>
            <ArrowRight className="h-4 w-4 text-foreground/50 transform rotate-90" />
          </div>
        </section>
        
        {/* News Section */}
        <NewsSection />
      </main>
      
      <Footer />
    </div>;
};
export default Index;
