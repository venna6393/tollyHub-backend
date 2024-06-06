// Mock payment processor (e.g., Stripe, PayPal, etc.)
module.exports = {
  processPayment: async (userId, amount) => {
    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Simulate payment success
    return { status: "completed", transactionId: `${userId}-${Date.now()}` };
  },
};
