
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/auth/AuthForm';
import { toast } from '@/components/ui/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      console.log('Registration data:', data);
      
      // Verify password match
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords don't match");
      }
      
      // Simulate successful registration after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration successful",
        description: "Your account has been created successfully!",
      });
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 px-4 bg-gradient-to-r from-deshi-blue to-deshi-teal relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-deshi-orange/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-md">
          <AuthForm mode="register" onSubmit={handleRegister} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
