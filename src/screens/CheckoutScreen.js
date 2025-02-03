import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { processPayment } from '../services/api';

const CheckoutScreen = ({ navigation }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    exp: '',
    cvc: '',
  });
  const cartTotal = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    try {
      await processPayment({
        amount: cartTotal,
        card: cardDetails,
      });
      navigation.navigate('OrderConfirmation');
    } catch (error) {
      alert('Payment failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total: ${cartTotal.toFixed(2)}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardDetails.number}
        onChangeText={text => setCardDetails({ ...cardDetails, number: text })}
        keyboardType="numeric"
      />
      
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="MM/YY"
          value={cardDetails.exp}
          onChangeText={text => setCardDetails({ ...cardDetails, exp: text })}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVC"
          value={cardDetails.cvc}
          onChangeText={text => setCardDetails({ ...cardDetails, cvc: text })}
          keyboardType="numeric"
        />
      </View>

      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  total: { fontSize: 20, marginBottom: 20 },
  input: { height: 40, borderWidth: 1, marginBottom: 12, padding: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { width: '48%' },
});

export default CheckoutScreen;