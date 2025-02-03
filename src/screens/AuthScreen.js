import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button 
        title={isLogin ? 'Login' : 'Register'} 
        onPress={handleAuth} 
      />
      
      <Button
        title={isLogin ? 'Create new account' : 'Already have an account?'}
        onPress={() => setIsLogin(!isLogin)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { height: 40, borderWidth: 1, marginBottom: 12, padding: 10 },
});

export default AuthScreen;