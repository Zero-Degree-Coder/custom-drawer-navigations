import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { iconSize, spacing } from "../constants/dimensions";
const CustomDrawerContent = (props) => {
  const handleToggleDrawer = () => {
    props.navigation.closeDrawer();
  };
  return (
    <>
      <DrawerContentScrollView style={styles.container}>
        {/* header container */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleToggleDrawer}>
            <AntDesign name={"close"} size={iconSize.md} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Octicons name={"sun"} size={iconSize.md} />
          </TouchableOpacity>
        </View>
        {/* custom drawer items */}
        <View style={styles.drawerItemContainerr}>
          <DrawerItem
            label={"Profile"}
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <FontAwesome name={"user"} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={"Liked Song"}
            icon={() => <FontAwesome name={"heart"} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
            onPress={() => {
              props.navigation.navigate("LikedSongs");
            }}
          />
        </View>
        <View>
          <DrawerItem
            label={"Contact us"}
            icon={() => <FontAwesome name={"envelope-o"} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={"FAQs"}
            icon={() => (
              <FontAwesome name={"question-circle-o"} size={iconSize.md} />
            )}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label={"Signout"}
          icon={({ focused, color, size }) => (
            <FontAwesome name={"question-circle-o"} size={iconSize.md} />
          )}
          labelStyle={[styles.labelStyle, {}]}
          style={styles.drawerItem}
          // activeTintColor=""
          // inactiveTintColor=""
        />
      </View>
    </>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: spacing.sm,
    marginBottom: spacing.xl,
  },
  drawerItemContainerr: {},
  labelStyle: {
    // fontSize: 20,
  },
  drawerItem: {
    // marginVertical: spacing.sm,
  },
});
