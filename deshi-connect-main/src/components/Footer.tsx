
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deshi-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              <span className="text-deshi-teal">Deshi</span>Gig
            </h2>
            <p className="mb-4 text-white/80">
              Bangladesh's premier freelancing marketplace, connecting talented professionals with quality clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-deshi-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-deshi-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-deshi-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-deshi-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-deshi-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/70 hover:text-deshi-teal transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/freelancers" className="text-white/70 hover:text-deshi-teal transition-colors">Browse Freelancers</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-white/70 hover:text-deshi-teal transition-colors">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-deshi-teal transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/web-development" className="text-white/70 hover:text-deshi-teal transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/category/design" className="text-white/70 hover:text-deshi-teal transition-colors">Design & Creative</Link>
              </li>
              <li>
                <Link to="/category/digital-marketing" className="text-white/70 hover:text-deshi-teal transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/category/writing" className="text-white/70 hover:text-deshi-teal transition-colors">Writing & Translation</Link>
              </li>
              <li>
                <Link to="/categories" className="text-white/70 hover:text-deshi-teal transition-colors">All Categories</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-deshi-teal mt-0.5" />
                <span className="text-white/70">Gulshan, Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-deshi-teal" />
                <span className="text-white/70">+880 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-deshi-teal" />
                <a href="mailto:support@deshigig.com" className="text-white/70 hover:text-deshi-teal transition-colors">
                  support@deshigig.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} DeshiGig. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-white/60 text-sm hover:text-deshi-teal transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-white/60 text-sm hover:text-deshi-teal transition-colors">
                Privacy Policy
              </Link>
              <Link to="/help" className="text-white/60 text-sm hover:text-deshi-teal transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
