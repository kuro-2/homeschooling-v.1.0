import React, { useState } from 'react';
import { Menu, X, ArrowRight, Users, BookOpen, Calendar, Sparkles, Star, ChevronRight, Brain, Target, BarChart3, Library, Clock, TrendingUp, Eye, Zap, Sun, Moon, UserPlus, FileText, Settings, Wand2 } from 'lucide-react';

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Initialize scroll animations
  useScrollAnimation();

  const aboutFeatures = [
    {
      icon: Users,
      title: "Add a Student",
      description: "Simple onboarding process that creates personalized learning profiles for each student in minutes.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Syllabus AI",
      description: "Intelligent curriculum builder that structures comprehensive learning paths tailored to your educational goals.",
      image: "https://images.pexels.com/photos/8613297/pexels-photo-8613297.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-teal-600"
    },
    {
      icon: Calendar,
      title: "Planning AI",
      description: "Smart scheduling that auto-plans lessons week-by-week with adaptable timelines that fit your family's rhythm.",
      image: "https://images.pexels.com/photos/8613202/pexels-photo-8613202.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-teal-600 to-green-600"
    },
    {
      icon: Sparkles,
      title: "Personalize AI",
      description: "The magic of AI personalization—customized to each student's unique pace, learning style, and interests.",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-600 to-purple-600"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Curriculum Assistant",
      description: "Get personalized curriculum planning and lesson design assistance",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Target,
      title: "Learning Path Designer",
      description: "Create customized learning paths for each child",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor learning progress with detailed analytics",
      gradient: "from-teal-600 to-blue-600"
    },
    {
      icon: Library,
      title: "Resource Library",
      description: "Access curated educational resources and materials",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  const aiTools = [
    {
      title: "Syllabus AI",
      description: "Creates comprehensive curricula tailored to your student's grade level, learning objectives, and interests.",
      image: "/public/image1.png",
      features: [
        "Grade-appropriate content",
        "Subject integration",
        "Learning objective alignment",
        "Progress tracking"
      ]
    },
    {
      title: "Planning AI",
      description: "Intelligent scheduling and lesson planning that adapts to your family's pace and learning goals.",
      image: "/public/image2.png",
      features: [
        "Adaptive scheduling",
        "Optimal learning paths",
        "Progress monitoring",
        "Resource suggestions"
      ]
    },
    {
      title: "Personalize AI",
      description: "Customizes content delivery and learning experiences to match each student's unique learning style.",
      image: "/public/image3.png",
      features: [
        "Learning style adaptation",
        "Interest-based content",
        "Difficulty adjustment",
        "Engagement optimization"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeschooling Mother of 3",
      content: "Dumroo.AI transformed our homeschooling journey. The AI-powered planning saved me hours every week and my kids are more engaged than ever.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Former Teacher, Now Homeschooling Dad",
      content: "As an educator, I'm impressed by how Dumroo.AI adapts to each child's learning style. It's like having a personal tutor for every subject.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Homeschooling Coordinator",
      content: "The syllabus AI is incredible. It created a comprehensive curriculum that would have taken me months to develop on my own.",
      rating: 5
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} overflow-x-hidden transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm z-50 border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                Dumroo.AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:scale-105 relative group`}>
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#ai-tools" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:scale-105 relative group`}>
                AI Tools
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#why-choose-us" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:scale-105 relative group`}>
                Why Choose Us?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:scale-105 relative group`}>
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all duration-300 hover:scale-110 hover:rotate-12`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="https://dumroo.ai/login" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5">
                Get Started
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 transform rotate-90 transition-transform duration-300" /> : <Menu className="w-6 h-6 transform hover:scale-110 transition-all duration-300" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t transition-all duration-300 animate-slide-down`}>
            <div className="px-4 py-4 space-y-4">
              <a href="#about" className={`block ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:translate-x-2 hover:scale-105`}>About Us</a>
              <a href="#ai-tools" className={`block ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:translate-x-2 hover:scale-105`}>AI Tools</a>
              <a href="#why-choose-us" className={`block ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:translate-x-2 hover:scale-105`}>Why Choose Us?</a>
              <a href="#testimonials" className={`block ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:translate-x-2 hover:scale-105`}>Testimonials</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-all duration-300 hover:translate-x-2 hover:scale-105`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a href="https://dumroo.ai/login" className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg text-white">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Improved background for both modes */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20' 
            : 'bg-gradient-to-br from-blue-50/30 via-white/40 to-purple-50/30'
        } transition-all duration-500`}></div>
        
        {/* Subtle pattern overlay for light mode */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-[url("https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-center opacity-10' 
            : 'bg-[url("https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-center opacity-20'
        } hover:scale-105 transition-transform duration-700`}></div>
        
        {/* Geometric shapes for visual interest in light mode */}
        {!isDarkMode && (
          <>
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-xl animate-float animation-delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/20 to-green-200/20 rounded-full blur-xl animate-float animation-delay-500"></div>
          </>
        )}
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 scroll-animate">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Empower Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Homeschooling Journey
              </span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200`}>
              Transform your homeschooling experience with AI-powered tools designed specifically for homeschooling educators. From personalized curricula to adaptive lesson plans, we make quality education accessible and engaging.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up animation-delay-400">
              <a href="https://dumroo.ai/login" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button className={`w-full sm:w-auto border ${isDarkMode ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800' : 'border-gray-300 hover:border-gray-500 hover:bg-gray-100'} px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5`}>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-gray-100'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Everything You Need to</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fade-in-up animation-delay-200`}>
              Powerful tools and features designed specifically for homeschooling educators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`} style={{animationDelay: `${index * 100}ms`}}>
                <div className={`p-3 lg:p-4 rounded-lg bg-gradient-to-r ${feature.gradient} w-fit mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                </div>
                
                <h3 className={`text-lg lg:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 lg:mb-4 group-hover:text-purple-400 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                
                <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section with Visual Illustrations */}
      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-700' : 'bg-gradient-to-b from-gray-100 to-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>How It</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Get started with Dumroo.AI in four simple steps and transform your homeschooling experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Add Student */}
            <div className="text-center scroll-animate">
              <div className={`relative mx-auto w-32 h-32 mb-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} rounded-full flex items-center justify-center border-4 border-purple-200/30 hover:border-purple-400/50 transition-all duration-300 group`}>
                {/* Animated background circles */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-300"></div>
                
                {/* Icon with number */}
                <div className="relative z-10 flex flex-col items-center">
                  <UserPlus className="w-12 h-12 text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full">1</span>
                </div>
                
                {/* Connecting line */}
                <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent"></div>
              </div>
              
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Add Student</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Create a personalized profile for your student with their learning preferences and goals
              </p>
            </div>

            {/* Step 2: Generate Syllabus */}
            <div className="text-center scroll-animate animation-delay-200">
              <div className={`relative mx-auto w-32 h-32 mb-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} rounded-full flex items-center justify-center border-4 border-blue-200/30 hover:border-blue-400/50 transition-all duration-300 group`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 animate-pulse-slow animation-delay-100"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <FileText className="w-12 h-12 text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-white px-2 py-1 rounded-full">2</span>
                </div>
                
                <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
              </div>
              
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Generate Syllabus</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                AI creates a comprehensive curriculum tailored to your student's grade level and interests
              </p>
            </div>

            {/* Step 3: Plan Lessons */}
            <div className="text-center scroll-animate animation-delay-300">
              <div className={`relative mx-auto w-32 h-32 mb-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} rounded-full flex items-center justify-center border-4 border-teal-200/30 hover:border-teal-400/50 transition-all duration-300 group`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-green-400/20 animate-pulse-slow animation-delay-200"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-teal-500/10 to-green-500/10 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <Calendar className="w-12 h-12 text-teal-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-bold bg-gradient-to-r from-teal-600 to-green-600 text-white px-2 py-1 rounded-full">3</span>
                </div>
                
                <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent"></div>
              </div>
              
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Plan Lessons</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Smart scheduling creates weekly lesson plans that adapt to your family's rhythm
              </p>
            </div>

            {/* Step 4: Personalize Learning */}
            <div className="text-center scroll-animate animation-delay-400">
              <div className={`relative mx-auto w-32 h-32 mb-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} rounded-full flex items-center justify-center border-4 border-green-200/30 hover:border-green-400/50 transition-all duration-300 group`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-purple-400/20 animate-pulse-slow animation-delay-300"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <Wand2 className="w-12 h-12 text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-bold bg-gradient-to-r from-green-600 to-purple-600 text-white px-2 py-1 rounded-full">4</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Personalize</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                AI continuously adapts content to match your student's learning style and pace
              </p>
            </div>
          </div>

          {/* Call to action for this section */}
          <div className="text-center mt-16 scroll-animate animation-delay-500">
            <a href="https://dumroo.ai/login" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ai-tools" className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-700 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Meet Your AI</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Teaching Assistants
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fade-in-up animation-delay-200`}>
              Three specialized AI tools working together to create the perfect homeschooling experience for your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aiTools.map((tool, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3 group scroll-animate`} style={{animationDelay: `${index * 150}ms`}}>
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} opacity-20`}></div>
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className={`px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${tool.gradient} text-white text-xs sm:text-sm font-medium transform group-hover:scale-110 transition-all duration-300`}>
                      {tool.title}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 lg:mb-4 group-hover:text-purple-400 transition-colors duration-300`}>
                    {tool.title}
                  </h3>
                  
                  <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 lg:mb-6 leading-relaxed`}>
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <h4 className={`text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Features:</h4>
                    <ul className="space-y-1 lg:space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center gap-2 lg:gap-3 text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:translate-x-1 transition-transform duration-300`} style={{transitionDelay: `${featureIndex * 50}ms`}}>
                          <div className={`w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-gradient-to-r ${tool.gradient} group-hover:scale-125 transition-transform duration-300`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-700' : 'bg-gradient-to-b from-gray-50 to-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Why Homeschooling Educators</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Love Dumroo AI
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fade-in-up animation-delay-200`}>
              See the impact our platform has on homeschooling success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className={`text-center ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`}>
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  50%
                </div>
                <div className={`text-lg lg:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-purple-400 transition-colors duration-300`}>
                  Time Saved
                </div>
                <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Reduce planning time by up to 50%
                </p>
              </div>
              <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
            </div>

            <div className={`text-center ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-100`}>
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  85%
                </div>
                <div className={`text-lg lg:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-blue-400 transition-colors duration-300`}>
                  Better Outcomes
                </div>
                <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Improved learning results
                </p>
              </div>
              <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
            </div>

            <div className={`text-center ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-200`}>
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  90%
                </div>
                <div className={`text-lg lg:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-teal-400 transition-colors duration-300`}>
                  Engagement
                </div>
                <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Increased student engagement
                </p>
              </div>
              <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto rounded-full group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
            </div>

            <div className={`text-center ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-300`}>
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className={`text-lg lg:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-green-400 transition-colors duration-300`}>
                  Personalization
                </div>
                <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Tailored learning experiences
                </p>
              </div>
              <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-700 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Trusted by</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Homeschooling Families
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fade-in-up animation-delay-200`}>
              See how Dumroo.AI is transforming homeschooling experiences across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white/70 border-gray-200 hover:border-gray-300'} backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`} style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex items-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                  ))}
                </div>
                
                <p className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-sm lg:text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className={`text-sm lg:text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-400 transition-colors duration-300`}>{testimonial.name}</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs lg:text-sm`}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900' : 'bg-gradient-to-r from-purple-100 via-gray-50 to-blue-100'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} animate-fade-in-up`}>
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Homeschooling Journey?
            </span>
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200`}>
            Join thousands of families who've already discovered the power of AI-assisted homeschooling. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a href="https://dumroo.ai/login" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button className={`w-full sm:w-auto border ${isDarkMode ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800' : 'border-gray-300 hover:border-gray-500 hover:bg-gray-100'} px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5`}>
              Schedule Demo
            </button>
          </div>
          
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-6 text-xs sm:text-sm animate-fade-in-up animation-delay-600`}>
            No credit card required • Free to start • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t py-12 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                  Dumroo.ai
                </span>
              </div>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                Empowering homeschooling families with AI-powered educational tools for personalized learning experiences.
              </p>
            </div>

            {/* Product Section */}
            <div>
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}>Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Syllabus AI</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Planning AI</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Personalize AI</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Pricing</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}>Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Help Center</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Documentation</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Community</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 text-sm hover:translate-x-1`}>Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}>Contact</h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  <a href="mailto:support@eduaihub.com" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-all duration-300 hover:translate-x-1`}>
                    support@eduaihub.com
                  </a>
                </li>
                <li>
                  <a href="tel:1-800-EDU-HELP" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-all duration-300 hover:translate-x-1`}>
                    1-800-EDU-HELP
                  </a>
                </li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 md:mb-0`}>
                © 2025 Dumroo.ai. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 hover:scale-105`}>Privacy Policy</a>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 hover:scale-105`}>Terms of Service</a>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 hover:scale-105`}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;