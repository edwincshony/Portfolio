"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const [state, handleSubmit] = useForm("mvgqzddg"); // Replace with your actual Formspree ID

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create FormData object for Formspree
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    
    try {
      await handleSubmit(formDataObj);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Hide success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "edwincshony123@gmail.com",
      href: "mailto:edwincshony123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8304084130",
      href: "tel:+918304084130"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thrissur, Kerala, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/edwincshony",
      color: "hover:bg-gray-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/edwincshony/",
      color: "hover:bg-blue-50"
    },
    {
      icon: Mail,
      label: "Email",
      href: "#contact", // Changed to prevent opening email client
      color: "hover:bg-green-50"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-section-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply connect with fellow technology enthusiasts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <h4 className="text-green-800 font-medium">Message sent successfully!</h4>
                    <p className="text-green-700 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                    disabled={state.submitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                    className="w-full resize-none"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  disabled={state.submitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Error handling */}
                {state.errors && state.errors.length > 0 && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      There was an error sending your message. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


            <div className="text-center p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold mb-2">Ready to work together?</h4>
              <p className="text-muted-foreground mb-4">
                I'm currently open to new opportunities and exciting projects
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
              >
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;