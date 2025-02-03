// CartScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { processPayment } from '../services/api';

const CartScreen = () => {
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    try {
      await processPayment({ items: cart, total });
      dispatch(clearCart());
      alert('Payment successful!');
    } catch (error) {
      alert('Payment failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id + item.selectedSize + item.selectedVariant}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text>{item.title}</Text>
              <Text>Size: {item.selectedSize}</Text>
              <Text>Color: {item.selectedVariant}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        <Button title="Checkout" onPress={handlePayment} />
      </View>
    </View>
  );
};

// Add styles and export