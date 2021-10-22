import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";

export default function App() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<SearchBar />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
