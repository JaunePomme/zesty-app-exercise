import React from "react";
import { StyleSheet, View } from "react-native";
import Post from "./Post";
import { PostInterface } from "./SearchBar";

interface Props{
	postlist:PostInterface[],
}

export default function PostList({ postlist }:Props) {
	return (
		<View style={styles.container}>
			{postlist.length > 0 &&
				postlist.map((item, key) => <Post key={key} item={item} />)}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

