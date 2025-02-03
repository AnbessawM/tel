import axios from 'axios';

export const processPayment = async (paymentData) => {
  // Mock payment processing
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve() : reject(new Error('Payment failed'));
    }, 1500);
  });
};

// Add other API calls as needed