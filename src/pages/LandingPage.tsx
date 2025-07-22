import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  Lock
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Advanced machine learning algorithms that adapt to your learning style and pace.',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-400/20 to-purple-600/20',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with instant responses and real-time processing.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-400/20 to-orange-500/20',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with end-to-end encryption for your data.',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-400/20 to-green-600/20',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Work together with your team in real-time with seamless collaboration tools.',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-400/20 to-blue-600/20',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Set and track your learning objectives with personalized milestone tracking.',
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-400/20 to-red-600/20',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your learning materials from anywhere in the world, anytime.',
      color: 'from-teal-400 to-teal-600',
      bgColor: 'from-teal-400/20 to-teal-600/20',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Dumroo.AI has revolutionized how our team approaches learning and development. The AI-powered insights are incredible.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      content: 'The personalized learning paths have helped me advance my skills faster than I ever thought possible.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'DataFlow Inc',
      content: 'Outstanding platform! The AI recommendations are spot-on and have significantly improved my productivity.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals getting started',
      features: [
        'AI-powered learning recommendations',
        'Basic analytics dashboard',
        'Community support',
        'Mobile app access',
        '5 GB storage',
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for professionals and small teams',
      features: [
        'Everything in Starter',
        'Advanced AI insights',
        'Team collaboration tools',
        'Priority support',
        '50 GB storage',
        'Custom integrations',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Advanced security features',
        'Dedicated account manager',
        'Unlimited storage',
        'White-label options',
      ],
      color: 'from-green-500 to-green-600',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-300">
                  Powered by Advanced AI Technology
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  Transform Learning with
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse-slow">
                  Dumroo.AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of personalized education with our AI-powered platform. 
                Adaptive learning, real-time insights, and collaborative tools designed to accelerate your growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover-lift">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl rotate-12 animate-float animation-delay-500"></div>
        <div className="absolute top-40 right-10 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full animate-float animation-delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg rotate-45 animate-float animation-delay-300"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="scroll-animate">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Powerful Features for
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Modern Learning
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make Dumroo.AI the ultimate learning companion
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`scroll-animate animation-delay-${(index + 1) * 100} group bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-400/50`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-animate bg-gradient-to-r from-purple-900/20 via-gray-900/40 to-pink-900/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50K+', label: 'Active Learners', icon: Users },
                { number: '95%', label: 'Success Rate', icon: TrendingUp },
                { number: '24/7', label: 'AI Support', icon: Brain },
                { number: '150+', label: 'Countries', icon: Globe },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`animation-delay-${(index + 1) * 200}`}>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="scroll-animate">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  What Our Users
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Are Saying
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join thousands of satisfied learners who have transformed their skills with Dumroo.AI
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`scroll-animate animation-delay-${(index + 1) * 200} bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="scroll-animate">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Choose Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Learning Plan
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Flexible pricing options designed to grow with your learning journey
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`scroll-animate animation-delay-${(index + 1) * 200} relative bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'border-purple-500/50 hover:border-purple-400/70' : 'hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:-translate-y-1 hover:shadow-lg'
                      : 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate bg-gradient-to-r from-purple-900/30 via-gray-900/50 to-pink-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Transform Your Learning?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already experiencing the power of AI-driven education. 
              Start your journey today with a free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover-lift">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dumroo.AI
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering learners worldwide with AI-driven personalized education. 
                Transform your skills and unlock your potential with our innovative platform.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'API', 'Documentation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Dumroo.AI. All rights reserved. Built with ❤️ for learners everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;