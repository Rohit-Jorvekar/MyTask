import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from './ThemeContext'; 

const ProfileUpdate = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUpdateProfile = async () => {
    if (!name || !email || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);

      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleNavigateToDonationScreen = () => {
    navigation.navigate('Donation');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Profile Update</Text>
      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackground }]}
        placeholder="Name"
        placeholderTextColor={'black'}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackground }]}
        placeholder="Email"
        placeholderTextColor={'black'}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackground }]}
        placeholder="Phone Number"
        placeholderTextColor={'black'}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground }]} onPress={handleUpdateProfile}>
        <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.themeButton} onPress={handleNavigateToDonationScreen}>
        <Text style={styles.themeButtonText}>Payout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    color:'black',
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  themeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  themeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileUpdate;
