import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaneHeader from "../components/planet-header";
import Text from "../components/text/text";
import { PLANET_LIST } from "../data/planet-list";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLocaleLowerCase();
      const userTypedText = text.toLocaleLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlaneHeader />
      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}
              style={styles.item}
            >
              <View style={styles.main}>
                <View
                  style={[styles.circle, { backgroundColor: item.color }]}
                />
                <Text preset="h4" style={styles.itemName}>
                  {item.name}
                </Text>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
  main: { flexDirection: "row", alignItems: "center" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  itemName: { textTransform: "uppercase", marginLeft: spacing[4] },
  circle: { width: 20, height: 20, borderRadius: 10 },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
