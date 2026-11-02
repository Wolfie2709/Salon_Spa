import { Image } from 'expo-image';
import { useState } from 'react';
import { signInStyle as styles } from '../../../theme';
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
import {useRouter} from "expo-router";

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    router.push("/(main)/home")
    console.log('Log in', { username, password });
  };

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

            <View style={styles.heading}>
              <Text style={styles.brand}>LOTUS SPA</Text>
              <Text style={styles.tagline}>Slow down. You have earned it.</Text>
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
              onPress={handleLogin}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>

            <Pressable
              onPress={handleLogin}
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
