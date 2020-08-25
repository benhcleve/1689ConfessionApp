import React from "react";
import Screen from "./Screen";
import { ChapterOneBody } from "../components/Chapter1";

export const ChapterOne = ({ navigation }) => <Screen navigation={navigation} name="Chapter One" body={ChapterOneBody()} />;
export const ChapterTwo = ({ navigation }) => <Screen navigation={navigation} name="Chapter Two" body={ChapterOneBody()} />;
export const ChapterThree = ({ navigation }) => <Screen navigation={navigation} name="Chapter Three" body={ChapterOneBody()} />;
