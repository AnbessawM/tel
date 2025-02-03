import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SizeSelector from '../components/SizeSelector';
import ReviewList from '../components/ReviewList';
import { addToCart } from '../store/cartSlice';

const ProductScreen = ({ route }) => {
  const { productId } = route.params;
  const product = useSelector(state => 
    state.products.products.find(p => p.id === productId)
  );
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    dispatch(addToCart({
      ...product,
      selectedSize,
      selectedVariant,
      quantity: 1,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      
      <View style={styles.variantSection}>
        <Text>Color:</Text>
        <View style={styles.variantContainer}>
          {product.variants.map(variant => (
            // Update the variant buttons in ProductScreen.js
            <TouchableOpacity
              key={variant}
              style={[
                styles.variantButton,
                selectedVariant === variant && styles.selectedVariant
              ]}
              onPress={() => setSelectedVariant(variant)}
            >
              <View style={[styles.colorSwatch, { backgroundColor: variant.toLowerCase() }]} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <SizeSelector 
        sizes={product.sizes} 
        selectedSize={selectedSize}
        onSelect={setSelectedSize}
      />

      <Button title="Add to Cart" onPress={handleAddToCart} />

      <ReviewList reviews={product.reviews} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  image: { width: '100%', height: 300 },
  title: { fontSize: 24, marginVertical: 10 },
  price: { fontSize: 20, fontWeight: 'bold' },
  variantSection: { marginVertical: 10 },
  variantContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  variantButton: { margin: 5 },
  selectedVariant: { borderWidth: 2, borderColor: 'black' },
  colorSwatch: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ProductScreen;