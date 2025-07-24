import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Camera, Leaf, Shield } from "lucide-react";
import snapfolioMockup from "@/assets/snapfolio-mockup.jpg";
import botanicalBuddyMockup from "@/assets/botanical-buddy-mockup.jpg";
import cropGuardianMockup from "@/assets/crop-guardian-mockup.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Snapfolio",
      subtitle: "Online Photography Portfolio Creator",
      description: "A feature-rich platform enabling photographers to showcase their work, manage portfolios, interact with clients, and handle bookings seamlessly. From portfolio monitoring to client reviews, this project honed my skills in user management and dynamic content handling.",
      image: snapfolioMockup,
      icon: Camera,
      technologies: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
      keyFeatures: [
        "Portfolio Management System",
        "Client Interaction Platform", 
        "Booking & Scheduling",
        "Review & Rating System",
        "User Authentication & Profiles"
      ],
      githubUrl: "https://github.com/edwincshony/Snapfolio",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Plant-Pal", 
      subtitle: "Interactive Plant Community Platform",
      description: "An interactive space for plant lovers and botanists featuring community-driven discussions, personalized plant care guides, and real-time expert consultations. This project deepened my understanding of user engagement and structured data management.",
      image: botanicalBuddyMockup,
      icon: Leaf,
      technologies: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
      keyFeatures: [
        "Community Discussion Forums",
        "Personalized Plant Care Guides",
        "Real-time Expert Consultations", 
        "Plant Database Management",
        "User Profile & Preferences"
      ],
      githubUrl: "https://github.com/edwincshony/Plant-Pal",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "SecureCrop",
      subtitle: "Modern Agriculture Technology Platform", 
      description: "A game-changer for modern agriculture designed to help farmers with pest & weed databases, customized control measures, and real-time alerts. This project enhanced my ability to work with data-driven recommendations and analytical insights.",
      image: cropGuardianMockup,
      icon: Shield,
      technologies: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
      keyFeatures: [
        "Pest & Weed Database",
        "Customized Control Measures",
        "Real-time Alert System",
        "Data-driven Recommendations",
        "Agricultural Analytics Dashboard"
      ],
      githubUrl: "https://github.com/edwincshony/SecureCrop",
      color: "bg-amber-50 border-amber-200"
    }
  ];

  // Professional error handling and mobile-optimized link opening
  const handleGitHubClick = (url, projectTitle) => {
    try {
      // Validate URL before opening
      if (!url || typeof url !== 'string') {
        console.error('Invalid GitHub URL provided');
        return;
      }

      // Ensure URL is properly formatted
      const validUrl = url.startsWith('http') ? url : `https://${url}`;
      
      // Mobile-optimized link opening with fallback
      if (typeof window !== 'undefined') {
        // Try opening in new tab/window
        const newWindow = window.open(validUrl, '_blank', 'noopener,noreferrer');
        
        // Fallback for mobile browsers that block popups
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          // Alternative approach for mobile - direct navigation
          window.location.href = validUrl;
        }
      }
    } catch (error) {
      console.error('Error opening GitHub link:', error);
      // Final fallback - try direct navigation
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-section-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in full-stack development, demonstrating my skills in 
            building user-centric applications that solve real-world problems
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className={`project-card ${project.color} overflow-hidden`}>
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={`${project.title} mockup`}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden"></div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{project.title}</h3>
                        <p className="text-primary font-medium">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-white/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* GitHub Button with enhanced mobile compatibility */}
                      <Button 
                        onClick={() => handleGitHubClick(project.githubUrl, project.title)}
                        className="flex-1 sm:flex-none touch-manipulation"
                        type="button"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Button>
                      
                      {/* Alternative direct link for maximum compatibility */}
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:hidden"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Button variant="outline" className="w-full touch-manipulation">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Direct Link
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;