import { ScrollView, StyleSheet, View } from 'react-native';
import Form from './src/Components/Form';
import Title from './src/Components/Title';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Title/>
      <Form/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 25
  },
});
