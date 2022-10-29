import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ item, onDeleteHandler }) {
	const deleteItem = () => {
		onDeleteHandler(item.id);
	};

	return (
		<View style={styles.itemCard}>
			<Pressable
				onPress={deleteItem}
				style={({ pressed }) => pressed && styles.pressed}
				android_ripple={{ color: "#dddddd" }}
			>
				<View style={styles.textContainer}>
					<Text style={styles.text}>{item.text}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	itemCard: {
		marginBottom: 8,
		backgroundColor: "#5e0ACC",
		borderRadius: 16,
	},
	textContainer: {
		padding: 8,
	},
	text: {
		color: "white",
	},
	pressed: {
		opacity: 0.5,
	},
});
export default GoalItem;
