@@ .. @@
 import Navigation from '../components/Navigation';
 
-const RecentActivity = () => {
+interface RecentActivityProps {
+  isDarkMode: boolean;
+  toggleTheme: () => void;
+}
+
+const RecentActivity = ({ isDarkMode, toggleTheme }: RecentActivityProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const [filter, setFilter] = useState('all');
 
@@ .. @@
   return (
-    <div className="min-h-screen bg-gray-900">
-      <Navigation />
+    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
+      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
       
       {/* Header */}
-      <div className="pt-20 pb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
+      <div className={`pt-20 pb-8 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-50 via-white to-gray-50'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
+          <h1 className="text-4xl md:text-5xl font-bold theme-heading mb-4 animate-fade-in-up">
             Recent Activity
           </h1>
-          <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-200">
+          <p className={`text-xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} animate-fade-in-up animation-delay-200`}>
             Track all your AI system activities and user interactions
           </p>
         </div>
@@ .. @@
         {/* Activity Stats */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {activityStats.map((stat, index) => (
-            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1 scroll-animate">
-              <div className="flex items-center justify-between mb-4">
-                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bgColor}`}>
+            <div key={index} className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-teal-400/50' : 'bg-white/80 border-gray-200 hover:border-teal-300'} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 scroll-animate`}>
+              <div className="flex items-center justify-between mb-4">
+                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDarkMode ? stat.bgColor : 'bg-gradient-to-br from-blue-500 to-teal-500'}`}>
                   <stat.icon className="w-6 h-6 text-white" />
                 </div>
-                <span className={`text-sm font-medium px-2 py-1 rounded-full ${stat.changeColor}`}>
+                <span className={`text-sm font-medium px-2 py-1 rounded-full ${isDarkMode ? stat.changeColor : 'bg-green-100 text-green-600'}`}>
                   {stat.change}
                 </span>
               </div>
-              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
-              <p className="text-gray-400 text-sm">{stat.label}</p>
+              <h3 className="text-2xl font-bold theme-heading mb-1">{stat.value}</h3>
+              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{stat.label}</p>
             </div>
           ))}
         </div>
@@ .. @@
         {/* Filter Buttons */}
-        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8 scroll-animate">
-          <h3 className="text-xl font-semibold text-white mb-4">Filter Activities</h3>
+        <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border mb-8 scroll-animate`}>
+          <h3 className="text-xl font-semibold theme-heading mb-4">Filter Activities</h3>
           <div className="flex flex-wrap gap-3">
             {filterOptions.map((option) => (
               <button
                 key={option.value}
                 onClick={() => setFilter(option.value)}
                 className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                   filter === option.value
-                    ? 'bg-gradient-to-r from-teal-400 to-blue-400 text-white'
-                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white'
+                    ? isDarkMode 
+                      ? 'bg-gradient-to-r from-teal-400 to-blue-400 text-white'
+                      : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
+                    : isDarkMode
+                      ? 'bg-gray-700/50 text-pastel-blue hover:bg-gray-700 hover:text-white'
+                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                 }`}
               >
                 {option.label}
@@ .. @@
         </div>
 
         {/* Activity Feed */}
-        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 scroll-animate">
-          <h3 className="text-xl font-semibold text-white mb-6">Activity Timeline</h3>
+        <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border scroll-animate`}>
+          <h3 className="text-xl font-semibold theme-heading mb-6">Activity Timeline</h3>
           <div className="space-y-6">
             {filteredActivities.map((activity, index) => (
-              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
-                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.iconBg}`}>
+              <div key={index} className={`flex items-start space-x-4 p-4 ${isDarkMode ? 'bg-gray-700/30 hover:bg-gray-700/50' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-colors`}>
+                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? activity.iconBg : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
                   <activity.icon className="w-5 h-5 text-white" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="flex items-center justify-between mb-1">
-                    <h4 className="text-white font-medium">{activity.title}</h4>
-                    <span className="text-gray-400 text-sm flex-shrink-0">{activity.time}</span>
+                    <h4 className="theme-heading font-medium">{activity.title}</h4>
+                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm flex-shrink-0`}>{activity.time}</span>
                   </div>
-                  <p className="text-gray-300 text-sm mb-2">{activity.description}</p>
+                  <p className={`${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} text-sm mb-2`}>{activity.description}</p>
                   <div className="flex items-center space-x-4">
-                    <span className={`text-xs px-2 py-1 rounded-full ${activity.statusColor}`}>
+                    <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? activity.statusColor : 'bg-green-100 text-green-600'}`}>
                       {activity.status}
                     </span>
                     {activity.user && (
-                      <span className="text-gray-400 text-xs">by {activity.user}</span>
+                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>by {activity.user}</span>
                     )}
                   </div>
                 </div>
@@ .. @@
           </div>
           
           {/* Load More Button */}
           <div className="text-center mt-8">
-            <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-lg font-medium hover:from-teal-300 hover:to-blue-300 transition-all duration-300 hover:-translate-y-1">
+            <button className={`px-6 py-3 ${isDarkMode ? 'bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-300 hover:to-blue-300' : 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400'} text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-1`}>
               Load More Activities
             </button>
           </div>