import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/productSlice';

const FilterModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    size: '',
    category: '',
    priceRange: '',
  });

  const applyFilters = () => {
    dispatch(setFilter(filters));
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.header}>Filter Products</Text>
        
        <View style={styles.filterGroup}>
          <Text>Size:</Text>
          <View style={styles.sizeContainer}>
            {['S', 'M', 'L', 'XL'].map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  filters.size === size && styles.selectedSize
                ]}
                onPress={() => setFilters({ ...filters, size })}
              >
                <Text>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text>Price Range:</Text>
          {['0-50', '50-100', '100-200', '200+'].map(range => (
            <TouchableOpacity
              key={range}
              style={[
                styles.priceButton,
                filters.priceRange === range && styles.selectedPrice
              ]}
              onPress={() => setFilters({ ...filters, priceRange: range })}
            >
              <Text>${range}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
            <Text style={styles.buttonText}>Apply Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Add styles similar to previous components
export default FilterModal;