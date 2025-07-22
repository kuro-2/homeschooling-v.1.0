import React from 'react';
import { Activity, Clock, User, FileText, Settings, Bell, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'user_login',
      title: 'User Login',
      description: 'John Doe logged into the system',
      time: '2 minutes ago',
      icon: User,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-400/20 to-blue-600/20',
      status: 'success'
    },
    {
      id: 2,
      type: 'document_created',
      title: 'Document Created',
      description: 'New project proposal document was created',
      time: '15 minutes ago',
      icon: FileText,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-400/20 to-green-600/20',
      status: 'success'
    },
    {
      id: 3,
      type: 'settings_updated',
      title: 'Settings Updated',
      description: 'System preferences were modified',
      time: '1 hour ago',
      icon: Settings,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-400/20 to-purple-600/20',
      status: 'info'
    },
    {
      id: 4,
      type: 'notification_sent',
      title: 'Notification Sent',
      description: 'Weekly report notification sent to all users',
      time: '2 hours ago',
      icon: Bell,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-400/20 to-orange-500/20',
      status: 'warning'
    },
    {
      id: 5,
      type: 'task_completed',
      title: 'Task Completed',
      description: 'Database backup task completed successfully',
      time: '3 hours ago',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-400/20 to-green-600/20',
      status: 'success'
    },
    {
      id: 6,
      type: 'error_occurred',
      title: 'Error Occurred',
      description: 'Failed to process payment for order #12345',
      time: '4 hours ago',
      icon: XCircle,
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-400/20 to-red-600/20',
      status: 'error'
    },
    {
      id: 7,
      type: 'system_alert',
      title: 'System Alert',
      description: 'High CPU usage detected on server-01',
      time: '5 hours ago',
      icon: AlertCircle,
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-400/20 to-red-500/20',
      status: 'warning'
    },
    {
      id: 8,
      type: 'user_registered',
      title: 'New User Registration',
      description: 'Sarah Johnson created a new account',
      time: '6 hours ago',
      icon: User,
      color: 'from-teal-400 to-teal-600',
      bgColor: 'from-teal-400/20 to-teal-600/20',
      status: 'success'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-blue-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return CheckCircle;
      case 'warning':
        return AlertCircle;
      case 'error':
        return XCircle;
      default:
        return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Recent Activity
                </h1>
                <p className="text-gray-400 mt-1">
                  Track all system activities and events
                </p>
              </div>
            </div>
          </div>

          {/* Activity Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="scroll-animate animation-delay-100 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">24</p>
                  <p className="text-gray-400 text-sm">Successful Actions</p>
                </div>
              </div>
            </div>
            <div className="scroll-animate animation-delay-200 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-gray-400 text-sm">Warnings</p>
                </div>
              </div>
            </div>
            <div className="scroll-animate animation-delay-300 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1</p>
                  <p className="text-gray-400 text-sm">Errors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="scroll-animate animation-delay-400 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Activity Timeline</h3>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Last 24 hours</span>
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                const StatusIcon = getStatusIcon(activity.status);
                
                return (
                  <div
                    key={activity.id}
                    className={`scroll-animate animation-delay-${500 + (index * 100)} flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 bg-gradient-to-br ${activity.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-medium">{activity.title}</h4>
                        <div className="flex items-center space-x-2">
                          <StatusIcon className={`w-4 h-4 ${getStatusColor(activity.status)}`} />
                          <span className="text-gray-400 text-sm whitespace-nowrap">{activity.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{activity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Load More Activities
              </button>
            </div>
          </div>

          {/* Activity Filters */}
          <div className="mt-8 scroll-animate animation-delay-1000">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Filter Activities</h3>
              <div className="flex flex-wrap gap-3">
                {['All', 'Success', 'Warning', 'Error', 'Info'].map((filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      filter === 'All'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;