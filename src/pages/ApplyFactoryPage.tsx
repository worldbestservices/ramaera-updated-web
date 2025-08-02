import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Factory,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Briefcase,
  Heart,
  Lightbulb,
  Users,
  Target,
  Wrench,
  TrendingUp
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import EnhLogo from '../components/EnhLogo';
import { useFactoryApplicationStore } from '../store/factoryApplicationStore';
import toast from 'react-hot-toast';



const ApplyFactoryPage: React.FC = () => {
  const location = useLocation();

  const {
    form,
    setFormField,
    resetForm,
    submit,
    loading,
    success,
    error,
    resetState,
    message

  } = useFactoryApplicationStore();
  console.log(message)

  useEffect(() => {
    // Scroll to form section if hash exists
    if (location.hash === '#factory-form') {
      const formSection = document.getElementById('factory-form');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }

    // Cleanup on unmount
    return () => {
      resetState();
      resetForm();
    };
  }, [location, resetForm, resetState]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormField(name, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormField('file', file);
  };

  const toastIdRef = React.useRef<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };
  
  useEffect(() => {
    if (success) {
      console.log("submitted====",message);
      resetForm();
      resetState();
    }
  
    if (error) {
      toast.error(error || 'Submission failed', {
        id: toastIdRef.current || undefined,
      });
      resetState();
    }
  }, [success, error, resetForm, resetState]);
  

  
  

  const businessTypes = [
    'Agriculture & Food Processing',
    'FMCG & Personal Care',
    'Retail & Supermarket',
    'Electronics & Appliances',
    'Apparel & Textiles',
    'Healthcare & Pharma',
    'Education & Training',
    'Infrastructure & Mining',
    'Paper & Packaging',
    'Logistics & Transport',
    'Automobile',
    'Other'
  ];

  const dreamersExamples = [
    {
      icon: Wrench,
      title: 'The Mechanic with Auto-Parts Idea',
      description: 'Years of experience fixing vehicles, now ready to manufacture quality spare parts for the local market'
    },
    {
      icon: Heart,
      title: 'The Homemaker with Spice Blend Formula',
      description: 'Traditional family recipes and deep knowledge of spices, ready to scale into commercial production'
    },
    {
      icon: FileText,
      title: 'The Pharmacist Making Affordable Medicine',
      description: 'Healthcare professional wanting to manufacture generic medicines for rural communities'
    },
    {
      icon: Briefcase,
      title: 'The Teacher Launching Skill School',
      description: 'Educator with vision to create vocational training centers for unemployed youth'
    }
  ];

  return (
    <div className="animate-fade-in bg-black">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Factory Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary-800/80 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center mb-8">
              <EnhLogo size="lg" variant="floating" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">OPPORTUNITY PAGE</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              For Skilled People Without Funds - Ramaera Opens the Door
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ramaera Opens the Door */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">RAMERA OPENS THE DOOR</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Many people have <strong className="text-primary-400">ideas, knowledge, and skills</strong>… but no funds. 
                At Ramaera, if you:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <CheckCircle className="h-10 w-10 text-primary-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Know how to run a factory…</h3>
                  <p className="text-gray-400">Have the technical expertise and operational knowledge</p>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <Lightbulb className="h-10 w-10 text-yellow-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Have a powerful product idea…</h3>
                  <p className="text-gray-400">Innovative solutions that can serve real market needs</p>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <AlertCircle className="h-10 w-10 text-red-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Can't raise ₹1 Cr on your own…</h3>
                  <p className="text-gray-400">Traditional funding sources are out of reach</p>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <Target className="h-10 w-10 text-green-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">👉 We give you the chance.</h3>
                  <p className="text-gray-400">Community-backed opportunity to realize your vision</p>
                </div>
              </div>
              
              <div className="cyber-card p-12 bg-gradient-to-r from-primary-600/10 to-accent-500/10 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">HOW WE SUPPORT YOU</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">We fund your project through the community</p>
                  </div>
                  <div className="text-center">
                    <Factory className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">You run it with our support</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">Profits are shared fairly</p>
                  </div>
                </div>
                <p className="text-center text-primary-300 mt-8 text-xl">
                  You grow — and the country grows with you.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Examples of Dreamers */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">EXAMPLES OF DREAMERS WE HELP</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real people with real skills, now building real factories
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dreamersExamples.map((dreamer, index) => {
              const Icon = dreamer.icon
              return (
                <div 
                  key={index} 
                  className="cyber-card p-8 hover:border-primary-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary-600/20 rounded-xl neon-border">
                        <Icon className="h-10 w-10 text-primary-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">{dreamer.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{dreamer.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-black" id="factory-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {success && (
            <AnimatedSection>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="text-green-800 font-semibold">Application Submitted Successfully!</h3>
                    <p className="text-green-700">Our community will review your proposal and get back to you within 7-10 business days.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {error && (
            <AnimatedSection>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection>
            <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-300 mb-8 text-center">
                Factory Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary-300" />
                    Personal Information
                  </h3>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border bg-black border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Business Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <Factory className="h-5 w-5 mr-2 text-primary-300" />
                    Business Details
                  </h3>

                  <select
                    name="business_idea"
                    value={form.business_idea}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-300 rounded-lg"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>

                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-4 px-4 py-3 bg-black border border-gray-300 rounded-lg"
                    placeholder="City, State (e.g., Hajipur, Bihar)"
                  />

                  <select
                    name="required_amount"
                    value={form.required_amount}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-4 px-4 py-3 bg-black border border-gray-300 rounded-lg"
                  >
                    <option value="">Select funding range</option>
                    <option value="₹25 Lacs - ₹50 Lacs">₹25 Lacs - ₹50 Lacs</option>
                    <option value="₹50 Lacs - ₹1 Crore">₹50 Lacs - ₹1 Crore</option>
                    <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
                    <option value="₹2 Crore - ₹5 Crore">₹2 Crore - ₹5 Crore</option>
                    <option value="Above ₹5 Crore">Above ₹5 Crore</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary-300" />
                    Experience & Background
                  </h3>
                  <textarea
                    name="past_experience"
                    value={form.past_experience}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-300 rounded-lg"
                    placeholder="Describe your experience or motivation"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary-300" />
                    Supporting Documents
                  </h3>
                  <input
                    type="file"
                    accept=".pdf,.doc,.ppt,.docx"
                    onChange={handleFileChange}
                    className="text-gray-200"
                  />
                  <p className="text-sm text-gray-500 mt-2">PDF, DOC, or PPT files up to 10MB</p>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

            {/* What Happens Next */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">WHAT HAPPENS NEXT?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Your journey from application to factory launch
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <span className="text-3xl font-bold text-primary-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">COMMUNITY REVIEW</h3>
              <p className="text-gray-400">Our community evaluates your proposal for viability and alignment</p>
            </div>

            <div className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <span className="text-3xl font-bold text-primary-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">INTERVIEW PROCESS</h3>
              <p className="text-gray-400">If approved, you'll have a detailed discussion with our team</p>
            </div>

            <div className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <span className="text-3xl font-bold text-primary-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">FUNDING & LAUNCH</h3>
              <p className="text-gray-400">Community funding begins and your factory journey starts</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ApplyFactoryPage;
function alert(message: string | null) {
  throw new Error('Function not implemented.');
}

