import { Pressable, ScrollView, StyleSheet, View, Linking } from "react-native";
import React from "react";
import Text from "../components/text/text";
import PlaneHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../theme/spacing";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";
import { FontAwesome } from "@expo/vector-icons";
import PlanetSection from "../components/planetSection";

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const getImage = () => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlaneHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>{getImage()}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
            <FontAwesome name="share-square-o" size={18} color="white" />
          </Pressable>
        </View>
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
  imageView: {
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
    marginBottom: spacing[8],
  },
  name: {
    textTransform: "uppercase",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginRight: spacing[1],
  },
});
