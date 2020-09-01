import React from "react";
import Screen from "./Screen";
import { ChapterBody } from "../components/ChapterFormat";
import { ChapterOneData, ChapterTwoData } from "../components/ChapterData";

export const ChapterOne = ({ navigation }) => <Screen navigation={navigation} name="Chapter One" body={<ChapterBody chapterTitle="Chapter 1: Of The Holy Scriptures" data={ChapterOneData} />} />;
export const ChapterTwo = ({ navigation }) => <Screen navigation={navigation} name="Chapter Two" body={<ChapterBody chapterTitle="Chapter 2: Of God and the Holy Trinity" data={ChapterTwoData} />} />;
export const ChapterThree = ({ navigation }) => <Screen navigation={navigation} name="Chapter Three" body={<ChapterBody chapterTitle="Chapter 3: Of God's Decree" data={ChapterOneData} />} />;
