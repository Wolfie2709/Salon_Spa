import React from 'react'
import { Image } from 'expo-image';
import { useState } from 'react';
import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signUpStyle as styles } from '../../../theme';

export default function SignUp() {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignUp = () => {
        router.push("/(auth)/login")
    }

  return (
        <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Image
              source={require('@/assets/images/Background.png')}
              style={styles.image}
              contentFit="cover"
              accessibilityLabel="Background"
            />
 
 <View style={styles.field}>
              <Text style={styles.label}>Fullname</Text>
              <TextInput
                style={styles.input}
                value={fullname}
                onChangeText={setFullname}
                placeholder="Your fullname"
                placeholderTextColor="#757575"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="fullname"
              />
            </View>
 
            <View style={styles.field}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Your username"
                placeholderTextColor="#757575"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
              />
            </View>
 
            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Your password"
                placeholderTextColor="#757575"
                secureTextEntry
                autoCapitalize="none"
                textContentType="password"
              />
            </View>
 
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
              onPress={handleSignUp}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
 
            <Pressable
              onPress={() => {
              }}
              accessibilityRole="link"
            >
              <Text style={styles.link}>New here? Create an account</Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );

}