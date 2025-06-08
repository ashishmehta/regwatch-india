import React, { useState, useEffect } from 'react';
import { Bell, Search, Calendar, ExternalLink, AlertTriangle, Info, CheckCircle, TrendingUp, FileText, Users, Building2 } from 'lucide-react';

const App = () => {
  const [selectedRegulator, setSelectedRegulator] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState([]);

  const regulators = [
    { id: 'rbi', name: 'RBI', fullName: 'Reserve Bank of India', country: 'India' },
    { id: 'sebi', name: 'SEBI', fullName: 'Securities and Exchange Board of India', country: 'India' },
    { id: 'irdai', name: 'IRDAI', fullName: 'Insurance Regulatory and Development Authority of India', country: 'India' },
    { id: 'pfrda', name: 'PFRDA', fullName: 'Pension Fund Regulatory and Development Authority', country: 'India' },
    { id: 'ibbi', name: 'IBBI', fullName: 'Insolvency and Bankruptcy Board of India', country: 'India' },
    { id: 'gst', name: 'GST Council', fullName: 'GST Council & CBIC', country: 'India' },
    { id: 'nabard', name: 'NABARD', fullName: 'National Bank for Agriculture and Rural Development', country: 'India' }
  ];

  const categories = [
    { id: 'enforcement', name: 'Enforcement Actions', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'guidance', name: 'Guidance & Rules', icon: FileText, color: 'text-blue-600' },
    { id: 'market', name: 'Market Updates', icon: TrendingUp, color: 'text-green-600' },
    { id: 'compliance', name: 'Compliance', icon: CheckCircle, color: 'text-purple-600' },
    { id: 'tax', name: 'Tax & GST Updates', icon: Users, color: 'text-orange-600' },
    { id: 'rural', name: 'Rural & Agriculture', icon: Building2, color: 'text-emerald-600' }
  ];

  const mockUpdates = [
    {
      id: 1,
      regulator: 'sebi',
      category: 'enforcement',
      title: 'SEBI Imposes ₹25 Crore Penalty on Mutual Fund for Front Running',
      summary: 'SEBI penalized a large mutual fund house for front running activities by its dealers, affecting NAV calculations for multiple schemes over 2 years.',
      impact: 'high',
      date: '2025-06-07',
      url: '#',
      keyPoints: [
        'Front running detected across 15 equity schemes worth ₹12,000 crores',
        'Dealers made illegal profits of ₹8.5 crores through advance trading',
        'Fund house must strengthen surveillance systems within 90 days'
      ]
    },
    {
      id: 2,
      regulator: 'rbi',
      category: 'market',
      title: 'RBI Revises Priority Sector Lending Guidelines',
      summary: 'Updated PSL norms with increased allocation for renewable energy and MSMEs, effective from October 2025.',
      impact: 'medium',
      date: '2025-06-06',
      url: '#',
      keyPoints: [
        'Renewable energy sub-target increased from 3% to 5% of ANBC',
        'MSME definition revised to include services sector units up to ₹50 crores',
        'Digital lending platforms now eligible for PSL classification'
      ]
    },
    {
      id: 3,
      regulator: 'irdai',
      category: 'guidance',
      title: 'IRDAI Issues New Motor Insurance Guidelines',
      summary: 'Comprehensive framework for motor insurance pricing, claim settlement, and digital processes to improve customer experience.',
      impact: 'high',
      date: '2025-06-05',
      url: '#',
      keyPoints: [
        'Mandatory cashless settlement for claims up to ₹50,000',
        'Real-time premium calculation based on telematics data allowed',
        'Digital policy issuance mandatory for all motor policies by March 2026'
      ]
    },
    {
      id: 4,
      regulator: 'pfrda',
      category: 'compliance',
      title: 'PFRDA Updates NPS Investment Guidelines',
      summary: 'Revised asset allocation norms for National Pension System with higher equity exposure limits and new alternative investment options.',
      impact: 'medium',
      date: '2025-06-04',
      url: '#',
      keyPoints: [
        'Maximum equity allocation increased to 75% for subscribers below 35 years',
        'REITs and InvITs now permitted up to 5% of scheme assets',
        'ESG-focused funds introduced as new investment option'
      ]
    },
    {
      id: 5,
      regulator: 'ibbi',
      category: 'guidance',
      title: 'IBBI Streamlines Pre-packaged Insolvency Process',
      summary: 'New regulations to expedite pre-packaged insolvency resolution for MSMEs with simplified documentation and faster timelines.',
      impact: 'medium',
      date: '2025-06-03',
      url: '#',
      keyPoints: [
        'Resolution timeline reduced to 120 days for MSME cases',
        'Base resolution value threshold lowered to ₹10 lakhs',
        'Digital platform launched for online application submission'
      ]
    },
    {
      id: 6,
      regulator: 'sebi',
      category: 'market',
      title: 'SEBI Introduces T+0 Settlement for Top 500 Stocks',
      summary: 'Instant settlement mechanism rolled out for top 500 stocks by market capitalization to enhance market efficiency.',
      impact: 'high',
      date: '2025-06-02',
      url: '#',
      keyPoints: [
        'T+0 settlement available for stocks with daily turnover above ₹500 crores',
        'Margin requirements reduced by 25% for T+0 trades',
        'Phased implementation starting with top 100 stocks from July 2025'
      ]
    },
    {
      id: 7,
      regulator: 'gst',
      category: 'tax',
      title: 'GST Council Reduces Tax Rates on Electric Vehicles',
      summary: 'GST Council slashes tax rates on electric vehicles from 12% to 5% and reduces rates on EV charging infrastructure to boost adoption.',
      impact: 'high',
      date: '2025-06-07',
      url: '#',
      keyPoints: [
        'GST on electric vehicles reduced from 12% to 5% effective immediately',
        'EV charging stations and infrastructure now taxed at 12% instead of 18%',
        'Battery swapping services for EVs exempted from GST for 2 years'
      ]
    },
    {
      id: 8,
      regulator: 'gst',
      category: 'compliance',
      title: 'CBIC Extends GST Return Filing Deadline',
      summary: 'Due to technical issues on GST portal, CBIC extends GSTR-3B filing deadline for May 2025 to June 25, 2025 without late fees.',
      impact: 'medium',
      date: '2025-06-06',
      url: '#',
      keyPoints: [
        'GSTR-3B filing deadline extended to June 25, 2025 for May 2025 returns',
        'No late fees applicable for returns filed by extended deadline',
        'Technical maintenance on GST portal scheduled for June 15-16, 2025'
      ]
    },
    {
      id: 9,
      regulator: 'gst',
      category: 'guidance',
      title: 'New GST Rules for E-commerce Operators',
      summary: 'CBIC issues clarification on GST obligations for e-commerce platforms, including TCS provisions and marketplace facilitator responsibilities.',
      impact: 'high',
      date: '2025-06-05',
      url: '#',
      keyPoints: [
        'TCS rate reduced from 1% to 0.75% for e-commerce transactions',
        'Marketplace facilitators must file monthly GSTR-8 by 10th of following month',
        'Digital services by foreign entities now require GST registration above ₹20 lakhs'
      ]
    },
    {
      id: 10,
      regulator: 'nabard',
      category: 'rural',
      title: 'NABARD Launches ₹50,000 Crore Climate Fund for Farmers',
      summary: 'NABARD establishes dedicated climate resilience fund to support sustainable agriculture practices and climate-smart farming technologies.',
      impact: 'high',
      date: '2025-06-07',
      url: '#',
      keyPoints: [
        'Fund targets 2 million farmers across drought-prone and flood-affected areas',
        'Interest subsidy of 3% available for climate-smart agriculture loans',
        'Focus on solar irrigation, organic farming, and water conservation projects'
      ]
    },
    {
      id: 11,
      regulator: 'nabard',
      category: 'guidance',
      title: 'NABARD Updates Microfinance Institution Guidelines',
      summary: 'Revised regulatory framework for MFIs with enhanced focus on borrower protection and digital lending practices in rural areas.',
      impact: 'medium',
      date: '2025-06-06',
      url: '#',
      keyPoints: [
        'Loan amount cap increased to ₹2 lakhs per borrower for rural MFIs',
        'Digital KYC acceptance mandatory for loans below ₹50,000',
        'Interest rate ceiling revised to 24% APR for microfinance loans'
      ]
    },
    {
      id: 12,
      regulator: 'nabard',
      category: 'market',
      title: 'NABARD Introduces Blockchain for Agriculture Supply Chain',
      summary: 'Pilot program launched for blockchain-based tracking of agricultural produce from farm to market, ensuring transparency and fair pricing.',
      impact: 'medium',
      date: '2025-06-04',
      url: '#',
      keyPoints: [
        'Pilot covers 10,000 farmers across 5 states initially',
        'Direct market linkage reduces intermediary costs by 15-20%',
        'Integration with existing FPO (Farmer Producer Organization) networks'
      ]
    }
  ];

  const filteredUpdates = mockUpdates.filter(update => {
    const matchesRegulator = selectedRegulator === 'all' || update.regulator === selectedRegulator;
    const matchesCategory = selectedCategory === 'all' || update.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesRegulator && matchesCategory && matchesSearch;
  });

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return Info;
    return category.icon;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : 'text-gray-600';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newNotification = {
          id: Date.now(),
          message: Math.random() > 0.5 ? 'New RBI circular on digital lending published' : 'SEBI issues fresh mutual fund guidelines',
          time: new Date().toLocaleTimeString()
        };
        setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RegWatch India</h1>
                <p className="text-sm text-gray-600">Indian Financial Regulatory Intelligence</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search updates..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Regulator</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedRegulator}
                  onChange={(e) => setSelectedRegulator(e.target.value)}
                >
                  <option value="all">All Regulators</option>
                  {regulators.map(reg => (
                    <option key={reg.id} value={reg.id}>{reg.name} ({reg.country})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Updates</span>
                    <span className="font-medium">{mockUpdates.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">High Impact</span>
                    <span className="font-medium text-red-600">
                      {mockUpdates.filter(u => u.impact === 'high').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {notifications.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Live Notifications
                </h3>
                <div className="space-y-2">
                  {notifications.slice(0, 3).map(notif => (
                    <div key={notif.id} className="text-xs bg-blue-50 p-2 rounded border-l-2 border-blue-400">
                      <p className="text-blue-800">{notif.message}</p>
                      <p className="text-blue-600 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Regulatory Updates ({filteredUpdates.length})
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Last 7 days</span>
                  </div>
                </div>
              </div>

              {filteredUpdates.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No updates found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                </div>
              ) : (
                filteredUpdates.map(update => {
                  const IconComponent = getCategoryIcon(update.category);
                  const regulator = regulators.find(r => r.id === update.regulator);
                  
                  return (
                    <div key={update.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-gray-50">
                              <IconComponent className={`h-5 w-5 ${getCategoryColor(update.category)}`} />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium text-gray-900">{regulator?.name}</span>
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                  {categories.find(c => c.id === update.category)?.name}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full border ${getImpactColor(update.impact)}`}>
                                  {update.impact} impact
                                </span>
                              </div>
                              <div className="text-xs text-gray-500">
                                {new Date(update.date).toLocaleDateString()} • {regulator?.country}
                              </div>
                            </div>
                          </div>
                          
                          <ExternalLink className="h-4 w-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{update.title}</h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">{update.summary}</p>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Points:</h4>
                            <ul className="space-y-1">
                              {update.keyPoints.map((point, index) => (
                                <li key={index} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-blue-600 mr-2 mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <button className="hover:text-blue-600 transition-colors">Save for later</button>
                            <button className="hover:text-blue-600 transition-colors">Share</button>
                            <button className="hover:text-blue-600 transition-colors">Get alerts</button>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                            Read Full Update
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
