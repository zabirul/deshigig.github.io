
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './common/Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Find Freelancers', path: '/freelancers' },
    { name: 'Browse Jobs', path: '/jobs' },
    { 
      name: 'Categories', 
      path: '#',
      dropdown: true,
      items: [
        { name: 'Digital Marketing', path: '/category/digital-marketing' },
        { name: 'Design & Creative', path: '/category/design' },
        { name: 'Web Development', path: '/category/web-development' },
        { name: 'Writing', path: '/category/writing' },
      ]
    },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glassmorphism py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-deshi-blue">
            <span className="text-deshi-teal">Deshi</span>Gig
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item, index) => (
            item.dropdown ? (
              <div key={index} className="relative group">
                <button className="px-3 py-2 rounded-md text-foreground/80 hover:text-foreground group flex items-center animate-hover">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.items?.map((subItem, idx) => (
                      <Link 
                        key={idx}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={cn(
                  'px-3 py-2 rounded-md animate-hover',
                  location.pathname === item.path 
                    ? 'text-deshi-teal font-medium' 
                    : 'text-foreground/80 hover:text-foreground'
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link to="/register">
            <Button variant="deshi">Join Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            item.dropdown ? (
              <div key={index} className="flex flex-col">
                <button className="py-2 text-left font-medium">
                  {item.name}
                </button>
                <div className="ml-4 flex flex-col space-y-2 mt-2">
                  {item.items?.map((subItem, idx) => (
                    <Link 
                      key={idx}
                      to={subItem.path}
                      className="py-1 text-gray-600"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={cn(
                  'py-2',
                  location.pathname === item.path 
                    ? 'text-deshi-teal font-medium' 
                    : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t">
            <Link to="/login">
              <Button variant="outline" fullWidth>Log In</Button>
            </Link>
            <Link to="/register">
              <Button variant="deshi" fullWidth>Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
