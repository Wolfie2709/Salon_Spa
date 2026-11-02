import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homePageStyle as styles } from '../../../theme';

const CATEGORIES = ['All', 'Massage', 'Facial', 'Hair'];

const RECOMMENDED = [
  {
    id: '1',
    title: 'Relaxing hair wash 30 min',
    price: '$40',
    image: require('@/assets/images/Background.png'),
  },
  {
    id: '2',
    title: 'Luxury Bubble Bath 30–60 min',
    price: '$40',
    image: require('@/assets/images/Background1.png'),
  },
];

export default function Home() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.flex} edges={['top']}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.heading}>What does your body need today?</Text>
          </View>

          <TextInput
            style={styles.search}
            value={query}
            onChangeText={setQuery}
            placeholder="Search treatments or therapists"
            placeholderTextColor="#4A645E"
            returnKeyType="search"
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chips}
          >
            {CATEGORIES.map((name) => {
              const active = name === category;
              return (
                <Pressable
                  key={name}
                  onPress={() => setCategory(name)}
                  style={[styles.chip, active && styles.chipActive]}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{name}</Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View style={styles.promo}>
            <Text style={styles.promoLabel}>THIS WEEK</Text>
            <Text style={styles.promoTitle}>Luxury Bubble Bath 20% off</Text>
          </View>

          <Text style={styles.sectionTitle}>Recommended</Text>

          <View style={styles.list}>
            {RECOMMENDED.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} contentFit="cover" />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

