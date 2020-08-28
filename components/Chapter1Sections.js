import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BibleVerse } from "./BibleVerseLink";

export const DATA = [
  {
    title: 1,
    data: [
      "\n    The Holy Scripture is the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience, although the light of nature, and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable; yet are they not sufficient to give that knowledge of God and his will which is necessary unto salvation. Therefore it pleased the Lord at sundry times and in divers manners to reveal himself, and to declare that his will unto his church; and afterward for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the church against the corruption of the flesh, and the malice of Satan, and of the world, to commit the same wholly unto writing; which maketh the Holy Scriptures to be most necessary, those former ways of God's revealing his will unto his people being now ceased. \n",
    ],
    verse: [
      <BibleVerse verse={"2 Timothy 3:15-17"} link={"https://biblia.com/bible/esv/2timothy/3/15-17"} />,
      <BibleVerse verse={"Isaiah 8:20"} link={"https://biblia.com/bible/esv/isaiah/8/20"} />,
      <BibleVerse verse={"Luke 16:29, 31"} link={"https://biblia.com/bible/esv/luke/16/29"} />,
      <BibleVerse verse={"Ephesians 2:20"} link={"https://biblia.com/bible/esv/ephesians/2/20"} />,
      <BibleVerse verse={"Romans 1:19-21"} link={"https://biblia.com/bible/esv/romans/1/19-21"} />,
      <BibleVerse verse={"Romans 2:14,15"} link={"https://biblia.com/bible/esv/romans/2/14"} />,
      <BibleVerse verse={"Psalms 19:1-3"} link={"https://biblia.com/bible/esv/psalm/19/1-3"} />,
      <BibleVerse verse={"Hebrews 1:1"} link={"https://biblia.com/bible/esv/hebrews/1/1"} />,
      <BibleVerse verse={"Proverbs 22:19-21"} link={"https://biblia.com/bible/esv/proverbs/22/19-21"} />,
      <BibleVerse verse={"Romans 15:4"} link={"https://biblia.com/bible/esv/Romans/15/4"} />,
      <BibleVerse verse={"2 Peter 1:19,20"} link={"https://biblia.com/bible/esv/2Peter/1/19-20"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 2,
    data: [
      "\n    Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testaments, which are these: \n",
      "    Of the Old Testament: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, I Samuel, II Samuel, I Kings, II Kings, I Chronicles, II Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, The Song of Solomen, Isaiah, Jeremiah, Lamentations,Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi \n",
      "    Of the New Testament: Matthew, Mark, Luke, John, The Acts of the Apostles, Paul's Epistle to the Romans, I Corinthians, II Corinthians, Galatians, Ephesians, Philippians, Colossians, I Thessalonians, II Thessalonians, I Timothy, II Timothy, To Titus, To Philemon, The Epistle to the Hebrews, Epistle of James, The first and second Epistles of Peter, The first, second, and third Epistles of John, The Epistle of Jude, The Revelation \n \n All of which are given by the inspiration of God, to be the rule of faith and life.\n",
    ],
    verse: [<BibleVerse verse={"2 Timothy 3:16"} link={"https://biblia.com/bible/esv/2timothy/3/16"} />, <Text>{"\n"}</Text>],
  },

  {
    title: 3,
    data: [
      "\n    The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon or rule of the Scripture, and, therefore, are of no authority to the church of God, nor to be any otherwise approved or made use of than other human writings. \n",
    ],
    verse: [
      <BibleVerse verse={"Luke 24:27"} link={"https://biblia.com/bible/esv/Luke/24/27"} />,
      <BibleVerse verse={"Romans 3:2"} link={"https://biblia.com/bible/esv/Romans/3/2"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 4,
    data: [
      "\n    The authority of the Holy Scripture, for which it ought to be believed, dependeth not upon the testimony of any man or church, but wholly upon God (who is truth itself), the author thereof; therefore it is to be received because it is the Word of God. \n",
    ],
    verse: [
      <BibleVerse verse={"2 Peter 1:19-21"} link={"https://biblia.com/bible/esv/2Peter/1/19-21"} />,
      <BibleVerse verse={"2 Timothy 3:16"} link={"https://biblia.com/bible/esv/2Timothy/3/16"} />,
      <BibleVerse verse={"2 Thessalonians 2:13"} link={"https://biblia.com/bible/esv/2Thessalonians/2/13"} />,
      <BibleVerse verse={"1 John 5:9"} link={"https://biblia.com/bible/esv/1John/5/9"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 5,
    data: [
      "\n    We may be moved and induced by the testimony of the church of God to an high and reverent esteem of the Holy Scriptures; and the heavenliness of the matter, the efficacy of the doctrine, and the majesty of the style, the consent of all the parts, the scope of the whole (which is to give all glory to God), the full discovery it makes of the only way of man's salvation, and many other incomparable excellencies, and entire perfections thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God; yet notwithstanding, our full persuasion and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts. \n",
    ],
    verse: [
      <BibleVerse verse={"John 16:13,14"} link={"https://biblia.com/bible/esv/John/16/13-14"} />,
      <BibleVerse verse={"1 Corinthians 2:10-12"} link={"https://biblia.com/bible/esv/1Corinthians/2/10-12"} />,
      <BibleVerse verse={"1 John 2:20, 27"} link={"https://biblia.com/bible/esv/1John/2/20-27"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 6,
    data: [
      "\n    The whole counsel of God concerning all things necessary for his own glory, man's salvation, faith and life, is either expressly set down or necessarily contained in the Holy Scripture: unto which nothing at any time is to be added, whether by new revelation of the Spirit, or traditions of men. Nevertheless, we acknowledge the inward illumination of the Spirit of God to be necessary for the saving understanding of such things as are revealed in the Word, and that there are some circumstances concerning the worship of God, and government of the church, common to human actions and societies, which are to be ordered by the light of nature and Christian prudence, according to the general rules of the Word, which are always to be observed. \n",
    ],
    verse: [
      <BibleVerse verse={"2 Timothy 3:15-17"} link={"https://biblia.com/bible/esv/2Timothy/3/15-17"} />,
      <BibleVerse verse={"Galatians 1:8,9"} link={"https://biblia.com/bible/esv/Galatians/1/8-9"} />,
      <BibleVerse verse={"John 6:45"} link={"https://biblia.com/bible/esv/John/6/45"} />,
      <BibleVerse verse={"1 Corinthians 2:9-12"} link={"https://biblia.com/bible/esv/1Corinthians/2/9-12"} />,
      <BibleVerse verse={"1 Corinthians 11:13"} link={"https://biblia.com/bible/esv/1Corinthians/11/13"} />,
      <BibleVerse verse={"1 Corinthians 14:26,40"} link={"https://biblia.com/bible/esv/1Corinthians/14/26-40"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 7,
    data: [
      "\n    All things in Scripture are not alike plain in themselves, nor alike clear unto all; yet those things which are necessary to be known, believed and observed for salvation, are so clearly propounded and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them. \n",
    ],
    verse: [
      <BibleVerse verse={"2 Peter 3:16"} link={"https://biblia.com/bible/esv/2Peter/3/16"} />,
      <BibleVerse verse={"Psalms 19:7"} link={"https://biblia.com/bible/esv/Psalms/19/7"} />,
      <BibleVerse verse={"Psalms 119:130"} link={"https://biblia.com/bible/esv/Psalms/119/130"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 8,
    data: [
      "\n    The Old Testament in Hebrew (which was the native language of the people of God of old), and the New Testament in Greek (which at the time of the writing of it was most generally known to the nations), being immediately inspired by God, and by his singular care and providence kept pure in all ages, are therefore authentic; so as in all controversies of religion, the church is finally to appeal to them. But because these original tongues are not known to all the people of God, who have a right unto, and interest in the Scriptures, and are commanded in the fear of God to read and search them, therefore they are to be translated into the vulgar language of every nation unto which they come, that the Word of God dwelling plentifully in all, they may worship him in an acceptable manner, and through patience and comfort of the Scriptures may have hope. \n",
    ],
    verse: [
      <BibleVerse verse={"Romans 3:2"} link={"https://biblia.com/bible/esv/Romans/3/2"} />,
      <BibleVerse verse={"Isaiah 8:20"} link={"https://biblia.com/bible/esv/Isaiah/8/20"} />,
      <BibleVerse verse={"Acts 15:15"} link={"https://biblia.com/bible/esv/Acts/15/15"} />,
      <BibleVerse verse={"John 5:39"} link={"https://biblia.com/bible/esv/John/5/39"} />,
      <BibleVerse verse={"1 Corinthians 14:6, 9, 11, 12, 24, 28"} link={"https://biblia.com/bible/esv/1Corinthians/14/6-28"} />,
      <BibleVerse verse={"Colossians 3:16"} link={"https://biblia.com/bible/esv/Colossians/3/16"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 9,
    data: [
      "\n    The infallible rule of interpretation of Scripture is the Scripture itself; and therefore when there is a question about the true and full sense of any Scripture (which is not manifold, but one), it must be searched by other places that speak more clearly. \n",
    ],
    verse: [
      <BibleVerse verse={"2 Peter 1:20"} link={"https://biblia.com/bible/esv/2Peter/1/20"} />,
      <BibleVerse verse={"Acts 15:15, 16"} link={"https://biblia.com/bible/esv/Acts/15/15-16"} />,
      <Text>{"\n"}</Text>,
    ],
  },

  {
    title: 10,
    data: [
      "\n    The supreme judge, by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our faith is finally resolved. \n",
    ],
    verse: [
      <BibleVerse verse={"Matthew 22:29, 31, 32"} link={"https://biblia.com/bible/esv/Matthew/22/29-32"} />,
      <BibleVerse verse={"Ephesians 2:20"} link={"https://biblia.com/bible/esv/Ephesians/2/20"} />,
      <BibleVerse verse={"Acts 28:23"} link={"https://biblia.com/bible/esv/Acts/28/23"} />,
      <Text>{"\n"}</Text>,
    ],
  },
];
