import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, ArrowRight, BarChart3 } from 'lucide-react';

const AssessmentPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'company_size',
      question: 'What is your company size?',
      options: [
        { value: 'startup', label: 'Startup (1-10 employees)' },
        { value: 'small', label: 'Small (11-50 employees)' },
        { value: 'medium', label: 'Medium (51-250 employees)' },
        { value: 'large', label: 'Large (250+ employees)' }
      ]
    },
    {
      id: 'current_tools',
      question: 'How many marketing tools do you currently use?',
      options: [
        { value: '1-3', label: '1-3 tools' },
        { value: '4-8', label: '4-8 tools' },
        { value: '9-15', label: '9-15 tools' },
        { value: '16+', label: '16+ tools' }
      ]
    },
    {
      id: 'data_integration',
      question: 'How well integrated are your marketing tools?',
      options: [
        { value: 'not_integrated', label: 'Not integrated at all' },
        { value: 'partially', label: 'Partially integrated' },
        { value: 'mostly', label: 'Mostly integrated' },
        { value: 'fully', label: 'Fully integrated' }
      ]
    },
    {
      id: 'lead_tracking',
      question: 'Can you track leads from first touch to closed deal?',
      options: [
        { value: 'no_tracking', label: 'No tracking in place' },
        { value: 'basic', label: 'Basic tracking' },
        { value: 'good', label: 'Good tracking with some gaps' },
        { value: 'excellent', label: 'Excellent end-to-end tracking' }
      ]
    },
    {
      id: 'reporting',
      question: 'How do you currently measure marketing ROI?',
      options: [
        { value: 'no_measurement', label: 'No measurement in place' },
        { value: 'basic_metrics', label: 'Basic metrics (clicks, opens)' },
        { value: 'revenue_attribution', label: 'Revenue attribution tracking' },
        { value: 'advanced_analytics', label: 'Advanced analytics & modeling' }
      ]
    },
    {
      id: 'biggest_challenge',
      question: 'What is your biggest MarTech challenge?',
      options: [
        { value: 'data_silos', label: 'Data silos between tools' },
        { value: 'attribution', label: 'Attribution and tracking' },
        { value: 'automation', label: 'Automation and workflows' },
        { value: 'reporting', label: 'Reporting and analytics' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    const weights = {
      company_size: { startup: 1, small: 2, medium: 3, large: 4 },
      current_tools: { '1-3': 1, '4-8': 2, '9-15': 3, '16+': 4 },
      data_integration: { not_integrated: 1, partially: 2, mostly: 3, fully: 4 },
      lead_tracking: { no_tracking: 1, basic: 2, good: 3, excellent: 4 },
      reporting: { no_measurement: 1, basic_metrics: 2, revenue_attribution: 3, advanced_analytics: 4 },
      biggest_challenge: { data_silos: 1, attribution: 2, automation: 3, reporting: 4 }
    };

    Object.entries(answers).forEach(([key, value]) => {
      const weight = weights[key as keyof typeof weights];
      if (weight && weight[value as keyof typeof weight]) {
        score += weight[value as keyof typeof weight];
      }
    });

    return Math.round((score / 24) * 100);
  };

  const getRecommendations = () => {
    const score = calculateScore();
    
    if (score < 40) {
      return {
        level: 'Foundation',
        color: 'text-red-400',
        bgColor: 'bg-red-400/10',
        recommendations: [
          'Start with basic tool integration (HubSpot + Salesforce)',
          'Implement fundamental lead tracking',
          'Set up basic reporting dashboards',
          'Focus on data governance and cleanup'
        ],
        nextSteps: 'Begin with a comprehensive MarTech audit to identify quick wins and foundational improvements.'
      };
    } else if (score < 70) {
      return {
        level: 'Growth',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        recommendations: [
          'Implement advanced attribution modeling',
          'Automate lead scoring and routing',
          'Expand integration capabilities',
          'Develop custom reporting workflows'
        ],
        nextSteps: 'Focus on automation and advanced analytics to scale your marketing operations efficiently.'
      };
    } else {
      return {
        level: 'Optimization',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        recommendations: [
          'Implement predictive analytics',
          'Advanced personalization engines',
          'AI-powered optimization',
          'Enterprise-grade data architecture'
        ],
        nextSteps: 'Leverage advanced technologies and AI to maximize your marketing technology investment.'
      };
    }
  };

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations();

    return (
      <div className="min-h-screen bg-white py-20">
        <SEO
          title="Your MarTech Assessment Results | Optimization Recommendations"
          description="Your personalized MarTech stack assessment results with specific optimization recommendations and ROI projections. Get actionable insights for your marketing technology."
          keywords="martech assessment results, marketing technology audit, martech optimization recommendations, marketing stack analysis"
          canonicalUrl="/assessment"
          noIndex={true}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your MarTech Assessment Results
            </h1>
          </div>

          {/* Score Display */}
          <div className={`${recommendations.bgColor} rounded-lg p-8 mb-8 text-center`}>
            <div className="text-6xl font-bold text-gray-900 mb-4">{score}%</div>
            <div className={`text-xl font-semibold ${recommendations.color} mb-2`}>
              {recommendations.level} Level
            </div>
            <p className="text-gray-600">
              Your MarTech stack optimization score
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Actions</h2>
            <div className="space-y-4">
              {recommendations.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#9D2235' }} />
                  <span className="text-gray-600">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-600 mb-6">{recommendations.nextSteps}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="text-white px-8 py-3 rounded-lg font-medium transition-colors hover:opacity-90 flex items-center justify-center space-x-2"
                style={{ backgroundColor: '#9D2235' }}
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight size={20} />
              </Link>
              
              <button className="border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Download Detailed Report
              </button>
            </div>
          </div>

          {/* ROI Projection */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Projected ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#9D2235' }}>3-6 months</div>
                <div className="text-gray-600">Implementation Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#9D2235' }}>200-400%</div>
                <div className="text-gray-600">ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#9D2235' }}>35-60%</div>
                <div className="text-gray-600">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <SEO
        title="Free MarTech Stack Assessment | Discover Optimization Opportunities"
        description="Take our free MarTech assessment to discover optimization opportunities in your marketing technology stack. Get personalized recommendations and ROI projections."
        keywords="free martech assessment, marketing technology audit, martech stack evaluation, marketing automation assessment, hubspot assessment"
        canonicalUrl="/assessment"
        ogType="website"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MarTech Stack Assessment
          </h1>
          <p className="text-xl text-gray-600">
            Discover optimization opportunities in your marketing technology stack
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="text-gray-600">
              {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ backgroundColor: '#9D2235', width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {questions[currentStep].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-lg border border-gray-300 hover:border-red-500 hover:bg-red-50 transition-all duration-200 text-gray-600 hover:text-gray-900"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-3" style={{ color: '#9D2235' }} />
            <h3 className="font-semibold text-gray-900 mb-2">Free Analysis</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive assessment with no cost or obligation
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-3" style={{ color: '#9D2235' }} />
            <h3 className="font-semibold text-gray-900 mb-2">Actionable Insights</h3>
            <p className="text-gray-600 text-sm">
              Specific recommendations tailored to your business
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <AlertCircle className="h-8 w-8 mx-auto mb-3" style={{ color: '#9D2235' }} />
            <h3 className="font-semibold text-gray-900 mb-2">ROI Projections</h3>
            <p className="text-gray-600 text-sm">
              Estimated impact and timeline for improvements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;