import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Home from "../screens/Home";
import MySets from "../screens/MySets";
import MySetsStack from "./MySetsStack";
import ProfileStack from "./ProfileStack"
import ProfileStackNavigator from "./MySetsStack";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  const { state, descriptors, navigation } = props;

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[
              styles.tab,
              {
                backgroundColor: "#1A1A1B",
              },
            ]}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? "white" : "#00A196",
                size: 30,
              })}
            <Text style={[styles.tabLabel, { color: "white" }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle(focused)}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={30}
                color={focused ? "white" : "#00A196"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Sets"
        component={MySetsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle(focused)}>
              <Ionicons
                name={focused ? "albums" : "albums-outline"}
                size={30}
                color={focused ? "white" : "#00A196"}
                style={{ marginLeft: 1 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle(focused)}>
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={30}
                color={focused ? "white" : "#00A196"}
                style={{ marginLeft: 1 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    height: 130,
    backgroundColor: "#1A1A1B",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
  },
  tabLabel: {
    fontSize: 14,
    paddingBottom: 30,
  },
  iconStyle: (focused) => ({
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: focused ? "#00A196" : "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  }),
});

export default BottomTabNavigator;
