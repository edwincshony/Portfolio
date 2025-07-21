import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Edwin C Shony</h3>
            <p className="text-background/80 leading-relaxed">
              Emerging Software Engineer passionate about creating innovative solutions 
              that make a meaningful impact. Always excited to take on new challenges 
              and collaborate on interesting projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:edwincshony123@gmail.com" 
                className="flex items-center text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                edwincshony123@gmail.com
              </a>
              <p className="text-background/80">
                📍 Thrissur, Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com/edwincshony"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/edwincshony/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:edwincshony123@gmail.com"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-center text-background/80">
              <span className="text-sm">
                © {currentYear} Edwin C Shony. Made with
              </span>
              <Heart className="h-4 w-4 mx-1 text-red-400" />
              <span className="text-sm">
                and lots of coffee.
              </span>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-background/80 hover:text-background transition-colors text-sm"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;