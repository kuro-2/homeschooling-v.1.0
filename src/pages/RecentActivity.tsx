import React from 'react';

interface RecentActivityProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Recent Activity</h1>
        <p>View your recent activities here.</p>
      </div>
    </div>
  );
};

export default RecentActivity;