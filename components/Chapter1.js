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
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
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

const SectionSix = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section6.sectionNumber} </Text>
      {Section6.body}
      {"\n"}
      <BibleVerse verse={"2 Timothy 3:15-17"} link={"https://biblia.com/bible/esv/2Timothy/3/15-17"} />
      <BibleVerse verse={"Galatians 1:8,9"} link={"https://biblia.com/bible/esv/Galatians/1/8-9"} />
      <BibleVerse verse={"John 6:45"} link={"https://biblia.com/bible/esv/John/6/45"} />
      <BibleVerse verse={"1 Corinthians 2:9-12"} link={"https://biblia.com/bible/esv/1Corinthians/2/9-12"} />
      <BibleVerse verse={"1 Corinthians 11:13"} link={"https://biblia.com/bible/esv/1Corinthians/11/13"} />
      <BibleVerse verse={"1 Corinthians 14:26,40"} link={"https://biblia.com/bible/esv/1Corinthians/14/26-40"} />
      {"\n"}
    </Text>
  );
};

const SectionSeven = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section7.sectionNumber} </Text>
      {Section7.body}
      {"\n"}
      <BibleVerse verse={"2 Peter 3:16"} link={"https://biblia.com/bible/esv/2Peter/3/16"} />
      <BibleVerse verse={"Psalms 19:7"} link={"https://biblia.com/bible/esv/Psalms/19/7"} />
      <BibleVerse verse={"Psalms 119:130"} link={"https://biblia.com/bible/esv/Psalms/119/130"} />
      {"\n"}
    </Text>
  );
};

const SectionEight = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section8.sectionNumber} </Text>
      {Section8.body}
      {"\n"}
      <BibleVerse verse={"Romans 3:2"} link={"https://biblia.com/bible/esv/Romans/3/2"} />
      <BibleVerse verse={"Isaiah 8:20"} link={"https://biblia.com/bible/esv/Isaiah/8/20"} />
      <BibleVerse verse={"Acts 15:15"} link={"https://biblia.com/bible/esv/Acts/15/15"} />
      <BibleVerse verse={"John 5:39"} link={"https://biblia.com/bible/esv/John/5/39"} />
      <BibleVerse verse={"1 Corinthians 14:6, 9, 11, 12, 24, 28"} link={"https://biblia.com/bible/esv/1Corinthians/14/6-28"} />
      <BibleVerse verse={"Colossians 3:16"} link={"https://biblia.com/bible/esv/Colossians/3/16"} />
      {"\n"}
    </Text>
  );
};

const SectionNine = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section9.sectionNumber} </Text>
      {Section9.body}
      {"\n"}
      <BibleVerse verse={"2 Peter 1:20"} link={"https://biblia.com/bible/esv/2Peter/1/20"} />
      <BibleVerse verse={"Acts 15:15, 16"} link={"https://biblia.com/bible/esv/Acts/15/15-16"} />
      {"\n"}
    </Text>
  );
};

const SectionTen = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.sectionNum}> {Section10.sectionNumber} </Text>
      {Section10.body}
      {"\n"}
      <BibleVerse verse={"Matthew 22:29, 31, 32"} link={"https://biblia.com/bible/esv/Matthew/22/29-32"} />
      <BibleVerse verse={"Ephesians 2:20"} link={"https://biblia.com/bible/esv/Ephesians/2/20"} />
      <BibleVerse verse={"Acts 28:23"} link={"https://biblia.com/bible/esv/Acts/28/23"} />
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
