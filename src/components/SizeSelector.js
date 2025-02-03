import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SizeSelector = ({ sizes, selectedSize, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Size:</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.selectedSize
            ]}
            onPress={() => onSelect(size)}
          >
            <Text style={styles.sizeText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { fontSize: 16, marginBottom: 5 },
  sizeContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  sizeButton: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 5,
  },
  selectedSize: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  sizeText: {
    color: '#333',
  },
  selectedSizeText: {
    color: 'white',
  },
});

export default SizeSelector;