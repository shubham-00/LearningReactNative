import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.container2}></View>
			<View style={styles.container3}></View>
			<Text>Open up App.js now</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	container2: {
		height: 100,
		width: 100,
		backgroundColor: 'lightblue',
	},
	container3: {
		height: 100,
		width: 100,
		backgroundColor: 'lightgreen',
	},
});
