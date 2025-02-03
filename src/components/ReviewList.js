import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewList = ({ reviews }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      {reviews.length === 0 ? (
        <Text>No reviews yet</Text>
      ) : (
        reviews.map((review, index) => (
          <View key={index} style={styles.reviewItem}>
            <Text style={styles.author}>{review.author}</Text>
            <Text style={styles.rating}>Rating: {review.rating}/5</Text>
            <Text>{review.comment}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  reviewItem: { marginBottom: 15, padding: 10, backgroundColor: '#f8f8f8' },
  author: { fontWeight: 'bold' },
  rating: { color: '#888', marginVertical: 3 },
});

export default ReviewList;