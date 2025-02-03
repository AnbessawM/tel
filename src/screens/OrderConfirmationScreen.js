import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmed!</Text>
      <Text style={styles.text}>Your order has been successfully placed.</Text>
      <Button
        title="Continue Shopping"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 20 },
});

export default OrderConfirmationScreen;