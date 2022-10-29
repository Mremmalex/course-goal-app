import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";

function GoalInput({ addGoalHandler, visible, cancel }) {
	const [goal, setEnteredGoal] = useState("");

	const textInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoal = () => {
		addGoalHandler(goal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/appicon.png")}
					style={styles.image}
				/>
				<TextInput
					style={styles.textInput}
					onChangeText={textInputHandler}
					placeholder="Your Course Goal"
					value={goal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={cancel} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoal} color="#b180f0" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		paddingBottom: 24,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#311b6b",
		color: "#cccccc",
		width: "100%",
		padding: 16,
		borderRadius: 12,
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 8,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 16,
	},
});

export default GoalInput;
