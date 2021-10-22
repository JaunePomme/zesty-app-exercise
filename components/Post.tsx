import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PostInterface } from "./SearchBar";

interface Props{
	item:PostInterface
}

export default function Post({ item }:Props) {
	return (
		<View style={styles.post}>
			<Text> {item.value}</Text>
			<Image style={styles.image} source={{ uri: item.img }} />
		</View>
	);
}
const styles = StyleSheet.create({
	post: {
		margin: 15,
	},
	image: {
		width: 300,
		height: 300,
	},
});
