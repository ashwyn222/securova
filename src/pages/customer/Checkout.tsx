import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useCart } from '../../context/CartContext';
import { CreditCard, Smartphone, Building, Wallet, Truck, Check } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

type Step = 'address' | 'payment' | 'review';
type PaymentMethod = 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  
  const [step, setStep] = useState<Step>('address');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  
  // Address form
  const [address, setAddress] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  // Payment form
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    upiId: '',
  });

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + tax + shipping;

  // Redirect to cart if empty
  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items.length, navigate]);

  if (items.length === 0) {
    return null;
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('review');
  };

  const handlePlaceOrder = () => {
    // Mock order placement
    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    clearCart();
    navigate(`/order-confirmation/${orderId}`);
  };

  const paymentMethods = [
    { id: 'card' as PaymentMethod, icon: CreditCard, label: 'Credit/Debit Card' },
    { id: 'upi' as PaymentMethod, icon: Smartphone, label: 'UPI' },
    { id: 'netbanking' as PaymentMethod, icon: Building, label: 'Net Banking' },
    { id: 'wallet' as PaymentMethod, icon: Wallet, label: 'Wallet' },
    { id: 'cod' as PaymentMethod, icon: Truck, label: 'Cash on Delivery' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Checkout
          </h1>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl">
              <div className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'address' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                }`}>
                  {step === 'address' ? '1' : <Check className="w-6 h-6" />}
                </div>
                <span className="ml-2 text-gray-900 dark:text-white">Address</span>
                <div className={`flex-1 h-1 mx-4 ${
                  step !== 'address' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}></div>
              </div>

              <div className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'address' ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400' :
                  step === 'payment' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                }`}>
                  {step === 'review' ? <Check className="w-6 h-6" /> : '2'}
                </div>
                <span className="ml-2 text-gray-900 dark:text-white">Payment</span>
                <div className={`flex-1 h-1 mx-4 ${
                  step === 'review' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}></div>
              </div>

              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'review' ? 'bg-orange-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                }`}>
                  3
                </div>
                <span className="ml-2 text-gray-900 dark:text-white">Review</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                {/* Address Step */}
                {step === 'address' && (
                  <form onSubmit={handleAddressSubmit}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Shipping Address
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        required
                        value={address.name}
                        onChange={(e) => setAddress({ ...address, name: e.target.value })}
                      />
                      <Input
                        label="Email"
                        type="email"
                        required
                        value={address.email}
                        onChange={(e) => setAddress({ ...address, email: e.target.value })}
                      />
                      <Input
                        label="Phone"
                        type="tel"
                        required
                        value={address.phone}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                      />
                      <Input
                        label="Street Address"
                        required
                        value={address.address}
                        onChange={(e) => setAddress({ ...address, address: e.target.value })}
                        className="sm:col-span-2"
                      />
                      <Input
                        label="City"
                        required
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      />
                      <Input
                        label="State"
                        required
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      />
                      <Input
                        label="ZIP Code"
                        required
                        value={address.zip}
                        onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                      />
                    </div>
                    <Button type="submit" size="lg" className="mt-6">
                      Continue to Payment
                    </Button>
                  </form>
                )}

                {/* Payment Step */}
                {step === 'payment' && (
                  <form onSubmit={handlePaymentSubmit}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Payment Method
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            paymentMethod === method.id
                              ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                              : 'border-gray-300 dark:border-gray-600 hover:border-orange-300'
                          }`}
                        >
                          <method.icon className="w-8 h-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">
                            {method.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <Input
                          label="Card Number"
                          placeholder="1234 5678 9012 3456"
                          required
                          value={paymentDetails.cardNumber}
                          onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                        />
                        <Input
                          label="Cardholder Name"
                          required
                          value={paymentDetails.cardName}
                          onChange={(e) => setPaymentDetails({ ...paymentDetails, cardName: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            label="Expiry Date"
                            placeholder="MM/YY"
                            required
                            value={paymentDetails.expiry}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
                          />
                          <Input
                            label="CVV"
                            placeholder="123"
                            required
                            value={paymentDetails.cvv}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <Input
                        label="UPI ID"
                        placeholder="yourname@upi"
                        required
                        value={paymentDetails.upiId}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, upiId: e.target.value })}
                      />
                    )}

                    {paymentMethod === 'cod' && (
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <p className="text-yellow-800 dark:text-yellow-200">
                          You will pay in cash upon delivery. Please keep exact change ready.
                        </p>
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      <Button type="button" variant="outline" onClick={() => setStep('address')}>
                        Back
                      </Button>
                      <Button type="submit" size="lg">
                        Review Order
                      </Button>
                    </div>
                  </form>
                )}

                {/* Review Step */}
                {step === 'review' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Review Order
                    </h2>

                    {/* Shipping Address */}
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Shipping Address
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {address.name}<br />
                        {address.address}<br />
                        {address.city}, {address.state} {address.zip}<br />
                        {address.phone}
                      </p>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Payment Method
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {paymentMethods.find(m => m.id === paymentMethod)?.label}
                      </p>
                    </div>

                    {/* Items */}
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Order Items
                      </h3>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-4">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                              <ImageWithFallback
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-gray-900 dark:text-white">{item.name}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-bold text-gray-900 dark:text-white">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={() => setStep('payment')}>
                        Back
                      </Button>
                      <Button onClick={handlePlaceOrder} size="lg">
                        Place Order
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Subtotal ({items.length} items)</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Tax</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Total
                    </span>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

