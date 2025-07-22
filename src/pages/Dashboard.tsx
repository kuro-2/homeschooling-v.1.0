@@ .. @@
 import Navigation from '../components/Navigation';
 
-const Dashboard = () => {
+interface DashboardProps {
+  isDarkMode: boolean;
+  toggleTheme: () => void;
+}
+
+const Dashboard = ({ isDarkMode, toggleTheme }: DashboardProps) => {
   const [isVisible, setIsVisible] = useState(false);
 
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
             Dashboard
           </h1>
-          <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-200">
+          <p className={`text-xl ${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'} animate-fade-in-up animation-delay-200`}>
             Monitor your AI-powered business metrics and insights
           </p>
         </div>
@@ .. @@
 
       {/* Main Content */}
-      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
+      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {stats.map((stat, index) => (
-            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1 scroll-animate">
-              <div className="flex items-center justify-between mb-4">
-                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bgColor}`}>
+            <div key={index} className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-purple-400/50' : 'bg-white/80 border-gray-200 hover:border-blue-300'} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 scroll-animate`}>
+              <div className="flex items-center justify-between mb-4">
+                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDarkMode ? stat.bgColor : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
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
         {/* Charts Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
           {/* Revenue Chart */}
-          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 scroll-animate">
-            <h3 className="text-xl font-semibold text-white mb-6">Revenue Overview</h3>
+          <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border scroll-animate`}>
+            <h3 className="text-xl font-semibold theme-heading mb-6">Revenue Overview</h3>
             <div className="space-y-4">
               {revenueData.map((item, index) => (
                 <div key={index} className="flex items-center justify-between">
-                  <span className="text-gray-300">{item.month}</span>
+                  <span className={`${isDarkMode ? 'text-pastel-blue' : 'text-gray-600'}`}>{item.month}</span>
                   <div className="flex items-center space-x-3">
-                    <div className="w-32 bg-gray-700 rounded-full h-2">
-                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000" 
+                    <div className={`w-32 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
+                      <div className={`${isDarkMode ? 'bg-gradient-pastel-purple-pink' : 'bg-gradient-to-r from-blue-500 to-purple-600'} h-2 rounded-full transition-all duration-1000`} 
                            style={{ width: `${item.percentage}%` }}></div>
                     </div>
-                    <span className="text-white font-semibold w-16 text-right">${item.amount}</span>
+                    <span className="theme-heading font-semibold w-16 text-right">${item.amount}</span>
                   </div>
                 </div>
               ))}
@@ .. @@
           </div>
 
           {/* Activity Overview */}
-          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 scroll-animate">
-            <h3 className="text-xl font-semibold text-white mb-6">Activity Overview</h3>
+          <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border scroll-animate`}>
+            <h3 className="text-xl font-semibold theme-heading mb-6">Activity Overview</h3>
             <div className="space-y-6">
               {activityData.map((activity, index) => (
                 <div key={index} className="flex items-center space-x-4">
-                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}>
+                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? activity.color : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
                     <activity.icon className="w-5 h-5 text-white" />
                   </div>
                   <div className="flex-1">
-                    <h4 className="text-white font-medium">{activity.name}</h4>
-                    <p className="text-gray-400 text-sm">{activity.description}</p>
+                    <h4 className="theme-heading font-medium">{activity.name}</h4>
+                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{activity.description}</p>
                   </div>
-                  <span className="text-white font-semibold">{activity.count}</span>
+                  <span className="theme-heading font-semibold">{activity.count}</span>
                 </div>
               ))}
             </div>
@@ .. @@
 
         {/* Recent Transactions */}
-        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 scroll-animate">
-          <h3 className="text-xl font-semibold text-white mb-6">Recent Transactions</h3>
+        <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border scroll-animate`}>
+          <h3 className="text-xl font-semibold theme-heading mb-6">Recent Transactions</h3>
           <div className="space-y-4">
             {transactions.map((transaction, index) => (
-              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
+              <div key={index} className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-gray-700/30 hover:bg-gray-700/50' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-colors`}>
                 <div className="flex items-center space-x-4">
-                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'income' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
+                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'income' ? (isDarkMode ? 'bg-green-500/20 text-pastel-green' : 'bg-green-100 text-green-600') : (isDarkMode ? 'bg-red-500/20 text-pastel-red' : 'bg-red-100 text-red-600')}`}>
                     {transaction.type === 'income' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                   </div>
                   <div>
-                    <h4 className="text-white font-medium">{transaction.description}</h4>
-                    <p className="text-gray-400 text-sm">{transaction.date}</p>
+                    <h4 className="theme-heading font-medium">{transaction.description}</h4>
+                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{transaction.date}</p>
                   </div>
                 </div>
-                <span className={`font-semibold ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
+                <span className={`font-semibold ${transaction.type === 'income' ? (isDarkMode ? 'text-pastel-green' : 'text-green-600') : (isDarkMode ? 'text-pastel-red' : 'text-red-600')}`}>
                   {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                 </span>
               </div>