import React, { useState } from 'react';
import { 
  CheckCircle, 
  AlertCircle,
  FileText,
  User,
  ArrowRight
} from 'lucide-react';
import EnhLogo from '../components/EnhLogo';
import AnimatedSection from '../components/AnimatedSection';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    
    // Validate form
    if (!formData.termsAgreed) {
      setSubmitStatus('error');
      setErrorMessage('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call
      // await api.submitShareholderApplication(formData);
      
      setSubmitStatus('success');
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
      setSubmitStatus('error');
      setErrorMessage('Failed to submit application. Please try again.');
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center mb-8">
              <EnhLogo size="lg" variant="floating" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">Become Shareholder</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' && (
            <AnimatedSection>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="text-green-800 font-semibold">Application Submitted Successfully!</h3>
                    <p className="text-green-700">Our team will contact you shortly with further details.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {submitStatus === 'error' && (
            <AnimatedSection>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection>
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Shareholder Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary-500" />
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                        placeholder="Where are you based?"
                      />
                    </div>
                  </div>
                </div>

                {/* Financial Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary-500" />
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                        placeholder="For compliance and shareholding registry (required)"
                      />
                    </div>

                    <div>
                      <label htmlFor="sharePurchase" className="block text-sm font-medium text-gray-300 mb-2">
                        Initial Share Purchase *
                      </label>
                      <select
                        id="sharePurchase"
                        name="sharePurchase"
                        value={formData.sharePurchase}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                      >
                        <option value="1">1 share (₹500)</option>
                        <option value="2">2 shares (₹1000)</option>
                        <option value="5">5 shares (₹2500)</option>
                        <option value="10">10 shares (₹5000)</option>
                        <option value="20">20 shares (₹10000)</option>
                        <option value="50">50 shares (₹25000)</option>
                        <option value="100">100 shares (₹50000)</option>
                      </select>
                      <p className="text-xs text-gray-400 mt-1">Minimum 1 share = ₹500</p>
                    </div>
                  </div>
                </div>

                {/* Nominee Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary-500" />
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
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
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary-500" />
                    ID Proof Upload *
                  </h3>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-6">
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
                        <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-400 mb-2">Upload your ID Proof (Aadhaar, Voter ID, Passport)</p>
                        <p className="text-sm text-gray-500 mb-4">PDF, JPG, or PNG files up to 5MB</p>
                        <div className="px-4 py-2 bg-gray-800 text-white rounded-lg inline-block hover:bg-gray-700 transition-colors">
                          Choose File
                        </div>
                        {formData.idProof && (
                          <p className="text-sm text-primary-500 mt-2">{formData.idProof.name}</p>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="termsAgreed"
                      name="termsAgreed"
                      type="checkbox"
                      checked={formData.termsAgreed}
                      onChange={handleCheckboxChange}
                      required
                      className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-primary-500 text-primary-600"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="termsAgreed" className="font-medium text-gray-300">
                      I confirm that I'm not investing for fixed returns and I understand this is a co-ownership model of Ramaera Industries Ltd.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.termsAgreed}
                    className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto space-x-2"
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : (
                      <>
                        <span>Submit & Continue to Payment</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Becomeshare;