import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Home, Hash, Phone, Mail, Package, CreditCard, Truck } from 'lucide-react';
import { useSubscriptionStore } from '../store/SubscriptionsStore';
import ScrollToTop from '../hooks/ScrollToTop';
import toast from 'react-hot-toast';

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
    icon: <CreditCard className="h-4 w-4 text-cyan-400" />,
    disabled: true,
    disabledMessage: "Coming Soon"
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    description: 'Pay when you receive your order',
    icon: <Truck className="h-4 w-4 text-yellow-400" />,
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
    subscriptions,
    selectedSubscription,
    razorpayOrder,
    loading,
    error,
    success,
  } = useSubscriptionStore();
  
  useEffect(() => {
    if (success) {
      toast.success("Monthly Spices Combo Subscription Successful 🎉", {
        duration: 4000,
        style: {
          background: '#4ade80',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      setCurrentStep(4);
      resetState(); // optional, if you want to reset Zustand state
    }
  }, [success]);

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

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center p-3 sm:p-4 py-8">
        <div className="w-full max-w-md bg-gradient-to-br from-gray-800 via-gray-900 to-slate-900 rounded-xl shadow-xl border border-cyan-400/20 backdrop-blur-md overflow-hidden">
          
          {/* Progress Bar */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-900/80 border-b border-gray-700/50">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex-1 mx-1">
                <div className={`${currentStep >= step ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700'} h-1.5 rounded-full transition-all duration-500`}></div>
                <div className="text-xs text-center mt-1 text-gray-400 font-medium">
                  {['Details', 'Combo', 'Payment'][step - 1]}
                </div>
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                🌶️ Premium Spice Club
              </h1>
              <p className="text-cyan-100 mt-1 text-xs sm:text-sm font-light">
                Monthly Subscription for Exotic Flavors
              </p>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-900/50 border border-red-600/50 text-red-100 px-3 py-2 rounded-lg mx-3 mt-3 text-sm"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  {error}
                </div>
              </motion.div>
            )}

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={(e) => { e.preventDefault(); nextStep(); }}
                className="p-3 sm:p-4"
              >
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3 sm:space-y-4"
                >
                  {/* User Type Selection */}
                  <motion.div variants={fieldVariants} className="space-y-1">
                    <label htmlFor="level" className="flex items-center text-gray-300 text-xs font-medium">
                      <User className="mr-1 h-3 w-3" /> 
                      You are
                    </label>
                    <select
                      id="level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                    >
                      <option value="">Select your type</option>
                      <option value="Share Holder">Share Holder</option>
                      <option value="Individual User">Individual User</option>
                    </select>
                  </motion.div>

                  {/* Conditional ID Field */}
                  {level === 'Share Holder' && (
                    <motion.div 
                      variants={fieldVariants}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-1"
                    >
                      <label htmlFor="rmPwId" className="flex items-center text-gray-300 text-xs font-medium">
                        <Hash className="mr-1 h-3 w-3" /> 
                        RmId / PwId
                      </label>
                      <input
                        id="rmPwId"
                        type="text"
                        value={rmPwId}
                        onChange={(e) => setRmPwId(e.target.value)}
                        required
                        placeholder="Enter your ID"
                        className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                      />
                    </motion.div>
                  )}

                  {/* Personal Information Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {/* Name */}
                    <motion.div variants={fieldVariants} className="space-y-1">
                      <label htmlFor="name" className="flex items-center text-gray-300 text-xs font-medium">
                        <User className="mr-1 h-3 w-3" /> 
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Jane Doe"
                        className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={fieldVariants} className="space-y-1">
                      <label htmlFor="email" className="flex items-center text-gray-300 text-xs font-medium">
                        <Mail className="mr-1 h-3 w-3" /> 
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="jane@example.com"
                        className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                      />
                    </motion.div>

                    {/* Pin Code */}
                    <motion.div variants={fieldVariants} className="space-y-1">
                      <label htmlFor="pin" className="flex items-center text-gray-300 text-xs font-medium">
                        <Hash className="mr-1 h-3 w-3" /> 
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
                        className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                      />
                    </motion.div>

                    {/* Mobile */}
                    <motion.div variants={fieldVariants} className="space-y-1">
                      <label htmlFor="mobile" className="flex items-center text-gray-300 text-xs font-medium">
                        <Phone className="mr-1 h-3 w-3" /> 
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
                        className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                      />
                    </motion.div>
                  </div>

                  {/* Address - Full Width */}
                  <motion.div variants={fieldVariants} className="space-y-1">
                    <label htmlFor="address" className="flex items-center text-gray-300 text-xs font-medium">
                      <Home className="mr-1 h-3 w-3" /> 
                      Complete Address
                    </label>
                    <textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      placeholder="123 Spice Street, Aroma City, State"
                      rows={2}
                      className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500 resize-none"
                    />
                  </motion.div>

                  {/* Alt Mobile - Optional */}
                  <motion.div variants={fieldVariants} className="space-y-1">
                    <label htmlFor="altMobile" className="flex items-center text-gray-300 text-xs font-medium">
                      <Phone className="mr-1 h-3 w-3" /> 
                      Alternate Mobile <span className="text-gray-500 text-xs">(Optional)</span>
                    </label>
                    <input
                      id="altMobile"
                      type="tel"
                      value={formData.altMobile}
                      onChange={(e) => setFormData({ ...formData, altMobile: e.target.value })}
                      placeholder="9876543210"
                      maxLength={10}
                      className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
                    />
                  </motion.div>

                  {/* Next Button */}
                  <motion.div variants={fieldVariants} className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md text-white font-medium shadow hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 hover:shadow-md"
                    >
                      Next: Choose Your Spices
                    </button>
                  </motion.div>
                </motion.div>
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
                className="p-3 sm:p-4"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {/* Combo Selection */}
                  <motion.div variants={fieldVariants} className="space-y-2">
                    <label className="flex items-center text-gray-300 text-xs font-medium">
                      <Package className="mr-1 h-3 w-3" />
                      Select Your Spice Combo
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
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
                        className="p-2 text-xs bg-gray-800/50 border border-cyan-500/30 rounded-md"
                      >
                        <p className="text-gray-300 leading-relaxed">{selectedComboDetails}</p>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Quantity Selection */}
                  <motion.div variants={fieldVariants} className="space-y-2">
                    <label className="block text-gray-300 text-xs font-medium">Quantity</label>
                    <div className="flex items-center justify-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                        className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-md text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={formData.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 bg-gray-800/80 rounded-md text-white font-medium min-w-[40px] text-center">
                        {formData.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                        className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-md text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={formData.quantity >= 5}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 text-center">Maximum 5 combos per subscription</p>
                  </motion.div>

                  {/* Order Summary */}
                  {total > 0 && (
                    <motion.div 
                      variants={fieldVariants}
                      className="p-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-cyan-500/30 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-cyan-400 font-semibold text-sm">Order Summary</p>
                          <p className="text-xs text-gray-400 mt-1">{formData.combo} × {formData.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-sm">
                            Total: <span className="text-lg font-bold text-cyan-400 ml-1">₹{total}</span>
                          </p>
                          <p className="text-xs text-green-400 mt-1">✓ Free shipping included</p>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-700/50 space-y-1">
                        <div className="flex items-center text-xs text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          Monthly delivery on the 15th
                        </div>
                        <div className="flex items-center text-xs text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          Cancel anytime, no commitment
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <motion.div variants={fieldVariants} className="flex justify-between pt-4">
                    <button 
                      type="button" 
                      onClick={prevStep} 
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 text-sm"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={!formData.combo} 
                      className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyan-500 hover:to-blue-500 text-sm"
                    >
                      Next: Payment Method
                    </button>
                  </motion.div>
                </motion.div>
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
                className="p-3 sm:p-4"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  <motion.h2 variants={fieldVariants} className="text-sm font-semibold text-white">
                    Select Payment Method
                  </motion.h2>
                  
                  <div className="space-y-2">
                    {paymentMethods.map(method => (
                      <motion.div
                        key={method.id}
                        variants={fieldVariants}
                        onClick={() => !method.disabled && setFormData({ ...formData, paymentMethod: method.id as 'upi' | 'razorpay' | 'cod' })}
                        className={`p-3 border rounded-lg flex items-center cursor-pointer transition-all duration-200 ${
                          method.disabled 
                            ? 'cursor-not-allowed opacity-60 border-gray-700 bg-gray-800/30' 
                            : 'hover:border-gray-500 hover:bg-gray-800/50'
                        } ${
                          formData.paymentMethod === method.id 
                            ? 'border-cyan-500 bg-gray-800/80 ring-1 ring-cyan-500/30' 
                            : 'border-gray-700 bg-gray-800/30'
                        }`}
                      >
                        <div className="mr-3 flex-shrink-0">{method.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <p className="text-white text-sm font-medium">{method.name}</p>
                            {method.disabled && (
                              <span className="ml-2 px-1.5 py-0.5 bg-gray-700 text-xxs text-gray-300 rounded">
                                {method.disabledMessage}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mt-0.5">{method.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          formData.paymentMethod === method.id 
                            ? 'border-cyan-500 bg-cyan-500' 
                            : 'border-gray-600'
                        } ${method.disabled ? 'opacity-50' : ''}`}>
                          {formData.paymentMethod === method.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
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
                      className="space-y-1"
                    >
                      <label className="block text-xs text-gray-300 font-medium">UPI ID</label>
                      <input
                        type="text"
                        value={formData.upiId}
                        onChange={e => setFormData({ ...formData, upiId: e.target.value })}
                        required
                        placeholder="yourname@upi"
                        className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-600/50 rounded-md text-white focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      />
                    </motion.div>
                  )}

                  {/* Order Total */}
                  <motion.div variants={fieldVariants} className="p-3 bg-gray-800/50 rounded-md border border-gray-700/50">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Order Total:</span>
                      <span className="text-lg font-bold text-cyan-400">₹{total}</span>
                    </div>
                  </motion.div>

                  {/* Navigation Buttons */}
                  <motion.div variants={fieldVariants} className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 text-sm"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.paymentMethod || (formData.paymentMethod === 'upi' && !formData.upiId) || isSubmitting}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-500 hover:to-emerald-500 flex items-center text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        'Complete Order'
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.form>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 sm:p-5 text-center"
              >
                {!error ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="mb-4 text-green-400 text-5xl">✓</div>
                    <h2 className="text-xl sm:text-xl font-bold text-white mb-2">Order Confirmed! 🎉</h2>
                    <p className="text-gray-300 mb-4 text-sm">Your Premium Spice Club subscription is now active.</p>

                    <div className="bg-gray-800/50 p-4 rounded-lg mb-4 text-left border border-gray-700/50 text-sm">
                      <h3 className="text-cyan-400 font-semibold mb-2 text-sm">Order Details</h3>
                      <div className="space-y-2">
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
                        <div className="flex justify-between pt-2 border-t border-gray-700">
                          <span className="text-gray-400 font-medium">Total Amount:</span>
                          <span className="text-cyan-400 font-bold">₹{total}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900/30 border border-blue-500/30 rounded-md p-3 mb-4 text-xs">
                      <p className="text-blue-200">
                        📦 Your first spice delivery will arrive on the 15th of next month.
                        We'll send you a tracking notification soon!
                      </p>
                    </div>

                    <button
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
                      className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md transition-all duration-200 hover:from-cyan-500 hover:to-blue-500 hover:scale-105 text-sm"
                    >
                      Start New Subscription
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="mb-4 text-red-400 text-5xl">✗</div>
                    <h2 className="text-xl sm:text-xl font-bold text-white mb-2">Order Failed</h2>
                    <p className="text-gray-300 mb-4 text-sm">Something went wrong. Please try again after some time.</p>
                    <button
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
                      className="px-5 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-md transition-all duration-200 hover:from-red-500 hover:to-pink-500 hover:scale-105 text-sm"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

