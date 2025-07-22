import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      icon: DollarSign,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-400/20 to-green-600/20',
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+15.3%',
      icon: Users,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-400/20 to-blue-600/20',
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.5%',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-400/20 to-purple-600/20',
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '+8.1%',
      icon: Clock,
      color: 'from-teal-400 to-teal-600',
      bgColor: 'from-teal-400/20 to-teal-600/20',
    },
  ];

  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 52 },
    { month: 'Apr', value: 82 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 87 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-gray-400 mt-1">
                  Monitor your performance and analytics
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className={`scroll-animate animation-delay-${(index + 1) * 100} bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                    </div>
                    <span className="text-green-400 text-sm font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-400 text-sm font-medium mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Chart */}
            <div className="scroll-animate animation-delay-500 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Revenue Trend</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Monthly Revenue</span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {chartData.map((item, index) => (
                  <div key={item.month} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000 hover:from-purple-400 hover:to-pink-400"
                      style={{ height: `${item.value}%` }}
                    ></div>
                    <span className="text-gray-400 text-xs mt-2">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Overview */}
            <div className="scroll-animate animation-delay-600 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Activity Overview</h3>
                <Activity className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Page Views', value: 85, color: 'from-blue-400 to-blue-600' },
                  { label: 'User Sessions', value: 72, color: 'from-green-400 to-green-600' },
                  { label: 'Bounce Rate', value: 45, color: 'from-yellow-400 to-orange-500' },
                  { label: 'Conversion', value: 68, color: 'from-purple-400 to-pink-500' },
                ].map((item, index) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-white font-medium">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-8">
            <div className="scroll-animate animation-delay-700 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Transactions</h3>
              <div className="space-y-4">
                {[
                  { id: '#12345', amount: '$1,234', status: 'Completed', date: '2 hours ago' },
                  { id: '#12346', amount: '$856', status: 'Pending', date: '4 hours ago' },
                  { id: '#12347', amount: '$2,100', status: 'Completed', date: '6 hours ago' },
                  { id: '#12348', amount: '$445', status: 'Failed', date: '8 hours ago' },
                ].map((transaction, index) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.id}</p>
                        <p className="text-gray-400 text-sm">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{transaction.amount}</p>
                      <p className={`text-sm ${
                        transaction.status === 'Completed' ? 'text-green-400' :
                        transaction.status === 'Pending' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;