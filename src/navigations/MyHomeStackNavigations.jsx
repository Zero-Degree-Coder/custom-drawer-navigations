import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LikedSongsScreen from "../screens/LikedSongsScreen";

const Stack = createStackNavigator();

export default function MyHomeStackNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LikedSongs" component={LikedSongsScreen} />
    </Stack.Navigator>
  );
}