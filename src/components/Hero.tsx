import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
        <div className="fade-in">
          {/* Profile Photo */}
          <div className="mb-8">
            <img 
              src={profilePhoto} 
              alt="Edwin C Shony" 
              className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            EDWIN C SHONY
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            Emerging Software Engineer & Tech Enthusiast
          </p>
          
          {/* Introduction */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Motivated Computer Science Engineering graduate passionate about problem-solving, 
            teamwork, and modern technology innovation. Building the future one line of code at a time.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/edwincshony" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/edwincshony/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a 
              href="mailto:edwincshony123@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;