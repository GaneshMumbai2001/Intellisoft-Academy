import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
      icon: "👨‍🏫"
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to courses",
      icon: "⏰"
    },
    {
      title: "Interactive Content",
      description: "Engage with hands-on projects and real-world applications",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Intellisoft Academy</h1>
            <p className="text-xl mb-8">Empower your future with cutting-edge tech education</p>
            <Link to="/courses">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of students already learning with us</p>
          <Link to="/register">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
