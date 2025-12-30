import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, ArrowRight, BarChart3, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const AssessmentPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'company_size',
      question: 'INPUT_PARAM: COMPANY_SCALE',
      options: [
        { value: 'startup', label: 'Startup (1-10 nodes)' },
        { value: 'small', label: 'Small (11-50 nodes)' },
        { value: 'medium', label: 'Medium (51-250 nodes)' },
        { value: 'large', label: 'Large (250+ nodes)' }
      ]
    },
    {
      id: 'current_tools',
      question: 'INPUT_PARAM: STACK_VOLUME',
      options: [
        { value: '1-3', label: '1-3 platforms' },
        { value: '4-8', label: '4-8 platforms' },
        { value: '9-15', label: '9-15 platforms' },
        { value: '16+', label: '16+ platforms' }
      ]
    },
    {
      id: 'data_integration',
      question: 'DIAGNOSTIC: INTEGRATION_LEVEL',
      options: [
        { value: 'not_integrated', label: 'CRITICAL: No Integration' },
        { value: 'partially', label: 'WARNING: Partial Sync' },
        { value: 'mostly', label: 'STANDARD: Mostly Integrated' },
        { value: 'fully', label: 'OPTIMAL: Fully Unified' }
      ]
    },
    {
      id: 'lead_tracking',
      question: 'DIAGNOSTIC: ATTRIBUTION_VISIBILITY',
      options: [
        { value: 'no_tracking', label: 'BLIND: No Tracking' },
        { value: 'basic', label: 'LOW: First-Touch Only' },
        { value: 'good', label: 'MED: Multi-Touch (Gaps)' },
        { value: 'excellent', label: 'HIGH: Full Lifecycle' }
      ]
    },
    {
      id: 'reporting',
      question: 'METRIC: ROI_MEASUREMENT',
      options: [
        { value: 'no_measurement', label: 'NONE: Gut Feel' },
        { value: 'basic_metrics', label: 'BASIC: Vanity Metrics' },
        { value: 'revenue_attribution', label: 'ADVANCED: Rev Attribution' },
        { value: 'advanced_analytics', label: 'EXPERT: Predictive Models' }
      ]
    },
    {
      id: 'biggest_challenge',
      question: 'PRIORITY: PRIMARY_BOTTLENECK',
      options: [
        { value: 'data_silos', label: 'ERR_SILOS: Data Fragmentation' },
        { value: 'attribution', label: 'ERR_BLIND: Attribution Gaps' },
        { value: 'automation', label: 'ERR_MANUAL: Lack of Auto' },
        { value: 'reporting', label: 'ERR_VIS: Poor Visibility' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    // Fire GTM data layer event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'assessment_interaction',
        assessment_step: currentStep + 1,
        assessment_question: questions[currentStep].question,
        assessment_answer: value,
        button_text: questions[currentStep].options.find(opt => opt.value === value)?.label || value
      });
    }

    setAnswers({ ...answers, [questions[currentStep].id]: value });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Fire completion event
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'assessment_completed',
          assessment_score: calculateScore(),
          total_steps: questions.length
        });
      }
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
        level: 'CRITICAL_INFRASTRUCTURE',
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        recommendations: [
          'INIT_PROTOCOL: Basic Tool Integration (HubSpot + Salesforce)',
          'DEPLOY: Fundamental Lead Tracking',
          'CONFIG: Basic Reporting Dashboards',
          'EXEC: Data Governance Cleanup'
        ],
        nextSteps: 'SYSTEM ALERT: Immediate audit required to identify foundational gaps.'
      };
    } else if (score < 70) {
      return {
        level: 'OPTIMIZATION_REQUIRED',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        recommendations: [
          'UPGRADE: Attribution Modeling v2',
          'AUTO: Lead Scoring & Routing',
          'EXPAND: Integration Capabilities',
          'DEV: Custom Reporting Workflows'
        ],
        nextSteps: 'WARNING: Scaling inefficiencies detected. Focus on automation.'
      };
    } else {
      return {
        level: 'SYSTEM_OPTIMAL',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        recommendations: [
          'DEPLOY: Predictive Analytics',
          'SCALE: Personalization Engines',
          'AI: Optimization Models',
          'ARCH: Enterprise Data Grid'
        ],
        nextSteps: 'STATUS: System stable. Ready for advanced scale measures.'
      };
    }
  };

  const getSyntheticAnalysis = (score: number) => {
    const size = answers['company_size'];
    const tools = answers['current_tools'];
    const integration = answers['data_integration'];

    if (size === 'large' && (integration === 'not_integrated' || integration === 'partially')) {
      return {
        title: 'ENTERPRISE_FRICTION DETECTED',
        body: 'You are operating at high scale with low infrastructure maturity. This creates a "Data Tax" on every dollar spent, where significant revenue is lost simply because systems cannot communicate. Priority should be on infrastructure unification.'
      };
    } else if (size === 'startup' && (tools === '16+' || tools === '9-15')) {
      return {
        title: 'EARLY_STAGE_BLOAT DETECTED',
        body: 'Your stack complexity is outpacing your current operational needs. This often leads to "SaaS Creep" where tools are under-utilized but continue to drain budget. Consolidation and focused integration will drive higher ROI than adding new features.'
      };
    } else if (score > 80) {
      return {
        title: 'SYSTEM_MATURITY OPTIMAL',
        body: 'Your infrastructure is technically sound. Your primary bottleneck is no longer "fixing" but "optimizing." Focus on edge-case automation and advanced predictive modeling to squeeze the remaining 5-10% of efficiency from the stack.'
      };
    } else {
      return {
        title: 'FOUNDATIONAL_GAPS DETECTED',
        body: 'Your current configuration lacks the necessary plumbing to accurately track the customer journey. Until these foundational integration and tracking issues are resolved, scaling spend will only exacerbate existing inefficiencies.'
      };
    }
  };

  const detailedAdvice: Record<string, string> = {
    'INIT_PROTOCOL: Basic Tool Integration (HubSpot + Salesforce)': 
      'Your core revenue systems are currently operating in silos. This lack of synchronization leads to data decay and manual reconciliation errors. We recommend deploying a bi-directional sync with strict field-level mapping to ensure Sales and Marketing share a single source of truth.',
    'DEPLOY: Fundamental Lead Tracking':
      'Without a standardized UTM and lifecycle tracking protocol, your marketing spend is effectively unmeasurable. You must implement a centralized tracking script and hidden form fields to capture source, medium, and campaign data at every conversion point.',
    'CONFIG: Basic Reporting Dashboards':
      'Standardizing your metrics into a single dashboard will eliminate "gut-feel" decision making. We recommend building a high-level revenue cockpit that tracks MQL-to-Opp velocity and CAC-per-channel in real-time.',
    'EXEC: Data Governance Cleanup':
      'Duplicate records and inconsistent data formats are polluting your automation logic. A structural cleanup is required to normalize job titles, industry categories, and email statuses before scaling your outbound efforts.',
    'UPGRADE: Attribution Modeling v2':
      'First-touch attribution is hiding your most valuable touchpoints. We recommend transitioning to a W-Shaped or Algorithmic model that distributes credit to mid-funnel content and sales-enablement activities that actually close deals.',
    'AUTO: Lead Scoring & Routing':
      'Your SDRs are currently manually filtering leads, which increases response latency. By implementing a predictive scoring model and automated routing logic, we can ensure high-intent leads are contacted within seconds of conversion.',
    'EXPAND: Integration Capabilities':
      'Your current stack has reached its architectural limit. We recommend introducing custom API middleware or a CDP layer to handle complex data transfers between your product analytics and your CRM.',
    'DEV: Custom Reporting Workflows':
      'Standard SaaS reports no longer suffice for your scale. We recommend deploying custom SQL-based reporting in a data warehouse like Snowflake to perform deep-dive cohort analysis and LTV forecasting.',
    'DEPLOY: Predictive Analytics':
      'Leverage your historical data to forecast future revenue performance. By deploying machine learning models, we can identify which lead profiles have the highest probability of closing based on thousands of historical data points.',
    'SCALE: Personalization Engines':
      'Move beyond "First Name" tags. We recommend implementing dynamic content blocks that adapt your website and email messaging based on the user\'s real-time behavioral data and firmographic profile.',
    'AI: Optimization Models':
      'Automate your A/B testing and budget allocation. We recommend deploying AI agents to monitor campaign performance and shift spend toward the highest-performing assets with sub-second latency.',
    'ARCH: Enterprise Data Grid':
      'Your infrastructure requires a globally distributed data layer. We recommend architecting a headless MarTech stack where your customer data is decoupled from specific tool vendors, giving you ultimate flexibility and reliability.'
  };

  const handleDownloadLogs = () => {
    const score = calculateScore();
    const recommendations = getRecommendations();
    const analysis = getSyntheticAnalysis(score);
    const timestamp = new Date().toISOString();
    
    let content = `LATTARA_SYSTEM_AUDIT_PLAYBOOK
===============================
AUDIT_ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()}
TIMESTAMP: ${timestamp}
OPTIMIZATION_SCORE: ${score}/100
MATURITY_LEVEL: ${recommendations.level}

SYNTHETIC_ANALYSIS SUMMARY:
---------------------------
${analysis.title}
${analysis.body}

DIAGNOSTIC_DETAILS:
-------------------
`;

    questions.forEach((q) => {
      const answerValue = answers[q.id];
      const answerLabel = q.options.find(opt => opt.value === answerValue)?.label || answerValue;
      content += `[${q.id.toUpperCase()}]
INPUT: ${answerLabel}
`;
      
      if (q.id === 'data_integration' && answerValue === 'not_integrated') {
        content += `OBSERVATION: CRITICAL_SILO. Data is not flowing between core systems.
IMPACT: High risk of lead leakage and duplicate outreach. CRM data is likely 30%+ inaccurate.
`;
      }
      if (q.id === 'lead_tracking' && answerValue === 'no_tracking') {
        content += `OBSERVATION: ATTRIBUTION_BLINDNESS. No UTM or conversion path capture.
IMPACT: All marketing spend is essentially unvalidated. Budget allocation is based on conjecture rather than throughput.
`;
      }
      content += '\n';
    });

    content += `DEPLOYMENT_ROADMAP & RECOMMENDATIONS:
-------------------------------------
${recommendations.recommendations.map((rec, i) => {
  const detail = detailedAdvice[rec] || 'Further technical audit required to define specific patch parameters.';
  return `${i + 1}. ${rec}\n   ${detail}\n`;
}).join('\n')}

CONTACT_ENGINEER for implementation specs: https://meetings.hubspot.com/lattara/meet-with-riley

END_OF_LOG
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Lattara_Playbook_${new Date().getTime()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const [expandedPatch, setExpandedPatch] = useState<number | null>(null);

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations();
    const analysis = getSyntheticAnalysis(score);

    return (
      <div className="relative min-h-screen bg-white py-20 font-mono overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.3]" />
        
        <SEO
          title="System Audit Results | Lattara"
          description="Your personalized MarTech stack assessment results."
          canonicalUrl="/assessment"
          noIndex={true}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="border border-gray-200 bg-white p-8 mb-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-brand-dark"></div>
               
              <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
                 <div>
                    <h1 className="text-2xl font-bold text-brand-dark uppercase tracking-tight">
                      System_Audit_Report
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-gray-400">TIMESTAMP</div>
                    <div className="text-sm text-brand-dark">{new Date().toISOString().split('T')[0]}</div>
                 </div>
              </div>

              {/* Synthetic Analysis Summary */}
              <Reveal delay={0.1}>
                <div className="mb-12 bg-gray-900 text-white p-8 border-l-4 border-brand-red">
                   <div className="flex items-center space-x-2 text-brand-red text-xs font-bold mb-4">
                      <Activity size={14} />
                      <span>SYNTHETIC_ANALYSIS_OUTPUT</span>
                   </div>
                   <h2 className="text-xl font-bold mb-4 tracking-tight">{analysis.title}</h2>
                   <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {analysis.body}
                   </p>
                </div>
              </Reveal>

              {/* Score Display */}
              <Reveal delay={0.2}>
                <div className={`p-8 mb-8 border ${recommendations.borderColor} ${recommendations.bgColor} relative`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                     <div>
                        <div className="text-xs text-gray-500 mb-1">OPTIMIZATION_INDEX</div>
                        <div className="text-6xl font-bold text-brand-dark mb-2">{score}<span className="text-2xl text-gray-400">/100</span></div>
                        <div className={`text-sm font-bold ${recommendations.color} border px-2 py-1 inline-block bg-white/50 border-current`}>
                           {recommendations.level}
                        </div>
                     </div>
                     <div className="space-y-2 text-xs text-gray-600">
                        <div className="flex justify-between border-b border-gray-200/50 pb-1">
                           <span>INFRASTRUCTURE_HEALTH</span>
                           <span className="font-bold">{score > 50 ? 'STABLE' : 'UNSTABLE'}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200/50 pb-1">
                           <span>DATA_INTEGRITY</span>
                           <span className="font-bold">{score > 70 ? 'HIGH' : 'RISK'}</span>
                        </div>
                     </div>
                  </div>
                </div>
              </Reveal>

              {/* Recommendations */}
              <div className="mb-8">
                <Reveal delay={0.4}>
                  <h2 className="text-sm font-bold text-gray-900 uppercase mb-4 flex items-center">
                     <Terminal size={16} className="mr-2 text-brand-red" />
                     Required_Patches
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 gap-px bg-gray-200 border border-gray-200">
                  {recommendations.recommendations.map((rec, index) => (
                    <div key={index} className="bg-white">
                      <button 
                        onClick={() => setExpandedPatch(expandedPatch === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left group"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-brand-red font-bold text-xs">{`0${index + 1}`}</span>
                          <span className="text-gray-700 text-sm font-bold group-hover:text-brand-dark transition-colors">{rec}</span>
                        </div>
                        <div className={`transform transition-transform duration-200 ${expandedPatch === index ? 'rotate-180' : ''}`}>
                           <ArrowRight size={14} className="text-gray-400 rotate-90" />
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedPatch === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-gray-500 text-xs leading-relaxed border-t border-gray-50 bg-gray-50/30">
                               {detailedAdvice[rec] || 'Further technical audit required to define specific patch parameters.'}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <Reveal delay={0.8}>
                <div className="bg-brand-dark text-white p-8">
                  <h2 className="text-sm font-bold text-white uppercase mb-4 flex items-center">
                     <Cpu size={16} className="mr-2 text-brand-red" />
                     System_Instruction
                  </h2>
                  <p className="text-gray-400 mb-8 text-sm font-light border-l-2 border-brand-red pl-4">
                     {recommendations.nextSteps}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://meetings.hubspot.com/lattara/meet-with-riley"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-red text-white px-6 py-3 text-sm font-mono hover:bg-red-700 transition-colors text-center"
                    >
                      SCHEDULE_DIAGNOSTIC
                    </a>
                    
                    <button 
                      onClick={handleDownloadLogs}
                      className="border border-gray-600 text-gray-300 hover:border-white hover:text-white px-6 py-3 text-sm font-mono transition-colors"
                    >
                      DOWNLOAD_PLAYBOOK
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white py-20 font-mono overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.3]" />
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-[2px] bg-brand-red/10 shadow-[0_0_20px_rgba(157,34,53,0.2)] animate-scan" />
      </div>

      <SEO
        title="System Diagnostics | Lattara"
        description="Initialize system audit."
        canonicalUrl="/assessment"
        ogType="website"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 border-b border-gray-200 pb-8 bg-white/80 backdrop-blur-sm p-6 border border-gray-100 shadow-sm">
          <div className="inline-block bg-brand-red/10 text-brand-red text-xs px-2 py-1 mb-4">
             SYS_ADMIN_TOOL
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">
            Infrastructure Audit
          </h1>
          <p className="text-gray-500">
            Initialize diagnostic sequence to identify stack inefficiencies.
          </p>
        </div>

        {/* Progress Bar - Segmented */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2 text-xs text-gray-400">
            <span>SEQUENCE_PROGRESS</span>
            <span>
              {currentStep + 1}/{questions.length}
            </span>
          </div>
          <div className="flex gap-1">
             {questions.map((_, idx) => (
                <motion.div 
                  key={idx}
                  initial={false}
                  animate={{ 
                    backgroundColor: idx <= currentStep ? '#9D2235' : '#F1F5F9',
                    scaleY: idx === currentStep ? 1.5 : 1
                  }}
                  className="h-1 flex-1 transition-all duration-300"
                />
             ))}
          </div>
        </div>

        {/* Question Interface */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="border border-gray-200 p-8 bg-white/90 backdrop-blur shadow-xl"
          >
            <h2 className="text-xl font-bold text-brand-dark mb-8 flex items-center">
              <span className="text-brand-red mr-2">&gt;</span>
              {questions[currentStep].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 border border-gray-200 hover:border-brand-red hover:bg-gray-50 transition-all duration-200 text-gray-600 hover:text-brand-dark group flex items-center justify-between"
                >
                  <span className="text-sm">{option.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-brand-red text-xs transition-opacity">[SELECT]</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Metrics */}
        <div className="mt-12 grid grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          <Reveal delay={0.4}>
            <div className="bg-white p-4 text-center">
              <div className="text-brand-red font-bold text-lg mb-1">0.00</div>
              <div className="text-xs text-gray-400">COST_BASIS</div>
            </div>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="bg-white p-4 text-center">
              <div className="text-brand-dark font-bold text-lg mb-1">LOGIC</div>
              <div className="text-xs text-gray-400">ENGINE</div>
            </div>
          </Reveal>
          
          <Reveal delay={0.6}>
            <div className="bg-white p-4 text-center">
               <div className="text-brand-dark font-bold text-lg mb-1">SECURE</div>
               <div className="text-xs text-gray-400">CONNECTION</div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;