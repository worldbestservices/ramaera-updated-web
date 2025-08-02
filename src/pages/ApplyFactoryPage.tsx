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
  TrendingUp,
  Upload,
  ArrowRight,
  Building
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import EnhLogo from '../components/EnhLogo';
import { useFactoryApplicationStore } from '../store/factoryApplicationStore';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };
  
  useEffect(() => {
    if (success) {
      toast.success(message || "Application submitted successfully! 🎉");
      resetForm();
      resetState();
    }
  
    if (error) {
      toast.error(error || 'Submission failed. Please try again.');
      resetState();
    }
  }, [success, error, resetForm, resetState, message]);

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
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
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
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">RAMAERA OPENS THE DOOR</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Many people have <strong className="text-primary-400">ideas, knowledge, and skills</strong>… but no funds. 
                At Ramaera, if you:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Knowledge"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <CheckCircle className="h-10 w-10 text-primary-500 mb-6 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Know how to run a factory…</h3>
                    <p className="text-gray-400">Have the technical expertise and operational knowledge</p>
                  </div>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Ideas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <Lightbulb className="h-10 w-10 text-yellow-500 mb-6 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Have a powerful product idea…</h3>
                    <p className="text-gray-400">Innovative solutions that can serve real market needs</p>
                  </div>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Funding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <AlertCircle className="h-10 w-10 text-red-500 mb-6 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Can't raise ₹1 Cr on your own…</h3>
                    <p className="text-gray-400">Traditional funding sources are out of reach</p>
                  </div>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Opportunity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <Target className="h-10 w-10 text-green-500 mb-6 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">👉 We give you the chance.</h3>
                    <p className="text-gray-400">Community-backed opportunity to realize your vision</p>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card p-12 bg-gradient-to-r from-primary-600/10 to-accent-500/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Support"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron'] cyber-text">HOW WE SUPPORT YOU</h3>
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
                  <p className="text-center text-primary-300 mt-8 text-xl golden-accent">
                    You grow — and the country grows with you.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Examples of Dreamers */}
      <section className="py-24 bg-black relative overflow-hidden">
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
                <motion.div 
                  key={index} 
                  className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Dreamer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
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
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-black relative overflow-hidden" id="factory-form">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="cyber-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Factory Form Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-['Orbitron'] cyber-text">
                  Factory Application Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <User className="h-5 w-5 mr-3 text-primary-300" />
                      Personal Information
                    </h3>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Business Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <Building className="h-5 w-5 mr-3 text-primary-300" />
                      Business Details
                    </h3>
                    <div className="space-y-4">
                      <select
                        name="business_idea"
                        value={form.business_idea}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
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
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        placeholder="City, State (e.g., Hajipur, Bihar)"
                      />

                      <select
                        name="required_amount"
                        value={form.required_amount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                      >
                        <option value="">Select funding range</option>
                        <option value="₹25 Lacs - ₹50 Lacs">₹25 Lacs - ₹50 Lacs</option>
                        <option value="₹50 Lacs - ₹1 Crore">₹50 Lacs - ₹1 Crore</option>
                        <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
                        <option value="₹2 Crore - ₹5 Crore">₹2 Crore - ₹5 Crore</option>
                        <option value="Above ₹5 Crore">Above ₹5 Crore</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <Briefcase className="h-5 w-5 mr-3 text-primary-300" />
                      Experience & Background
                    </h3>
                    <textarea
                      name="past_experience"
                      value={form.past_experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40 resize-none"
                      placeholder="Describe your experience or motivation"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <FileText className="h-5 w-5 mr-3 text-primary-300" />
                      Supporting Documents
                    </h3>
                    <div className="cyber-card p-6 border-dashed border-white/30">
                      <input
                        type="file"
                        id="supporting_document"
                        accept=".pdf,.doc,.ppt,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="supporting_document" className="cursor-pointer">
                        <div className="text-center">
                          <Upload className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                          <p className="text-gray-400 mb-2">Upload supporting documents</p>
                          <p className="text-sm text-gray-500 mb-4">PDF, DOC, or PPT files up to 10MB</p>
                          <div className="px-6 py-3 bg-gradient-to-r from-white to-accent-500 text-black rounded-xl inline-block hover:from-gray-200 hover:to-accent-400 transition-all duration-200 font-bold">
                            Choose File
                          </div>
                          {form.file && (
                            <p className="text-sm text-primary-500 mt-3 font-medium">{form.file.name}</p>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-4 bg-gradient-to-r from-white to-accent-500 text-black font-bold rounded-xl hover:from-gray-200 hover:to-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-neon flex items-center mx-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Factory className="mr-2 h-5 w-5" />
                          Submit Application
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-black relative overflow-hidden">
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
            <motion.div 
              className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Review"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                  <span className="text-3xl font-bold text-primary-400 font-['Orbitron']">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">COMMUNITY REVIEW</h3>
                <p className="text-gray-400">Our community evaluates your proposal for viability and alignment</p>
              </div>
            </motion.div>

            <motion.div 
              className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Interview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                  <span className="text-3xl font-bold text-primary-400 font-['Orbitron']">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">INTERVIEW PROCESS</h3>
                <p className="text-gray-400">If approved, you'll have a detailed discussion with our team</p>
              </div>
            </motion.div>

            <motion.div 
              className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Launch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                  <span className="text-3xl font-bold text-primary-400 font-['Orbitron']">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">FUNDING & LAUNCH</h3>
                <p className="text-gray-400">Community funding begins and your factory journey starts</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ApplyFactoryPage;