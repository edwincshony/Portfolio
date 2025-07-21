import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Django Web Development Intern",
      company: "Ziuke Infotech",
      location: "On-site",
      duration: "January 2025 – March 2025",
      type: "Internship",
      description: "Completed a 3-month internship focused on full-stack development, contributing to web applications that addressed real-world challenges in photography and agriculture.",
      achievements: [
        "Developed Snapfolio, an online photography portfolio creator with complete user management system",
        "Built Botanical Buddy, an interactive platform for plant enthusiasts with community features",
        "Engineered Crop Guardian, an agricultural technology solution with pest management capabilities",
        "Implemented authentication systems, dashboards, and dynamic content management using Django",
        "Collaborated with mentors and peers to enhance application efficiency and usability",
        "Resolved complex routing and database management issues"
      ],
      technologies: ["Django", "SQLite", "HTML", "CSS", "JavaScript", "Database Management", "Authentication Systems"]
    }
  ];
  

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "APJ Abdul Kalam Technological University",
      college: "Sahrdaya College of Engineering and Technology (Autonomous)",
      duration: "2021 - 2025",
      cgpa: "7.71",
      location: "Kerala, India"
    },
    {
      degree: "Plus Two",
      institution: "St. Thomas College Higher Secondary School", 
      duration: "2019 - 2021",
      grade: "Full A+",
      location: "Kerala, India"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Building2 className="mr-3 h-6 w-6 text-primary" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-lg font-semibold text-primary">{exp.company}</span>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="mr-3 text-primary text-2xl">🎓</span>
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      {edu.college && (
                        <p className="text-muted-foreground text-sm mb-2">{edu.college}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      {edu.cgpa && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          CGPA: {edu.cgpa}
                        </Badge>
                      )}
                      {edu.grade && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {edu.grade}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;