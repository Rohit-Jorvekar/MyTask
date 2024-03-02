import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const DonationForm = () => {
  const { confirmPayment } = useStripe();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);
      const { paymentIntent, error } = await confirmPayment({
        type: 'Card',
        amount: parseFloat(amount) * 100, // Convert to cents
        currency: 'USD',
      });

      if (error) {
        Alert.alert('Error', 'An error occurred while processing your donation.');
        console.error(error);
      } else {
        Alert.alert('Success', 'Thank you for your donation!');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: 'Card Number',
          expiry: 'MM/YY',
          cvc: 'CVC',
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <Button title="Donate" onPress={handleDonate} disabled={!amount || loading} />
    </View>
  );
};

export default DonationForm;
