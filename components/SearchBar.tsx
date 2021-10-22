import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import axios, { AxiosResponse } from "axios";
import PostList from "./PostList";

export interface PostInterface{
	value:string,
	img: string
}
export default function SearchBar() {
	const [value, onChangeText] = useState("");
	const [postlist, setPostlist] = useState([] as PostInterface[]);
	const url="https://coffee.alexflipnote.dev/random.json";
	
	const searchImage = async () : Promise<void> => {
		try {
			const response : AxiosResponse<{file:string}>= await axios.get(
				url
			);
			const img =  response.data["file"];
			setPostlist([...postlist, { value, img }].reverse());
		} catch (e) {
			console.log("error:" + e);
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Type here.."
				value={value}
				onChangeText={onChangeText}
			/>
			<View style={styles.button}>
				<TouchableOpacity onPress={searchImage} >
					<Text>Publier</Text>
				</TouchableOpacity>
			</View>

			<PostList postlist={postlist} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "lightgray",
	},
	button: {
		backgroundColor: "#FFEB3B",
		margin: 10,
		width: 100,
		alignItems: "center",
		padding: 10,
	},
	container: {
		margin: 30,
		flex: 1,
		justifyContent: "center",
	},
});
