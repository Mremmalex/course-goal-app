import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isModalVisible, setIsModelVisible] = useState(false);

	const addGoalHandler = (goal) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ text: goal, id: Math.random().toString() },
		]);
		endAddGoalHandler();
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	const startAddGoalHandler = () => {
		setIsModelVisible(true);
	};

	const endAddGoalHandler = () => {
		setIsModelVisible(false);
	};
	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Gaol"
					color="#b180f0"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					addGoalHandler={addGoalHandler}
					visible={isModalVisible}
					cancel={endAddGoalHandler}
				/>
				<View style={styles.goalContainer}>
					<FlatList
						data={courseGoals}
						keyExtractor={(item, _) => item.id}
						renderItem={(data) => {
							return (
								<GoalItem
									item={data.item}
									onDeleteHandler={removeGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalContainer: {
		flex: 7,
	},
});
