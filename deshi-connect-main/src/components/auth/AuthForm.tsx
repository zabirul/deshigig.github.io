
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: any) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const [userType, setUserType] = useState<'freelancer' | 'client'>('freelancer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, userType });
  };

  return (
    <div className="glassmorphism p-8 rounded-xl max-w-md w-full mx-auto animate-fade-in-up">
      <h2 className="text-2xl font-bold text-center mb-6">
        {mode === 'login' ? 'Log In to DeshiGig' : 'Create Your DeshiGig Account'}
      </h2>

      {mode === 'register' && (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">I want to:</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className={cn(
                "flex flex-col items-center justify-center p-4 border rounded-lg transition-all",
                userType === 'freelancer'
                  ? "border-deshi-teal bg-deshi-teal/10 text-deshi-teal"
                  : "border-gray-200 hover:bg-gray-50"
              )}
              onClick={() => setUserType('freelancer')}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-deshi-teal/20 mb-2">
                {userType === 'freelancer' && <CheckCircle className="w-5 h-5 text-deshi-teal" />}
              </span>
              <span className="font-medium">Freelancer</span>
              <span className="text-xs text-center mt-1">I want to work</span>
            </button>
            
            <button
              type="button"
              className={cn(
                "flex flex-col items-center justify-center p-4 border rounded-lg transition-all",
                userType === 'client'
                  ? "border-deshi-orange bg-deshi-orange/10 text-deshi-orange"
                  : "border-gray-200 hover:bg-gray-50"
              )}
              onClick={() => setUserType('client')}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-deshi-orange/20 mb-2">
                {userType === 'client' && <CheckCircle className="w-5 h-5 text-deshi-orange" />}
              </span>
              <span className="font-medium">Client</span>
              <span className="text-xs text-center mt-1">I want to hire</span>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deshi-teal focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deshi-teal focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deshi-teal focus:border-transparent transition-all"
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {mode === 'register' && (
          <>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deshi-teal focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-deshi-teal border-gray-300 rounded focus:ring-deshi-teal"
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm">
                I agree to DeshiGig's <Link to="/terms" className="text-deshi-teal hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-deshi-teal hover:underline">Privacy Policy</Link>
              </label>
            </div>
          </>
        )}

        {mode === 'login' && (
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-deshi-teal hover:underline">
              Forgot your password?
            </Link>
          </div>
        )}

        <Button
          type="submit"
          variant={userType === 'freelancer' ? 'deshi' : 'default'}
          className={userType === 'client' ? 'bg-deshi-orange hover:bg-deshi-orange/90' : ''}
          fullWidth
        >
          {mode === 'login' ? 'Log In' : 'Create Account'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        {mode === 'login' ? (
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-deshi-teal hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-deshi-teal hover:underline font-medium">
              Log In
            </Link>
          </p>
        )}
      </div>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>
        <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
          </svg>
          Facebook
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
