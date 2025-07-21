import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Target,
  Zap,
  Heart,
  Globe,
  Shield,
  Sparkles,
  TrendingUp,
  Clock,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const heroParallax = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div 
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-float animation-delay-500"
          style={{ transform: `translateY(${-parallaxOffset}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float animation-delay-1000"
          style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/30 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dumroo.AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur-sm`}>
          <div className="px-4 py-2 space-y-2">
            <a href="#features" className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">Features</a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">About</a>
            <a href="#testimonials" className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a>
            <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"
          style={{ transform: `translateY(${heroParallax}px)` }}
        />
              <span className="inline-block animate-slide-in-left">Transform</span>{' '}
              <span className="inline-block animate-slide-in-right animation-delay-200 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Learning
              </span>
              <br />
              <span className="inline-block animate-slide-in-left animation-delay-400">with AI</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of education with our revolutionary AI-powered homeschooling platform. 
              Personalized learning paths, intelligent tutoring, and adaptive assessments.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-800 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            
            <button className="group flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Floating Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up animation-delay-1000">
            {[
              { number: '50K+', label: 'Students', icon: Users, color: 'from-blue-500 to-teal-500' },
              { number: '98%', label: 'Success Rate', icon: Award, color: 'from-green-500 to-blue-500' },
              { number: '24/7', label: 'AI Support', icon: Brain, color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
                style={{ animationDelay: `${1200 + index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['features-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered platform transforms traditional learning into an engaging, personalized experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Learning',
                description: 'Adaptive algorithms that understand your learning style and pace',
                color: 'from-purple-500 to-pink-500',
                delay: 0
              },
              {
                icon: Target,
                title: 'Personalized Curriculum',
                description: 'Custom learning paths tailored to individual strengths and interests',
                color: 'from-blue-500 to-teal-500',
                delay: 200
              },
              {
                icon: Zap,
                title: 'Interactive Content',
                description: 'Engaging multimedia lessons with gamification elements',
                color: 'from-green-500 to-blue-500',
                delay: 400
              },
              {
                icon: Globe,
                title: 'Global Community',
                description: 'Connect with learners worldwide and share experiences',
                color: 'from-teal-500 to-purple-500',
                delay: 600
              },
              {
                icon: Shield,
                title: 'Safe Environment',
                description: 'Secure, monitored platform designed for young learners',
                color: 'from-pink-500 to-red-500',
                delay: 800
              },
              {
                icon: TrendingUp,
                title: 'Progress Tracking',
                description: 'Real-time analytics and detailed progress reports',
                color: 'from-orange-500 to-pink-500',
                delay: 1000
              }
            ].map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl border border-white/20 ${
                  isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-2xl animate-float animation-delay-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Revolutionizing
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Education</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our AI-powered platform combines cutting-edge technology with proven educational methodologies 
                to create a learning experience that adapts to each student's unique needs, interests, and pace.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Personalized learning algorithms',
                  'Real-time progress tracking',
                  'Interactive multimedia content',
                  '24/7 AI tutoring support'
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center transition-all duration-500 ${
                      isVisible['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div 
              id="about-visual"
              data-animate
              className={`relative transition-all duration-1000 ${
                isVisible['about-visual'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: BookOpen, color: 'from-purple-500 to-pink-500' },
                      { icon: Users, color: 'from-blue-500 to-teal-500' },
                      { icon: Award, color: 'from-green-500 to-blue-500' },
                      { icon: Star, color: 'from-orange-500 to-pink-500' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                          isVisible['about-visual'] ? 'animate-scale-in' : ''
                        }`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2">
                          <div className={`h-full bg-gradient-to-r ${item.color} rounded-full animate-pulse`} style={{ width: `${60 + index * 10}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-bounce animation-delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50" />
        
        {/* Light mode gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 transition-all duration-500" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="testimonials-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['testimonials-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Families Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of families who have transformed their homeschooling experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Homeschooling Parent',
                content: 'This platform has completely transformed how my children learn. The AI adapts to their pace perfectly!',
                rating: 5,
                delay: 0
              },
              {
                name: 'Michael Chen',
                role: 'Educational Consultant',
                content: 'The most innovative educational technology I\'ve seen. It truly personalizes learning for each child.',
                rating: 5,
                delay: 200
              },
              {
                name: 'Emily Rodriguez',
                role: 'Mother of 3',
                content: 'My kids are more engaged than ever. The interactive lessons make learning fun and effective.',
                rating: 5,
                delay: 400
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl border border-white/30 ${
                  isVisible[`testimonial-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${testimonial.delay}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float animation-delay-500" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="cta-content"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['cta-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of families already using our AI-powered platform to revolutionize homeschooling
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Start Free Trial
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group flex items-center text-white hover:text-gray-200 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-all duration-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
                Schedule Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>No setup required</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>100% secure</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Dumroo.AI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming education through AI-powered personalized learning experiences for homeschooling families worldwide.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <div key={social} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 cursor-pointer">
                    <div className="w-5 h-5 bg-current" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dumroo.AI. All rights reserved. Made with ❤️ for learners everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;