@@ .. @@
 import { useState, useEffect } from 'react';
 import { 
   Zap, Shield, Rocket, Users, TrendingUp, Star, 
   CheckCircle, ArrowRight, Play, Award, Target, 
   Globe, Smartphone, Database, Cloud 
 } from 'lucide-react';
 import Navigation from '../components/Navigation';
 
-const LandingPage = () => {
+interface LandingPageProps {
+  isDarkMode: boolean;
+  toggleTheme: () => void;
+}
+
+const LandingPage = ({ isDarkMode, toggleTheme }: LandingPageProps) => {
   const [isVisible, setIsVisible] = useState(false);
 
@@ .. @@
   return (
-    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
-      <Navigation />
+    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-x-hidden`}>
+      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
       
       {/* Hero Section */}
-      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
+      <section className={`relative min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'} overflow-hidden`}>
         {/* Background Elements */}
-        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
+        <div className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}></div>
         
         {/* Floating Elements */}
-        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"></div>
-        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl animate-float animation-delay-500"></div>
-        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
+        <div className={`absolute top-20 left-10 w-32 h-32 ${isDarkMode ? 'bg-gradient-to-br from-purple-400/20 to-pink-400/20' : 'bg-gradient-to-br from-blue-400/10 to-purple-400/10'} rounded-full blur-xl animate-float`}></div>
+        <div className={`absolute bottom-20 right-10 w-40 h-40 ${isDarkMode ? 'bg-gradient-to-br from-blue-400/20 to-teal-400/20' : 'bg-gradient-to-br from-teal-400/10 to-blue-400/10'} rounded-full blur-xl animate-float animation-delay-500`}></div>
+        <div className={`absolute top-1/2 left-1/4 w-24 h-24 ${isDarkMode ? 'bg-gradient-to-br from-green-400/20 to-blue-400/20' : 'bg-gradient-to-br from-green-400/10 to-blue-400/10'} rounded-full blur-xl animate-float animation-delay-1000`}></div>
         
         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
-          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in-up">
+          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 ${isDarkMode ? 'bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent' : 'theme-heading'} animate-fade-in-up`}>
             Transform Your Business with AI
           </h1>
-          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
+          <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} mb-8 leading-relaxed animate-fade-in-up animation-delay-200`}>
             Unlock the power of artificial intelligence to streamline operations, boost productivity, and drive innovation across your organization.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
-            <button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
+            <button className="theme-button px-8 py-4 rounded-xl text-lg font-semibold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
               <span>Get Started Free</span>
               <ArrowRight className="w-5 h-5" />
             </button>
-            <button className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-600 text-white hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2">
+            <button className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 ${isDarkMode ? 'border-gray-600 text-pastel-blue hover:border-gray-500 hover:bg-gray-800' : 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50'} transition-all duration-300 flex items-center justify-center space-x-2`}>
               <Play className="w-5 h-5" />
               <span>Watch Demo</span>
             </button>
@@ .. @@
       </section>
 
       {/* Features Section */}
-      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
+      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-          <div className="text-center mb-16">
-            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
+          <div className="text-center mb-16 scroll-animate">
+            <h2 className="text-4xl md:text-5xl font-bold theme-heading mb-4">
               Powerful AI Features
             </h2>
-            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
+            <p className={`text-xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} max-w-3xl mx-auto`}>
               Discover how our cutting-edge AI solutions can revolutionize your workflow and accelerate your success.
             </p>
           </div>
@@ .. @@
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {features.map((feature, index) => (
-              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scroll-animate">
-                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
+              <div key={index} className={`group ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-purple-400/50' : 'bg-white/80 border-gray-200 hover:border-blue-300'} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scroll-animate`}>
+                <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-pastel-purple-pink' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                   <feature.icon className="w-6 h-6 text-white" />
                 </div>
-                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
+                <h3 className={`text-xl font-semibold theme-heading mb-3 ${isDarkMode ? 'group-hover:text-pastel-purple' : 'group-hover:text-blue-600'} transition-colors`}>
                   {feature.title}
                 </h3>
-                <p className="text-gray-400 leading-relaxed">
+                <p className={`${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} leading-relaxed`}>
                   {feature.description}
                 </p>
               </div>
@@ .. @@
       </section>
 
       {/* Stats Section */}
-      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
+      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-50 via-white to-gray-50'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {stats.map((stat, index) => (
-              <div key={index} className="text-center group scroll-animate">
-                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
+              <div key={index} className="text-center group scroll-animate">
+                <div className={`text-4xl lg:text-5xl font-bold theme-heading mb-2 group-hover:scale-110 transition-transform duration-300`}>
                   {stat.number}
                 </div>
-                <div className="text-lg text-gray-300 font-medium">
+                <div className={`text-lg ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} font-medium`}>
                   {stat.label}
                 </div>
               </div>
@@ .. @@
       </section>
 
       {/* Testimonials Section */}
-      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
+      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-          <div className="text-center mb-16">
-            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 scroll-animate">
+          <div className="text-center mb-16 scroll-animate">
+            <h2 className="text-4xl md:text-5xl font-bold theme-heading mb-4">
               What Our Clients Say
             </h2>
-            <p className="text-xl text-gray-300 max-w-3xl mx-auto scroll-animate">
+            <p className={`text-xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} max-w-3xl mx-auto`}>
               Join thousands of satisfied customers who have transformed their businesses with our AI solutions.
             </p>
           </div>
@@ .. @@
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
-              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1 scroll-animate">
+              <div key={index} className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-teal-400/50' : 'bg-white/80 border-gray-200 hover:border-teal-300'} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 scroll-animate`}>
                 <div className="flex items-center mb-4">
                   {[...Array(5)].map((_, i) => (
-                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
+                    <Star key={i} className={`w-5 h-5 ${isDarkMode ? 'text-pastel-yellow' : 'text-yellow-500'} fill-current`} />
                   ))}
                 </div>
-                <p className="text-gray-300 mb-6 leading-relaxed">
+                <p className={`${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} mb-6 leading-relaxed`}>
                   "{testimonial.content}"
                 </p>
                 <div className="flex items-center">
-                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
+                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-teal-400 to-blue-400' : 'bg-gradient-to-br from-blue-500 to-teal-500'} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                     {testimonial.name.charAt(0)}
                   </div>
                   <div>
-                    <div className="font-semibold text-white">{testimonial.name}</div>
-                    <div className="text-sm text-gray-400">{testimonial.role}</div>
+                    <div className={`font-semibold theme-heading`}>{testimonial.name}</div>
+                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</div>
                   </div>
                 </div>
               </div>
@@ .. @@
       </section>
 
       {/* Pricing Section */}
-      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
+      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-          <div className="text-center mb-16">
-            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 scroll-animate">
+          <div className="text-center mb-16 scroll-animate">
+            <h2 className="text-4xl md:text-5xl font-bold theme-heading mb-4">
               Choose Your Plan
             </h2>
-            <p className="text-xl text-gray-300 max-w-3xl mx-auto scroll-animate">
+            <p className={`text-xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} max-w-3xl mx-auto`}>
               Select the perfect plan that fits your needs and budget. All plans include our core AI features.
             </p>
           </div>
@@ .. @@
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {pricingPlans.map((plan, index) => (
-              <div key={index} className={`relative rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl scroll-animate ${
+              <div key={index} className={`relative rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl scroll-animate ${
                 plan.popular 
-                  ? 'bg-gradient-to-b from-purple-900/20 to-pink-900/20 border-purple-400/50 scale-105' 
-                  : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
+                  ? isDarkMode 
+                    ? 'bg-gradient-to-b from-purple-900/20 to-pink-900/20 border-purple-400/50 scale-105' 
+                    : 'bg-gradient-to-b from-blue-50 to-purple-50 border-blue-300 scale-105'
+                  : isDarkMode
+                    ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
+                    : 'bg-white/80 border-gray-200 hover:border-gray-300'
               }`}>
                 {plan.popular && (
-                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
+                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'bg-gradient-pastel-purple-pink' : 'bg-gradient-to-r from-blue-500 to-purple-600'} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                     Most Popular
                   </div>
                 )}
-                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
-                <div className="text-4xl font-bold text-white mb-1">
+                <h3 className="text-2xl font-bold theme-heading mb-2">{plan.name}</h3>
+                <div className="text-4xl font-bold theme-heading mb-1">
                   ${plan.price}
-                  <span className="text-lg text-gray-400 font-normal">/month</span>
+                  <span className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-normal`}>/month</span>
                 </div>
-                <p className="text-gray-400 mb-6">{plan.description}</p>
+                <p className={`${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} mb-6`}>{plan.description}</p>
                 <ul className="space-y-3 mb-8">
                   {plan.features.map((feature, featureIndex) => (
-                    <li key={featureIndex} className="flex items-center text-gray-300">
-                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
+                    <li key={featureIndex} className={`flex items-center ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'}`}>
+                      <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-pastel-green' : 'text-green-500'} mr-3 flex-shrink-0`} />
                       {feature}
                     </li>
                   ))}
                 </ul>
-                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
+                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                   plan.popular
-                    ? 'btn-primary hover:-translate-y-1'
-                    : 'border-2 border-gray-600 text-white hover:border-gray-500 hover:bg-gray-800'
+                    ? 'theme-button hover:-translate-y-1'
+                    : isDarkMode
+                      ? 'border-2 border-gray-600 text-pastel-blue hover:border-gray-500 hover:bg-gray-800'
+                      : 'border-2 border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50'
                 }`}>
                   Get Started
                 </button>
@@ .. @@
       </section>
 
       {/* CTA Section */}
-      <section className="py-20 bg-gradient-to-r from-purple-900 via-gray-900 to-pink-900">
+      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-r from-purple-900 via-gray-900 to-pink-900' : 'bg-gradient-to-r from-blue-50 via-white to-purple-50'}`}>
         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
-          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate">
+          <h2 className="text-4xl md:text-5xl font-bold theme-heading mb-6 scroll-animate">
             Ready to Transform Your Business?
           </h2>
-          <p className="text-xl text-gray-300 mb-8 scroll-animate">
+          <p className={`text-xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} mb-8 scroll-animate`}>
             Join thousands of companies already using our AI solutions to drive growth and innovation.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
-            <button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
+            <button className="theme-button px-8 py-4 rounded-xl text-lg font-semibold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
               <span>Start Free Trial</span>
               <ArrowRight className="w-5 h-5" />
             </button>
-            <button className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-600 text-white hover:border-gray-500 hover:bg-gray-800 transition-all duration-300">
+            <button className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 ${isDarkMode ? 'border-gray-600 text-pastel-blue hover:border-gray-500 hover:bg-gray-800' : 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50'} transition-all duration-300`}>
               Contact Sales
             </button>
           </div>
@@ .. @@
       </section>
 
       {/* Footer */}
-      <footer className="bg-gray-900 border-t border-gray-800 py-12">
+      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t py-12`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="col-span-1 md:col-span-2">
               <div className="flex items-center space-x-2 mb-4">
-                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
+                <div className={`w-8 h-8 ${isDarkMode ? 'bg-gradient-pastel-purple-pink' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-lg flex items-center justify-center`}>
                   <Zap className="w-5 h-5 text-white" />
                 </div>
-                <span className="text-xl font-bold text-white">Dumroo.AI</span>
+                <span className="text-xl font-bold theme-heading">Dumroo.AI</span>
               </div>
-              <p className="text-gray-400 mb-4 max-w-md">
+              <p className={`${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} mb-4 max-w-md`}>
                 Empowering businesses with cutting-edge AI solutions to drive innovation, efficiency, and growth in the digital age.
               </p>
             </div>
             
             <div>
-              <h4 className="text-white font-semibold mb-4">Product</h4>
-              <ul className="space-y-2 text-gray-400">
+              <h4 className="theme-heading font-semibold mb-4">Product</h4>
+              <ul className={`space-y-2 ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'}`}>
                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">API</a></li>
@@ .. @@
             </div>
             
             <div>
-              <h4 className="text-white font-semibold mb-4">Company</h4>
-              <ul className="space-y-2 text-gray-400">
+              <h4 className="theme-heading font-semibold mb-4">Company</h4>
+              <ul className={`space-y-2 ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'}`}>
                 <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
@@ .. @@
             </div>
           </div>
           
-          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
-            <p className="text-gray-400">
+          <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} mt-8 pt-8 text-center`}>
+            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
               © 2024 Dumroo.AI. All rights reserved.
             </p>
           </div>