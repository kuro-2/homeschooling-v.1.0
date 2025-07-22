@@ .. @@
 import { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
-import { Menu, X, Zap } from 'lucide-react';
+import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
 
-const Navigation = () => {
+interface NavigationProps {
+  isDarkMode: boolean;
+  toggleTheme: () => void;
+}
+
+const Navigation = ({ isDarkMode, toggleTheme }: NavigationProps) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation();
 
@@ .. @@
   return (
-    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
+    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <Link to="/" className="flex items-center space-x-2">
-            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
-              <Zap className="w-5 h-5 text-white" />
+            <div className="w-8 h-8 bg-gradient-pastel-purple-pink rounded-lg flex items-center justify-center">
+              <Zap className="w-5 h-5 text-white" />
             </div>
-            <span className="text-xl font-bold text-white">Dumroo.AI</span>
+            <span className={`text-xl font-bold theme-heading`}>Dumroo.AI</span>
           </Link>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-8">
             {navItems.map((item) => (
               <Link
                 key={item.path}
                 to={item.path}
                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                   isActive(item.path)
-                    ? 'text-purple-400 bg-purple-400/10'
-                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
+                    ? `${isDarkMode ? 'text-pastel-purple bg-purple-400/10' : 'text-blue-600 bg-blue-50'}`
+                    : `${isDarkMode ? 'text-pastel-blue hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`
                 }`}
               >
                 {item.name}
               </Link>
             ))}
+            
+            {/* Theme Toggle */}
+            <button
+              onClick={toggleTheme}
+              className={`p-2 rounded-md transition-colors ${
+                isDarkMode 
+                  ? 'text-pastel-yellow hover:bg-gray-800' 
+                  : 'text-gray-600 hover:bg-gray-100'
+              }`}
+              aria-label="Toggle theme"
+            >
+              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
+            </button>
           </div>
 
           {/* Mobile menu button */}
           <div className="md:hidden">
             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
-              className="text-gray-300 hover:text-white p-2"
+              className={`${isDarkMode ? 'text-pastel-blue hover:text-white' : 'text-gray-600 hover:text-blue-600'} p-2`}
             >
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
@@ .. @@
 
       {/* Mobile Navigation */}
       {isMenuOpen && (
-        <div className="md:hidden bg-gray-900 border-t border-gray-800">
+        <div className={`md:hidden ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
           <div className="px-2 pt-2 pb-3 space-y-1">
             {navItems.map((item) => (
               <Link
                 key={item.path}
                 to={item.path}
                 onClick={() => setIsMenuOpen(false)}
                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                   isActive(item.path)
-                    ? 'text-purple-400 bg-purple-400/10'
-                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
+                    ? `${isDarkMode ? 'text-pastel-purple bg-purple-400/10' : 'text-blue-600 bg-blue-50'}`
+                    : `${isDarkMode ? 'text-pastel-blue hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`
                 }`}
               >
                 {item.name}
               </Link>
             ))}
+            
+            {/* Mobile Theme Toggle */}
+            <button
+              onClick={toggleTheme}
+              className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
+                isDarkMode 
+                  ? 'text-pastel-yellow hover:bg-gray-800' 
+                  : 'text-gray-600 hover:bg-gray-100'
+              }`}
+            >
+              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
+              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
+            </button>
           </div>
         </div>
       )}