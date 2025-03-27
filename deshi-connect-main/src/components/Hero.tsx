
import { useState, useEffect } from 'react';
import { Button } from './common/Button';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [searchInput, setSearchInput] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images would ideally be imported from assets
  const backgroundImages = [
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600697394936-59934aa5951f?q=80&w=2071&auto=format&fit=crop'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchInput);
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image carousel with overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-deshi-blue/80 to-deshi-teal/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bangladesh's First <span className="text-deshi-lightblue">Premium Freelance</span> Marketplace
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
              Connect with skilled freelancers and quality clients in Bangladesh. Secure payments, local currency, and expert talent all in one place.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="mb-10 relative">
              <div className="relative flex w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search for services or skills..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full px-5 py-4 pr-20 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-deshi-orange text-white p-2 rounded-md hover:bg-deshi-orange/90 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/register">
                <Button variant="deshi" size="lg" className="bg-deshi-orange border-none hover:bg-deshi-orange/90">
                  I Want to Hire
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  I Want to Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-white/90">
              <div className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-deshi-lightblue" />
                <span>8,500+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-deshi-lightblue" />
                <span>12,000+ Happy Freelancers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-deshi-lightblue" />
                <span>100% Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Right side - could be an image or form */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-xl max-w-md w-full">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Popular Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Web Development", 
                  "Graphic Design", 
                  "Digital Marketing", 
                  "Content Writing", 
                  "Video Editing", 
                  "Mobile Apps", 
                  "SEO", 
                  "UI/UX Design"
                ].map((category, index) => (
                  <Link 
                    key={index} 
                    to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-3 rounded-lg text-white text-center animate-hover"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shapes for visual interest */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-deshi-teal/20 rounded-full blur-3xl"></div>
      <div className="absolute top-32 -right-16 w-72 h-72 bg-deshi-orange/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
