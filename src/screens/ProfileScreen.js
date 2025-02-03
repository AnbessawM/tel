import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../store/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Welcome, {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Logout" onPress={() => dispatch(logoutSuccess())} />
        </>
      ) : (
        <>
          <Text style={styles.title}>Please login to continue</Text>
          <Button
            title="Login/Register"
            onPress={() => navigation.navigate('Auth')}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
});

export default ProfileScreen;