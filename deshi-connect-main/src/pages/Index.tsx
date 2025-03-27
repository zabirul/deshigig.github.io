
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wallet, 
  MessageSquare, 
  Search, 
  Users, 
  Monitor, 
  Paintbrush, 
  Globe, 
  FileText, 
  Video, 
  Code, 
  BarChart
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    categories: false,
    howItWorks: false,
    testimonials: false,
    cta: false
  });

  // Used for revealing sections on scroll
  const observeElement = (elementId: string, setterKey: keyof typeof isVisible) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [setterKey]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const element = document.getElementById(elementId);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  };

  useEffect(() => {
    const cleanupFunctions = [
      observeElement('features-section', 'features'),
      observeElement('categories-section', 'categories'),
      observeElement('how-it-works-section', 'howItWorks'),
      observeElement('testimonials-section', 'testimonials'),
      observeElement('cta-section', 'cta')
    ];

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "All payments are held in escrow until you approve the work, ensuring security for both parties.",
      iconColor: "text-deshi-teal"
    },
    {
      icon: Wallet,
      title: "Local Currency",
      description: "Transact in BDT with support for local payment methods like bKash, Nagad, and bank transfers.",
      iconColor: "text-deshi-orange"
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Our built-in messaging system allows for seamless communication between clients and freelancers.",
      iconColor: "text-deshi-blue"
    },
    {
      icon: Search,
      title: "AI Matching",
      description: "Our smart algorithm helps clients find the perfect freelancer for their specific project needs.",
      iconColor: "text-deshi-teal"
    }
  ];

  const categories = [
    { icon: Monitor, name: "Web Development", count: 1250 },
    { icon: Paintbrush, name: "Design & Creative", count: 980 },
    { icon: Globe, name: "Digital Marketing", count: 875 },
    { icon: FileText, name: "Content Writing", count: 760 },
    { icon: Video, name: "Video Editing", count: 540 },
    { icon: Code, name: "Mobile Apps", count: 420 },
    { icon: BarChart, name: "SEO", count: 380 },
    { icon: Users, name: "Virtual Assistant", count: 320 }
  ];

  const testimonials = [
    {
      quote: "I found amazing clients through DeshiGig. The secure payment system gives me peace of mind, and I love being able to work with local businesses.",
      name: "Sakib Rahman",
      role: "Web Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "As a small business owner, finding talented designers was always a challenge. DeshiGig made it easy to connect with local professionals who understand our needs.",
      name: "Fariha Khan",
      role: "Business Owner",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4
    },
    {
      quote: "The bKash integration makes payments so convenient. I've completed over 30 projects on DeshiGig and couldn't be happier with the experience.",
      name: "Mahfuz Ahmed",
      role: "Graphic Designer",
      imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deshi-blue mb-4">Why Choose DeshiGig?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've built a platform specifically for Bangladesh's freelancing ecosystem, with features that address local needs.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible.features ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deshi-blue mb-4">Popular Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse top service categories with the most skilled freelancers in Bangladesh.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible.categories ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index % 4 + 1)}s` }}
              >
                <div className="mr-4 bg-deshi-blue/10 p-3 rounded-lg">
                  <category.icon className="w-6 h-6 text-deshi-blue" />
                </div>
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}+ services</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/categories">
              <Button variant="outline">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works-section" className="py-20 bg-gradient-to-r from-deshi-blue to-deshi-teal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How DeshiGig Works</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A simple process to connect, collaborate, and create value together.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 ${isVisible.howItWorks ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {[
              {
                number: "1",
                title: "Create Your Profile",
                description: "Sign up as a freelancer or client and build your profile to showcase your skills or needs.",
                delay: 0.1
              },
              {
                number: "2",
                title: "Connect & Collaborate",
                description: "Post jobs or browse gigs, chat with potential partners, and agree on terms.",
                delay: 0.3
              },
              {
                number: "3",
                title: "Work & Get Paid",
                description: "Complete projects with confidence, knowing payments are secure through our escrow system.",
                delay: 0.5
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${step.delay}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-deshi-blue text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deshi-blue mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from freelancers and clients who have found success on our platform.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                imageUrl={testimonial.imageUrl}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-section" 
        className="py-20 bg-deshi-blue relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-deshi-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-deshi-orange/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Freelancing Journey?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of freelancers and clients already using DeshiGig to grow their careers and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="default" size="lg" className="bg-deshi-orange border-none hover:bg-deshi-orange/90">
                  Join as a Client
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Join as a Freelancer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
