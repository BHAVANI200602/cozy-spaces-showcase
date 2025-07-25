import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-semibold">FurniCraft</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting beautiful furniture for over 8 years. 
              Your trusted partner in creating stunning living spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-light mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Furniture Street, Craft City, CC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-light flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-light flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  hello@furnicraft.com
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent-light transition-colors"
              />
              <button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground px-4 py-3 rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-primary-foreground/60 hover:text-accent-light transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/60 text-center">
              © 2024 FurniCraft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;