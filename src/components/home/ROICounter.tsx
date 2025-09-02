import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const ROICounter = () => {
  const [stats, setStats] = useState({
    roasImprovement: 0,
    projectTime: 0,
    clientsServed: 0,
    revenueImpact: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        roasImprovement: Math.min(prev.roasImprovement + 0.1, 2.6),
        projectTime: Math.min(prev.projectTime + 1, 60),
        clientsServed: Math.min(prev.clientsServed + 1, 50),
        revenueImpact: Math.min(prev.revenueImpact + 1000000, 100000000)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      icon: TrendingUp,
      value: `${stats.roasImprovement.toFixed(1)}x`,
      label: 'Average ROAS Improvement',
      description: 'Return on ad spend optimization'
    },
    {
      icon: Clock,
      value: `${stats.projectTime} days`,
      label: 'Average Implementation Time',
      description: 'From strategy to go-live'
    },
    {
      icon: Users,
      value: `${stats.clientsServed}+`,
      label: 'Companies Transformed',
      description: 'From startups to Fortune 500'
    },
    {
      icon: DollarSign,
      value: `$${(stats.revenueImpact / 1000000).toFixed(0)}M+`,
      label: 'Revenue Impact Generated',
      description: 'Measurable business outcomes'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every engagement is measured by business impact, not just technical deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div 
              key={index}
              className="text-center bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              className="text-center bg-white p-8 rounded-lg border border-gray-200 hover:border-red-500 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="h-12 w-12" style={{ color: '#9D2235' }} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{item.label}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              "We don't just implement technology—we transform business outcomes."
            </h3>
            <p className="text-gray-600 text-lg">
              Every project includes baseline measurement, implementation tracking, and 
              post-launch optimization to ensure sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICounter;