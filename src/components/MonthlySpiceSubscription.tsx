import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Home, Hash, Phone, Mail, Package, CreditCard, Truck, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useSubscriptionStore } from '../store/SubscriptionsStore';
import ScrollToTop from '../hooks/ScrollToTop';
import toast from 'react-hot-toast';
import EnhLogo from './EnhLogo';
import AnimatedSection from './AnimatedSection';

interface Subscription {
  level: string;
  pin: string;
  userType: string;
  rmPwId?: string;
  name: string;
  email: string;
  address: string;
  pinCode: string;
  mobile: string;
  altMobile?: string;
  combo: string;
  quantity: number;
  paymentMethod: 'upi' | 'razorpay' | 'cod';
  upiId?: string;
  total: number;
}

const comboPrices: Record<'₹100 Spice Pack' | '₹200 Premium Pack' | '₹300 Deluxe Pack', number> = {
  "₹100 Spice Pack": 100,
  "₹200 Premium Pack": 200,
  "₹300 Deluxe Pack": 300,
};

const comboDescriptions: Record<
  '₹100 Spice Pack' | '₹200 Premium Pack' | '₹300 Deluxe Pack',
  string
> = {
  "₹100 Spice Pack": "Essential spices for everyday cooking (10 varieties)",
  "₹200 Premium Pack": "Gourmet spices including rare finds (15 varieties)",
  "₹300 Deluxe Pack": "Luxury spices with exotic imports (20 varieties + bonus gifts)",
};

const paymentMethods = [
  {
    id: 'upi',
    name: 'UPI Payment',
    description: 'Instant payment using any UPI app',
    icon: <CreditCard className="h-5 w-5 text-cyan-400" />,
    disabled: true,
    disabledMessage: "Coming Soon"
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    description: 'Pay when you receive your order',
    icon: <Truck className="h-5 w-5 text-yellow-400" />,
    disabled: false
  },
];

export default function MonthlySpiceSubscription() {
  const [level, setLevel] = useState('');
  const [rmPwId, setRmPwId] = useState('');
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    address: string;
    pin: string;
    mobile: string;
    altMobile: string;
    combo: keyof typeof comboPrices | '';
    quantity: number;
    paymentMethod: 'upi' | 'razorpay' | 'cod' | '';
    upiId: string;
  }>({
    name: '',
    email: '',
    address: '',
    pin: '',
    mobile: '',
    altMobile: '',
    combo: '',
    quantity: 1,
    paymentMethod: '',
    upiId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedComboDetails, setSelectedComboDetails] = useState<string | null>(null);

  const {
    createSubscription,
    resetState,
    loading,
    error,
    success,
  } = useSubscriptionStore();
  
  useEffect(() => {
    if (success) {
      toast.success("Monthly Spices Combo Subscription Successful! 🎉");
      setCurrentStep(4);
      resetState();
    }
    
    if (error) {
      toast.error(error || 'Subscription failed. Please try again.');
      resetState();
    }
  }, [success, error, resetState]);

  const total = formData.combo && formData.quantity
    ? comboPrices[formData.combo] * formData.quantity
    : 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subscriptionData: Subscription = {
        level: level,
        pin: formData.pin,
        userType: level,
        rmPwId: level === 'Share Holder' ? rmPwId : undefined,
        name: formData.name,
        address: formData.address,
        pinCode: formData.pin,
        mobile: formData.mobile,
        altMobile: formData.altMobile || undefined,
        combo: formData.combo,
        quantity: formData.quantity,
        paymentMethod: formData.paymentMethod as 'upi' | 'razorpay' | 'cod',
        upiId: formData.paymentMethod === 'upi' ? formData.upiId : undefined,
        total: total,
        email: formData.email
      };

      await createSubscription(subscriptionData);

      if (!error) {
        setCurrentStep(4);
      }
    } catch (err) {
      console.error('Subscription error:', err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComboChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const combo = e.target.value as keyof typeof comboDescriptions;
    setFormData({ ...formData, combo });
    setSelectedComboDetails(combo ? comboDescriptions[combo] : null);
  };

  const nextStep = () => currentStep < 4 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  return (
    <div className="animate-fade-in bg-black">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Spice Background"
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
              <span className="holographic">PREMIUM SPICE CLUB</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Monthly Subscription for Exotic Flavors from Ramaera Spice Factory
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="cyber-card overflow-hidden relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress Bar */}
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-primary-600/20 to-accent-500/20 border-b border-white/20">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1 mx-2">
                  <div className={`${currentStep >= step ? 'bg-gradient-to-r from-white to-accent-500' : 'bg-gray-700'} h-2 rounded-full transition-all duration-500`}></div>
                  <div className="text-sm text-center mt-2 text-gray-300 font-medium font-['Orbitron']">
                    {['Details', 'Combo', 'Payment'][step - 1]}
                  </div>
                </div>
              ))}
            </div>

            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-primary-600/10 to-accent-500/10 text-center border-b border-white/20">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-white font-['Orbitron'] holographic">
                  🌶️ PREMIUM SPICE CLUB
                </h2>
                <p className="text-accent-400 mt-2 text-sm font-medium">
                  Monthly Subscription for Exotic Flavors
                </p>
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={(e) => { e.preventDefault(); nextStep(); }}
                  className="p-6"
                >
                  <div className="space-y-6">
                    {/* User Type Selection */}
                    <div className="space-y-2">
                      <label htmlFor="level" className="flex items-center text-gray-300 text-sm font-medium">
                        <User className="mr-2 h-4 w-4 text-accent-400" /> 
                        You are
                      </label>
                      <select
                        id="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                      >
                        <option value="">Select your type</option>
                        <option value="Share Holder">Share Holder</option>
                        <option value="Individual User">Individual User</option>
                      </select>
                    </div>

                    {/* Conditional ID Field */}
                    {level === 'Share Holder' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                      >
                        <label htmlFor="rmPwId" className="flex items-center text-gray-300 text-sm font-medium">
                          <Hash className="mr-2 h-4 w-4 text-accent-400" /> 
                          RmId / PwId
                        </label>
                        <input
                          id="rmPwId"
                          type="text"
                          value={rmPwId}
                          onChange={(e) => setRmPwId(e.target.value)}
                          required
                          placeholder="Enter your ID"
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        />
                      </motion.div>
                    )}

                    {/* Personal Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="flex items-center text-gray-300 text-sm font-medium">
                          <User className="mr-2 h-4 w-4 text-accent-400" /> 
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="flex items-center text-gray-300 text-sm font-medium">
                          <Mail className="mr-2 h-4 w-4 text-accent-400" /> 
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        />
                      </div>

                      {/* Pin Code */}
                      <div className="space-y-2">
                        <label htmlFor="pin" className="flex items-center text-gray-300 text-sm font-medium">
                          <Hash className="mr-2 h-4 w-4 text-accent-400" /> 
                          Pin Code
                        </label>
                        <input
                          id="pin"
                          type="text"
                          value={formData.pin}
                          onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                          required
                          placeholder="560001"
                          maxLength={6}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        />
                      </div>

                      {/* Mobile */}
                      <div className="space-y-2">
                        <label htmlFor="mobile" className="flex items-center text-gray-300 text-sm font-medium">
                          <Phone className="mr-2 h-4 w-4 text-accent-400" /> 
                          Mobile Number
                        </label>
                        <input
                          id="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          required
                          placeholder="9876543210"
                          maxLength={10}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        />
                      </div>
                    </div>

                    {/* Address - Full Width */}
                    <div className="space-y-2">
                      <label htmlFor="address" className="flex items-center text-gray-300 text-sm font-medium">
                        <Home className="mr-2 h-4 w-4 text-accent-400" /> 
                        Complete Address
                      </label>
                      <textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        placeholder="123 Spice Street, Aroma City, State"
                        rows={3}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40 resize-none"
                      />
                    </div>

                    {/* Alt Mobile - Optional */}
                    <div className="space-y-2">
                      <label htmlFor="altMobile" className="flex items-center text-gray-300 text-sm font-medium">
                        <Phone className="mr-2 h-4 w-4 text-accent-400" /> 
                        Alternate Mobile <span className="text-gray-500 text-sm">(Optional)</span>
                      </label>
                      <input
                        id="altMobile"
                        type="tel"
                        value={formData.altMobile}
                        onChange={(e) => setFormData({ ...formData, altMobile: e.target.value })}
                        placeholder="9876543210"
                        maxLength={10}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                      />
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-end pt-4">
                      <motion.button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white to-accent-500 text-black rounded-xl font-bold shadow-neon hover:from-gray-200 hover:to-accent-400 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next: Choose Your Spices
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              )}

              {/* Step 2: Combo Selection */}
              {currentStep === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={(e) => { e.preventDefault(); nextStep(); }}
                  className="p-6"
                >
                  <div className="space-y-6">
                    {/* Combo Selection */}
                    <div className="space-y-3">
                      <label className="flex items-center text-gray-300 text-sm font-medium">
                        <Package className="mr-2 h-4 w-4 text-accent-400" />
                        Select Your Spice Combo
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        value={formData.combo}
                        onChange={handleComboChange}
                        required
                      >
                        <option value="">Choose a combo package</option>
                        {Object.keys(comboPrices).map((combo) => (
                          <option key={combo} value={combo}>{combo}</option>
                        ))}
                      </select>
                      
                      {selectedComboDetails && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="cyber-card p-4 bg-accent-500/10 border border-accent-500/30"
                        >
                          <p className="text-gray-300 leading-relaxed text-sm">{selectedComboDetails}</p>
                        </motion.div>
                      )}
                    </div>

                    {/* Quantity Selection */}
                    <div className="space-y-3">
                      <label className="block text-gray-300 text-sm font-medium">Quantity</label>
                      <div className="flex items-center justify-center space-x-4">
                        <motion.button
                          type="button"
                          onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                          className="w-10 h-10 bg-black/50 hover:bg-white/10 border border-white/20 rounded-xl text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold"
                          disabled={formData.quantity <= 1}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          -
                        </motion.button>
                        <span className="px-6 py-2 bg-gradient-to-r from-white to-accent-500 text-black rounded-xl font-bold min-w-[60px] text-center">
                          {formData.quantity}
                        </span>
                        <motion.button
                          type="button"
                          onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                          className="w-10 h-10 bg-black/50 hover:bg-white/10 border border-white/20 rounded-xl text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold"
                          disabled={formData.quantity >= 5}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          +
                        </motion.button>
                      </div>
                      <p className="text-sm text-gray-400 text-center">Maximum 5 combos per subscription</p>
                    </div>

                    {/* Order Summary */}
                    {total > 0 && (
                      <div className="cyber-card p-6 bg-gradient-to-r from-primary-600/10 to-accent-500/10 border border-accent-500/30">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-accent-400 font-semibold text-lg font-['Orbitron']">Order Summary</p>
                            <p className="text-sm text-gray-400 mt-1">{formData.combo} × {formData.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-lg">
                              Total: <span className="text-2xl font-bold text-accent-400 ml-2 font-['Orbitron']">₹{total}</span>
                            </p>
                            <p className="text-sm text-green-400 mt-1">✓ Free shipping included</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/20 space-y-2">
                          <div className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                            Monthly delivery on the 15th
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                            Cancel anytime, no commitment
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <motion.button 
                        type="button" 
                        onClick={prevStep} 
                        className="px-6 py-3 bg-black/50 hover:bg-white/10 border border-white/20 text-white rounded-xl transition-all duration-200 font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Back
                      </motion.button>
                      <motion.button 
                        type="submit" 
                        disabled={!formData.combo} 
                        className="px-6 py-3 bg-gradient-to-r from-white to-accent-500 text-black rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next: Payment Method
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <motion.form
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="p-6"
                >
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white font-['Orbitron']">
                      Select Payment Method
                    </h3>
                    
                    <div className="space-y-3">
                      {paymentMethods.map(method => (
                        <motion.div
                          key={method.id}
                          onClick={() => !method.disabled && setFormData({ ...formData, paymentMethod: method.id as 'upi' | 'razorpay' | 'cod' })}
                          className={`cyber-card p-4 flex items-center cursor-pointer transition-all duration-200 ${
                            method.disabled 
                              ? 'cursor-not-allowed opacity-60' 
                              : 'hover:border-white/40'
                          } ${
                            formData.paymentMethod === method.id 
                              ? 'border-accent-500/50 bg-accent-500/10' 
                              : ''
                          }`}
                          whileHover={!method.disabled ? { scale: 1.02 } : {}}
                          whileTap={!method.disabled ? { scale: 0.98 } : {}}
                        >
                          <div className="mr-4 flex-shrink-0">{method.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <p className="text-white text-sm font-medium">{method.name}</p>
                              {method.disabled && (
                                <span className="ml-3 px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full">
                                  {method.disabledMessage}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{method.description}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            formData.paymentMethod === method.id 
                              ? 'border-accent-500 bg-accent-500' 
                              : 'border-gray-600'
                          } ${method.disabled ? 'opacity-50' : ''}`}>
                            {formData.paymentMethod === method.id && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* UPI ID Input */}
                    {formData.paymentMethod === 'upi' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <label className="block text-sm text-gray-300 font-medium">UPI ID</label>
                        <input
                          type="text"
                          value={formData.upiId}
                          onChange={e => setFormData({ ...formData, upiId: e.target.value })}
                          required
                          placeholder="yourname@upi"
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                        />
                      </motion.div>
                    )}

                    {/* Order Total */}
                    <div className="cyber-card p-4 bg-gradient-to-r from-primary-600/10 to-accent-500/10">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-lg">Order Total:</span>
                        <span className="text-2xl font-bold text-accent-400 font-['Orbitron']">₹{total}</span>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 bg-black/50 hover:bg-white/10 border border-white/20 text-white rounded-xl transition-all duration-200 font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="submit"
                        disabled={!formData.paymentMethod || (formData.paymentMethod === 'upi' && !formData.upiId) || isSubmitting}
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Complete Order
                            <CheckCircle className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  {!error ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-6">
                        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2 font-['Orbitron'] holographic">Order Confirmed! 🎉</h2>
                        <p className="text-gray-300 mb-6">Your Premium Spice Club subscription is now active.</p>
                      </div>

                      <div className="cyber-card p-6 mb-6 text-left bg-gradient-to-r from-primary-600/10 to-accent-500/10">
                        <h3 className="text-accent-400 font-semibold mb-4 text-lg font-['Orbitron']">Order Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Customer:</span>
                            <span className="text-white font-medium">{formData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Subscription:</span>
                            <span className="text-white">{formData.combo} × {formData.quantity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Payment Method:</span>
                            <span className="text-white capitalize">
                              {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : `UPI (${formData.upiId})`}
                            </span>
                          </div>
                          <div className="flex justify-between pt-3 border-t border-white/20">
                            <span className="text-gray-400 font-medium">Total Amount:</span>
                            <span className="text-accent-400 font-bold text-lg font-['Orbitron']">₹{total}</span>
                          </div>
                        </div>
                      </div>

                      <div className="cyber-card p-4 mb-6 bg-blue-600/10 border border-blue-500/30">
                        <p className="text-blue-200 text-sm">
                          📦 Your first spice delivery will arrive on the 15th of next month.
                          We'll send you a tracking notification soon!
                        </p>
                      </div>

                      <motion.button
                        onClick={() => {
                          resetState();
                          setCurrentStep(1);
                          setFormData({
                            name: '', email: '', address: '', pin: '', mobile: '', altMobile: '',
                            combo: '', quantity: 1, paymentMethod: '', upiId: ''
                          });
                          setLevel('');
                          setRmPwId('');
                        }}
                        className="px-8 py-3 bg-gradient-to-r from-white to-accent-500 text-black rounded-xl transition-all duration-200 font-bold flex items-center mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Start New Subscription
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-6 text-red-400 text-6xl">✗</div>
                      <h2 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">Order Failed</h2>
                      <p className="text-gray-300 mb-6">Something went wrong. Please try again after some time.</p>
                      <motion.button
                        onClick={() => {
                          resetState();
                          setCurrentStep(1);
                          setFormData({
                            name: '', email: '', address: '', pin: '', mobile: '', altMobile: '',
                            combo: '', quantity: 1, paymentMethod: '', upiId: ''
                          });
                          setLevel('');
                          setRmPwId('');
                        }}
                        className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl transition-all duration-200 font-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Try Again
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}