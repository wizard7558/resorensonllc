import React from 'react';

const TechnologyShowcase = () => {
  const platformCategories = [
    {
      category: 'CRM & Marketing Automation',
      platforms: [
        { 
          name: 'HubSpot', 
          logo: '/hubspot.svg'
        },
        { 
          name: 'Salesforce', 
          logo: '/salesforce_backup.png'
        },
        { 
          name: 'Zoho', 
          logo: '/zoho_backup.webp'
        }
      ]
    },
    {
      category: 'Web & App Analytics',
      platforms: [
        { 
          name: 'Google Analytics 4', 
          logo: '/google_analytics_4.svg'
        },
        { 
          name: 'Mixpanel', 
          logo: '/mixpanel_backup.png'
        },
        { 
          name: 'Amplitude', 
          logo: '/amplitude.png'
        }
      ]
    },
    {
      category: 'Customer Data Platform',
      platforms: [
        { 
          name: 'Segment', 
          logo: '/segment_backup.svg'
        },
        { 
          name: 'Tealium', 
          logo: '/tealium.png'
        },
        { 
          name: 'Customer.io', 
          logo: '/customer_io.png'
        }
      ]
    },
    {
      category: 'Data Warehouse',
      platforms: [
        { 
          name: 'Snowflake', 
          logo: '/snowflake.png'
        },
        { 
          name: 'BigQuery', 
          logo: '/google_bigquery_logo.webp'
        },
        { 
          name: 'Redshift', 
          logo: '/redshift.png'
        }
      ]
    },
    {
      category: 'Business Intelligence',
      platforms: [
        { 
          name: 'Tableau', 
          logo: '/tableau.png'
        },
        { 
          name: 'Looker', 
          logo: '/looker_backup.png'
        },
        { 
          name: 'Hex', 
          logo: '/hex.png'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certified Expertise Across Leading Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep technical knowledge and certified expertise in the MarTech tools 
            that power modern revenue operations.
          </p>
        </div>

        <div className="space-y-12">
          {platformCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-center" style={{ color: '#9D2235' }}>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6">
                {category.platforms.map((platform, platformIndex) => (
                  <div 
                    key={platformIndex}
                    className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-md transition-all duration-300 group text-center w-[220px]"
                  >
                    <div className="h-24 w-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-lg p-3">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="max-h-18 max-w-18 object-contain"
                        onError={(e) => {
                          // Fallback to text-based logo if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="h-18 w-18 bg-gradient-to-r from-red-400 to-gray-400 rounded-lg flex items-center justify-center mx-auto">
                                <span class="text-white font-bold text-xs text-center leading-tight">
                                  ${platform.name.split(' ').map(word => word[0]).join('')}
                                </span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-1 text-base">{platform.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
