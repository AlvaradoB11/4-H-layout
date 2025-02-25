import React, { useState } from 'react';

const FourHDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">4-H Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">JD</div>
            <span className="hidden md:inline">John Doe</span>
            <button className="bg-green-800 hover:bg-green-900 px-3 py-1 rounded text-sm">Logout</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 mt-4 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <nav className="md:w-64 bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h2 className="text-lg font-bold text-green-700">4-H Menu</h2>
          </div>
          
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'dashboard' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('events')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'events' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
              >
                Events
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'projects' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('achievements')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'achievements' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
              >
                Achievements
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('resources')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'resources' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
              >
                Resources
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'settings' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
              >
                Settings
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome, John!</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg text-green-800">Projects</h3>
                  <p className="text-3xl font-bold text-green-700 mt-2">65%</p>
                  <p className="text-sm text-green-600 mt-1">2 projects in progress</p>
                  <div className="mt-4 bg-gray-100 h-2 rounded-full">
                    <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg text-blue-800">Community Service</h3>
                  <p className="text-3xl font-bold text-blue-700 mt-2">24 hrs</p>
                  <p className="text-sm text-blue-600 mt-1">Goal: 50 hours</p>
                  <div className="mt-4 bg-gray-100 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-lg text-purple-800">Achievement Points</h3>
                  <p className="text-3xl font-bold text-purple-700 mt-2">250</p>
                  <p className="text-sm text-purple-600 mt-1">Rank: Silver Member</p>
                  <div className="mt-4 bg-gray-100 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between">
                      <h4 className="font-bold">Annual 4-H County Fair</h4>
                      <span className="text-sm text-gray-500">Jul 15-17</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">County Fairgrounds</p>
                    <div className="mt-3">
                      <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200">Register</button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between">
                      <h4 className="font-bold">Leadership Workshop</h4>
                      <span className="text-sm text-gray-500">Aug 5</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Community Center</p>
                    <div className="mt-3">
                      <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" defaultValue="John Doe" className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" defaultValue="johndoe@example.com" className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" defaultValue="(555) 123-4567" className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">4-H Club</label>
                      <input type="text" defaultValue="Greenville County 4-H" className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">Update Profile</button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Account Security</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-medium">Password</h4>
                      <p className="text-sm text-gray-500 mt-1">Last changed: March 15, 2024</p>
                      <button className="mt-2 text-green-600 hover:text-green-700 text-sm font-medium">Change Password</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-500 mt-1">Status: Not Enabled</p>
                      <button className="mt-2 text-green-600 hover:text-green-700 text-sm font-medium">Enable 2FA</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-medium">Active Sessions</h4>
                      <p className="text-sm text-gray-500 mt-1">2 active devices</p>
                      <button className="mt-2 text-green-600 hover:text-green-700 text-sm font-medium">Manage Devices</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Registration</h2>
              <p>This is the Events tab content.</p>
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">My Projects</h2>
              <p>This is the Projects tab content.</p>
            </div>
          )}
          
          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievement Records</h2>
              <p>This is the Achievements tab content.</p>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">4-H Resources</h2>
              <p>This is the Resources tab content.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FourHDashboard;
