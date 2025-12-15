import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Lock, Mail, Eye, EyeOff, Shield } from 'lucide-react';
import { useState } from 'react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Super admin credentials (in real app, use backend authentication)
    if (email === 'admin@bytechsol.com' && password === 'BytechSol@2024') {
      localStorage.setItem('admin_authenticated', 'true');
      onLogin();
    } else {
      setError('Invalid credentials! Access denied.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${
      theme === 'dark' ? 'bg-slate-950' : 'bg-slate-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-50 blur-xl" />

        {/* Login Card */}
        <div className={`relative rounded-3xl border p-10 ${
          theme === 'dark'
            ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
            : 'bg-white/90 backdrop-blur-xl border-slate-200'
        }`}>
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Admin Portal
            </h2>
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
              Super admin access only
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                }`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@bytechsol.com"
                  required
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                  } focus:outline-none`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`w-full pl-12 pr-12 py-3 rounded-xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                  } focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                    theme === 'dark' ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 0.1 }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                Login to Admin Portal
              </span>
            </button>
          </form>

          {/* Hint */}
          <p className={`text-xs text-center mt-6 ${theme === 'dark' ? 'text-slate-600' : 'text-slate-500'}`}>
            Demo: admin@bytechsol.com / BytechSol@2024
          </p>
        </div>
      </motion.div>
    </div>
  );
}
