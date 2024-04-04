import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {View} from 'react-native';
import PaymentScreen from './PaymentScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StripeProvider
        publishableKey="pk_test_51Oypa8SHTSdOGw5Nr9dKzp6FUkcbeGz8CELcSUEvgDm16sty6sYpASanwswNlzqZqUo0JwWf8qSybaH0mEpdp4VY00tJgiD7DD"
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <PaymentScreen />
      </StripeProvider>
    </View>
  );
};

export default App;
