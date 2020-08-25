import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Section10 } from "./Chapter1Sections";
import { BibleVerse } from "./BibleVerseLink";

export const ChapterOneBody = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chapter 1: Of The Holy Scriptures </Text>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Text>{"\n\n\n\n"}</Text>
    </View>
  );
};

const SectionOne = () => {
  return (
    <Text style={styles.text}>
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
      {"\n"}
    </Text>
  );
};

const SectionTwo = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section2.sectionNumber} </Text>
      {Section2.body1} {"\n\n"}
      {Section2.body2} {"\n\n"}
      {Section2.body3}
      {"\n"}
      <BibleVerse verse={"2 Timothy 3:16"} link={"https://biblia.com/bible/esv/2timothy/3/16"} />
      {"\n"}
    </Text>
  );
};

const SectionThree = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section3.sectionNumber} </Text>
      {Section3.body}
      {"\n"}
      <BibleVerse verse={"Luke 24:27"} link={"https://biblia.com/bible/esv/Luke/24/27"} />
      <BibleVerse verse={"Romans 3:2"} link={"https://biblia.com/bible/esv/Romans/3/2"} />
      {"\n"}
    </Text>
  );
};

const SectionFour = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section4.sectionNumber} </Text>
      {Section4.body}
      {"\n"}
      <BibleVerse verse={"2 Peter 1:19-21"} link={"https://biblia.com/bible/esv/2Peter/1/19-21"} />
      <BibleVerse verse={"2 Timothy 3:16"} link={"https://biblia.com/bible/esv/2Timothy/3/16"} />
      <BibleVerse verse={"2 Thessalonians 2:13"} link={"https://biblia.com/bible/esv/2Thessalonians/2/13"} />
      <BibleVerse verse={"1 John 5:9"} link={"https://biblia.com/bible/esv/1John/5/9"} />
      {"\n"}
    </Text>
  );
};

const SectionFive = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section5.sectionNumber} </Text>
      {Section5.body}
      {"\n"}
      <BibleVerse verse={"John 16:13,14"} link={"https://biblia.com/bible/esv/John/16/13-14"} />
      <BibleVerse verse={"1 Corinthians 2:10-12"} link={"https://biblia.com/bible/esv/1Corinthians/2/10-12"} />
      <BibleVerse verse={"1 John 2:20, 27"} link={"https://biblia.com/bible/esv/1John/2/20-27"} />
      {"\n"}
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
