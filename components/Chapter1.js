import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section1, Section2 } from "./Chapter1Sections";
import { BibleVerse } from "./BibleVerseLink";

export const ChapterOneBody = () => {
  return (
    <View style={styles.container}>
      <SectionOne />
      <SectionTwo />
    </View>
  );
};

const SectionOne = () => {
  return (
    <Text style={styles.text}>
      {"\n"}
      <Text style={styles.sectionNum}> {Section1.sectionNumber} </Text>
      {Section1.body}
      {"\n"}
      <BibleVerse verse={"2 Timothy 3:15-17"} link={"https://biblia.com/bible/esv/2timothy/3/15-17"} />
      <BibleVerse verse={"Isaiah 8:20"} link={"https://biblia.com/bible/esv/isaiah/8/20"} />
      <BibleVerse verse={"Luke 16:29, 31"} link={"https://biblia.com/bible/esv/luke/16/29"} />
      <BibleVerse verse={"Ephesians 2:20"} link={"https://biblia.com/bible/esv/ephesians/2/20"} />
      <BibleVerse verse={"Romans 1:19-21"} link={"https://biblia.com/bible/esv/romans/1/19-21"} />
      <BibleVerse verse={"Romans 2:14,15"} link={"https://biblia.com/bible/esv/romans/2/14"} />
      <BibleVerse verse={"Psalms 19:1-3"} link={"https://biblia.com/bible/esv/psalm/19/1-3"} />
      <BibleVerse verse={"Hebrews 1:1"} link={"https://biblia.com/bible/esv/hebrews/1/1"} />
      <BibleVerse verse={"Proverbs 22:19-21"} link={"https://biblia.com/bible/esv/proverbs/22/19-21"} />
      <BibleVerse verse={"Romans 15:4"} link={"https://biblia.com/bible/esv/Romans/15/4"} />
      <BibleVerse verse={"2 Peter 1:19,20"} link={"https://biblia.com/bible/esv/2Peter/1/19-20"} />
      {"\n\n\n"}
    </Text>
  );
};

const SectionTwo = () => {
  return (
    <Text style={styles.text}>
      {"\n"}
      <Text style={{ fontSize: 30 }}> {Section2.sectionNumber} </Text>
      {Section2.body1} {"\n\n"}
      {Section2.body2} {"\n\n"}
      {Section2.body3}
      {"\n"}
      <BibleVerse verse={"2 Timothy 3:16"} link={"https://biblia.com/bible/esv/2timothy/3/16"} />
      {"\n\n\n"}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  header: {
    color: "#161924",
    fontSize: 30,
    fontWeight: "500",
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
  },
  sectionNum: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "500",
  },
});
