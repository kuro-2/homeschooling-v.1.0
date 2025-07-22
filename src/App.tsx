import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Menu, X, ArrowRight, Users, BookOpen, Calendar, Sparkles, Star, ChevronRight, Brain, Target, BarChart3, Library, Clock, TrendingUp, Eye, Zap, Sun, Moon, UserPlus, FileText, Settings, Wand2, Award, PieChart, Activity, Plus, MessageCircle, Download, CheckCircle } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import RecentActivity from './pages/RecentActivity';
import './index.css';

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

  useEffect(() => {
    // Apply theme class to body
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
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
      image: "/image1.png",
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
      image: "/image2.png",
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
      image: "/image3.png",
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
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          <Route path="/recent-activity" element={<RecentActivity isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;