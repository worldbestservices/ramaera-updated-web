import React, { useState } from 'react';
import { 
  CheckCircle, 
  AlertCircle,
  FileText,
  User,
  ArrowRight,
  Upload,
  IndianRupee,
  Shield,
  Heart
} from 'lucide-react';
import EnhLogo from '../components/EnhLogo';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Becomeshare: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    referralCode: '',
    panNumber: '',
    nomineeName: '',
    nomineeRelation: '',
    idProof: null as File | null,
    sharePurchase: 1,
    termsAgreed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        idProof: e.target.files![0]
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      termsAgreed: e.target.checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAgreed) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Application submitted successfully! Our team will contact you shortly.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        location: '',
        referralCode: '',
        panNumber: '',
        nomineeName: '',
        nomineeRelation: '',
        idProof: null,
        sharePurchase: 1,
        termsAgreed: false
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden">
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
              <span className="holographic">Become Shareholder</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Join India's Industrial Revolution as a Co-Owner
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="cyber-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Form Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-['Orbitron'] cyber-text">
                  Shareholder Application Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <User className="h-5 w-5 mr-3 text-primary-500" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="Enter your full legal name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="We'll send you updates and login details"
                        />
                      </div>

                      <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="For OTP and verification"
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                          State / City *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="Where are you based?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Financial Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <IndianRupee className="h-5 w-5 mr-3 text-primary-500" />
                      Financial Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="referralCode" className="block text-sm font-medium text-gray-300 mb-2">
                          Referral Code / Inviter's Shareholder ID
                        </label>
                        <input
                          type="text"
                          id="referralCode"
                          name="referralCode"
                          value={formData.referralCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="Enter the ID of the person who invited you"
                        />
                      </div>

                      <div>
                        <label htmlFor="panNumber" className="block text-sm font-medium text-gray-300 mb-2">
                          PAN Number *
                        </label>
                        <input
                          type="text"
                          id="panNumber"
                          name="panNumber"
                          value={formData.panNumber}
                          onChange={handleInputChange}
                          required
                          pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="For compliance and shareholding registry (required)"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="sharePurchase" className="block text-sm font-medium text-gray-300 mb-2">
                          Initial Share Purchase *
                        </label>
                        <select
                          id="sharePurchase"
                          name="sharePurchase"
                          value={formData.sharePurchase}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        >
                          <option value="1">1 share (₹500)</option>
                          <option value="2">2 shares (₹1000)</option>
                          <option value="5">5 shares (₹2500)</option>
                          <option value="10">10 shares (₹5000)</option>
                          <option value="20">20 shares (₹10000)</option>
                          <option value="50">50 shares (₹25000)</option>
                          <option value="100">100 shares (₹50000)</option>
                        </select>
                        <p className="text-sm text-gray-400 mt-2">Minimum 1 share = ₹500</p>
                      </div>
                    </div>
                  </div>

                  {/* Nominee Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <Heart className="h-5 w-5 mr-3 text-primary-500" />
                      Nominee Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-300 mb-2">
                          Nominee Name *
                        </label>
                        <input
                          type="text"
                          id="nomineeName"
                          name="nomineeName"
                          value={formData.nomineeName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="In case of any unfortunate event"
                        />
                      </div>

                      <div>
                        <label htmlFor="nomineeRelation" className="block text-sm font-medium text-gray-300 mb-2">
                          Nominee Relationship *
                        </label>
                        <select
                          id="nomineeRelation"
                          name="nomineeRelation"
                          value={formData.nomineeRelation}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        >
                          <option value="">Select relationship</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Parent">Parent</option>
                          <option value="Child">Child</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center font-['Orbitron']">
                      <FileText className="h-5 w-5 mr-3 text-primary-500" />
                      ID Proof Upload *
                    </h3>
                    <div className="cyber-card p-6 border-dashed border-white/30">
                      <input
                        type="file"
                        id="idProof"
                        name="idProof"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <label htmlFor="idProof" className="cursor-pointer">
                        <div className="text-center">
                          <Upload className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                          <p className="text-gray-400 mb-2">Upload your ID Proof (Aadhaar, Voter ID, Passport)</p>
                          <p className="text-sm text-gray-500 mb-4">PDF, JPG, or PNG files up to 5MB</p>
                          <div className="px-6 py-3 bg-gradient-to-r from-white to-accent-500 text-black rounded-xl inline-block hover:from-gray-200 hover:to-accent-400 transition-all duration-200 font-bold">
                            Choose File
                          </div>
                          {formData.idProof && (
                            <p className="text-sm text-primary-500 mt-3 font-medium">{formData.idProof.name}</p>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="cyber-card p-6 bg-yellow-600/10 border border-yellow-600/50">
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="termsAgreed"
                          name="termsAgreed"
                          type="checkbox"
                          checked={formData.termsAgreed}
                          onChange={handleCheckboxChange}
                          required
                          className="w-4 h-4 bg-black/50 border-white/20 rounded focus:ring-accent-500 text-accent-600"
                        />
                      </div>
                      <div className="ml-4 text-sm">
                        <label htmlFor="termsAgreed" className="font-medium text-yellow-300">
                          I confirm that I'm not investing for fixed returns and I understand this is a co-ownership model of Ramaera Industries Ltd.
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAgreed}
                      className="px-8 py-4 bg-gradient-to-r from-white to-accent-500 text-black font-bold rounded-xl hover:from-gray-200 hover:to-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-neon flex items-center justify-center mx-auto space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Shield className="h-5 w-5" />
                          <span>Submit & Continue to Payment</span>
                          <ArrowRight className="h-5 w-5" />
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
    </div>
  );
};

export default Becomeshare;