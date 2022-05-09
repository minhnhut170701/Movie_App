import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51JuWZLGGZG5NG99qCste1zwSkT5a4t7OOZQwln9zZFsFdPurmp7LDgwptqwN72h9ApHAEdATy1zhRFW6rzESYZDf0038W8HL68');
  }

  return stripePromise;
}

export default getStripe;