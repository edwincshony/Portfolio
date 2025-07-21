import { Card } from "@/components/ui/card";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Problem Solving",
      description: "I thrive on breaking down complex challenges into manageable solutions"
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Strong believer in teamwork and knowledge sharing to achieve common goals"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches to stay ahead of the curve"
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "Committed to continuous learning and professional development"
    }
  ];

  return (
    <section id="about" className="section-padding bg-section-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a motivated Computer Science Engineering graduate from APJ Abdul Kalam Technological University, 
              I bring a fresh perspective to software development with a strong foundation in programming and 
              problem-solving.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Gained hands-on experience as a Django Web Development Intern at Ziuke Infotech, developing full-stack solutions for real-world problems like photography portfolio systems and agri-tech applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              What drives me is the intersection of technology and human impact. I believe in creating solutions 
              that not only work efficiently but also make a meaningful difference in people's lives. My goal 
              is to continue growing as a software engineer while contributing to innovative projects that 
              shape the future.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">📍 Thrissur, Kerala</span>
              </div>
              <div className="bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-medium">🎓 B.Tech CSE Graduate</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">💼 Django Developer</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;