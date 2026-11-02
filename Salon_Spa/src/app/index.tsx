
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeStyle as styles } from '../../theme';
import { Image } from 'expo-image';
import {  Pressable,Text, View } from 'react-native';
import { Link } from "expo-router";


import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.brand}>LOTUS SPA</Text>

        <Image
          source={require('@/assets/images/Background.png')}
          style={styles.image}
          contentFit="cover"
          accessibilityLabel="Background"
        />

        <Text style={styles.tagline}>Slow down. You have earned it.</Text>

        <Link href="/login" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </Link>
      </SafeAreaView>
    </View>
  );
}
