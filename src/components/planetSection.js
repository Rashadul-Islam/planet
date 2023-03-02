import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";

export default function PlanetSection({ title, value }) {
  return (
    <View style={styles.container}>
      <Text preset="small" style={styles.title}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.lightGrey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
  title: {
    textTransform: "uppercase",
  },
});
