import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "SQL"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Web Technologies", 
      skills: ["HTML", "CSS", "Django"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git","Vercel", "Visual Studio Code", "Firebase", "SQLite", ],
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Soft Skills",
      skills: ["Time Management", "Adaptability", "Team Player", "Communication", "Problem Solving"],
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills that I use to build innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="fade-in space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary" 
                    className={`${category.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">AI</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Career Essentials in Generative AI</h4>
              <p className="text-sm text-muted-foreground">Microsoft & LinkedIn</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">📊</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Google Data Analytics</h4>
              <p className="text-sm text-muted-foreground">Coursera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;