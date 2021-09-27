/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ImageCarousel from './src/components/ImageCarousel';

const data: ImageCarouselItem[] = [
  {
    id: 0,
    uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
    title: 'Dahlia',
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7',
    title: 'Sunflower',
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1627522460108-215683bdc9f6',
    title: 'Zinnia',
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1587814213271-7a6625b76c33',
    title: 'Tulip',
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 4,
    uri: 'https://images.unsplash.com/photo-1588628566587-dbd176de94b4',
    title: 'Chrysanthemum',
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 5,
    uri: 'https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e',
    title: 'Hydrangea',
  }, // https://unsplash.com/photos/coIBOiWBPjk
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ImageCarousel data={data} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
