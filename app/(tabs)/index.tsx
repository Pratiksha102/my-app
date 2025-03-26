import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000', dark: '#000' }}
      headerImage={
        <Image
          source={require('@/assets/images/fitness-banner.jpg')} // Update with relevant image
          style={styles.bannerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fitness & Well-being</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Exercise Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Exercise for a Healthy Life</ThemedText>
        <ThemedText>
          Regular physical activity improves cardiovascular health, boosts energy, and strengthens muscles.  
          Activities like running, weightlifting, and yoga are great for overall fitness.
        </ThemedText>
      </ThemedView>

      {/* Nutrition Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Balanced Nutrition</ThemedText>
        <ThemedText>
          Eating a well-balanced diet is key to maintaining good health.  
          Focus on lean proteins, whole grains, and plenty of vegetables while staying hydrated.
        </ThemedText>
      </ThemedView>

      {/* Mental Health Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Mind & Body Connection</ThemedText>
        <ThemedText>
          Mental health is just as important as physical health.  
          Practices like meditation, mindfulness, and deep breathing can help reduce stress and improve focus.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 12,
  },
  bannerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
});
