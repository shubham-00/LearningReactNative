import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	ScrollView,
} from 'react-native';

const logoImage = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<ScrollView sc style={styles.container}>
			<View style={styles.container2}></View>
			<View style={styles.container3}></View>
			<Text>
				Hello <Text style={styles.text2}>World</Text>
			</Text>
			{/* image from assets directory */}
			<Image source={logoImage} style={styles.image} />
			{/* image coming through network (height and width are required) */}
			<Image
				source={{ uri: 'https://picsum.photos/300' }}
				style={styles.image}
			/>
			{/* image as a background */}
			<ImageBackground
				source={logoImage}
				style={{ flex: 1, width: '100%' }}
				resizeMode={'cover'}>
				<Text styles={styles.text2}>This is some text</Text>
				<Text styles={styles.text2}>This is some text</Text>
				<Text styles={styles.text2}>This is some text</Text>
			</ImageBackground>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// paddingTop: 35,
		// paddingBottom: 350,
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
	text2: {
		color: 'pink',
		height: 20,
	},
	image: {
		height: 300,
		width: 300,
	},
});
