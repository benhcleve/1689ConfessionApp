import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BibleVerse, Excerpt } from "./BookFormat";

export const DATA = [
  {
    title: 1,
    data: [
      <Text>
        <Excerpt body="The Holy Scripture is the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience," verseRef={1} />
        <Excerpt
          body="although the light of nature, and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable; yet they are not sufficient to give that knowledge of God and His will which is necessary unto salvation."
          verseRef={2}
        />
        <Excerpt body="Therefore it pleased the Lord at sundry times and in diversified manners to reveal Himself, and to declare (that) His will unto His church;" verseRef={3} />
        <Excerpt
          body="and afterward for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the church against the corruption of the flesh, and the malice of Satan, and of the world, to commit the same wholly unto writing; which makes the Holy Scriptures to be most necessary, those former ways of God's revealing His will unto His people being now completed."
          verseRef={4}
        />
      </Text>,
      <Text>
        <BibleVerse verse={"2 Timothy 3:15-17"} verseRef={1} link={"https://biblia.com/bible/esv/2timothy/3/15-17"} />
        <BibleVerse verse={"Isaiah 8:20"} verseRef={1} link={"https://biblia.com/bible/esv/isaiah/8/20"} />
        <BibleVerse verse={"Luke 16:29, 31"} verseRef={1} link={"https://biblia.com/bible/esv/luke/16/29"} />
        <BibleVerse verse={"Ephesians 2:20"} verseRef={1} link={"https://biblia.com/bible/esv/ephesians/2/20"} />
        <BibleVerse verse={"Romans 1:19-21"} verseRef={2} link={"https://biblia.com/bible/esv/romans/1/19-21"} />
        <BibleVerse verse={"Romans 2:14,15"} verseRef={2} link={"https://biblia.com/bible/esv/romans/2/14"} />
        <BibleVerse verse={"Psalms 19:1-3"} verseRef={2} link={"https://biblia.com/bible/esv/psalm/19/1-3"} />
        <BibleVerse verse={"Hebrews 1:1"} verseRef={3} link={"https://biblia.com/bible/esv/hebrews/1/1"} />
        <BibleVerse verse={"Proverbs 22:19-21"} verseRef={4} link={"https://biblia.com/bible/esv/proverbs/22/19-21"} />
        <BibleVerse verse={"Romans 15:4"} verseRef={4} link={"https://biblia.com/bible/esv/Romans/15/4"} />
        <BibleVerse verse={"2 Peter 1:19,20"} verseRef={4} link={"https://biblia.com/bible/esv/2Peter/1/19-20"} />
      </Text>,
    ],
  },

  {
    title: 2,
    data: [
      <Excerpt
        body="    Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testaments, which are these:
          Of the Old Testament: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, I Samuel, II Samuel, I Kings, II Kings, I Chronicles, II Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, The Song of Solomen, Isaiah, Jeremiah, Lamentations,Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi
          Of the New Testament: Matthew, Mark, Luke, John, The Acts of the Apostles, Paul's Epistle to the Romans, I Corinthians, II Corinthians, Galatians, Ephesians, Philippians, Colossians, I Thessalonians, II Thessalonians, I Timothy, II Timothy, To Titus, To Philemon, The Epistle to the Hebrews, Epistle of James, The first and second Epistles of Peter, The first, second, and third Epistles of John, The Epistle of Jude, The Revelation
          All of which are given by the inspiration of God, to be the rule of faith and life."
        verseRef={5}
      />,
      <Text>
        <BibleVerse verse={"2 Timothy 3:16"} verseRef={5} link={"https://biblia.com/bible/esv/2timothy/3/16"} />
      </Text>,
    ],
  },

  //Stopped here

  {
    title: 3,
    data: [
      <Excerpt
        body="    The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon or rule of the Scripture, and, therefore, are of no authority to the church of God, nor to be any otherwise approved or made use of than other human writings."
        verseRef={6}
      />,
      <Text>
        <BibleVerse verse={"Luke 24:27"} verseRef={6} link={"https://biblia.com/bible/esv/Luke/24/27"} />
        <BibleVerse verse={"Romans 3:2"} verseRef={6} link={"https://biblia.com/bible/esv/Romans/3/2"} />
      </Text>,
    ],
  },

  {
    title: 4,
    data: [
      <Excerpt
        body="    The authority of the Holy Scripture, for which it ought to be believed, dependeth not upon the testimony of any man or church, but wholly upon God (who is truth itself), the author thereof; therefore it is to be received because it is the Word of God."
        verseRef={7}
      />,
      <Text>
        <BibleVerse verse={"2 Peter 1:19-21"} verseRef={7} link={"https://biblia.com/bible/esv/2Peter/1/19-21"} />
        <BibleVerse verse={"2 Timothy 3:16"} verseRef={7} link={"https://biblia.com/bible/esv/2Timothy/3/16"} />
        <BibleVerse verse={"2 Thessalonians 2:13"} verseRef={7} link={"https://biblia.com/bible/esv/2Thessalonians/2/13"} />
        <BibleVerse verse={"1 John 5:9"} verseRef={7} link={"https://biblia.com/bible/esv/1John/5/9"} />
      </Text>,
    ],
  },

  {
    title: 5,
    data: [
      <Excerpt
        body="   We may be moved and induced by the testimony of the church of God to an high and reverent esteem of the Holy Scriptures; and the heavenliness of the matter, the efficacy of the doctrine, and the majesty of the style, the consent of all the parts, the scope of the whole (which is to give all glory to God), the full discovery it makes of the only way of man's salvation, and many other incomparable excellencies, and entire perfections thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God; yet notwithstanding, our full persuasion and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts."
        verseRef={8}
      />,
      <Text>
        <BibleVerse verse={"John 16:13,14"} verseRef={8} link={"https://biblia.com/bible/esv/John/16/13-14"} />
        <BibleVerse verse={"1 Corinthians 2:10-12"} verseRef={8} link={"https://biblia.com/bible/esv/1Corinthians/2/10-12"} />
        <BibleVerse verse={"1 John 2:20, 27"} verseRef={8} link={"https://biblia.com/bible/esv/1John/2/20-27"} />
      </Text>,
    ],
  },

  {
    title: 6,
    data: [
      <Text>
        <Excerpt
          body=" The whole counsel of God concerning all things necessary for His own glory, man's salvation, faith and life, is either expressly set down or necessarily contained in the Holy Scripture: unto which nothing at any time is to be added, whether by new revelation of the Spirit, or traditions of men."
          verseRef={9}
        />
        <Excerpt
          body="Nevertheless, we acknowledge the inward illumination of the Spirit of God to be necessary for the saving understanding of such things as are revealed in the Word,"
          verseRef={10}
        />
        <Excerpt
          body=" and that there are some circumstances concerning the worship of God, and government of the church, common to human actions and societies, which are to be ordered by the light of nature and Christian prudence, according to the general rules of the Word, which are always to be observed."
          verseRef={11}
        />
      </Text>,
      <Text>
        <BibleVerse verse={"2 Timothy 3:15-17"} verseRef={9} link={"https://biblia.com/bible/esv/2Timothy/3/15-17"} />
        <BibleVerse verse={"Galatians 1:8,9"} verseRef={9} link={"https://biblia.com/bible/esv/Galatians/1/8-9"} />
        <BibleVerse verse={"John 6:45"} verseRef={10} link={"https://biblia.com/bible/esv/John/6/45"} />
        <BibleVerse verse={"1 Corinthians 2:9-12"} verseRef={10} link={"https://biblia.com/bible/esv/1Corinthians/2/9-12"} />
        <BibleVerse verse={"1 Corinthians 11:13"} verseRef={11} link={"https://biblia.com/bible/esv/1Corinthians/11/13"} />
        <BibleVerse verse={"1 Corinthians 14:26,40"} verseRef={11} link={"https://biblia.com/bible/esv/1Corinthians/14/26-40"} />
      </Text>,
    ],
  },

  {
    title: 7,
    data: [
      <Text>
        <Excerpt body=" All things in Scripture are not alike plain in themselves, nor alike clear unto all;" verseRef={12} />
        <Excerpt
          body=" yet those things which are necessary to be known, believed and observed for salvation, are so clearly propounded and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them."
          verseRef={13}
        />
      </Text>,
      <Text>
        <BibleVerse verse={"2 Peter 3:16"} verseRef={12} link={"https://biblia.com/bible/esv/2Peter/3/16"} />
        <BibleVerse verse={"Psalms 19:7"} verseRef={13} link={"https://biblia.com/bible/esv/Psalms/19/7"} />
        <BibleVerse verse={"Psalms 119:130"} verseRef={13} link={"https://biblia.com/bible/esv/Psalms/119/130"} />
      </Text>,
    ],
  },

  {
    title: 8,
    data: [
      <Text>
        <Excerpt body=" The Old Testament in Hebrew (which was the native language of the people of God of old)," verseRef={14} />
        <Excerpt
          body=" and the New Testament in Greek (which at the time of the writing of it was most generally known to the nations), being immediately inspired by God, and by His singular care and providence kept pure in all ages, are therefore authentic; so as in all controversies of religion, the church is finally to appeal to them."
          verseRef={15}
        />
        <Excerpt
          body=" But because these original tongues are not known to all the people of God, who have a right unto, and interest in the Scriptures, and are commanded in the fear of God to read,"
          verseRef={16}
        />
        <Excerpt body=" and search them," verseRef={17} />
        <Excerpt body=" therefore they are to be translated into the vulgar language of every nation unto which they come," verseRef={18} />
        <Excerpt
          body=" that the Word of God dwelling plentifully in all, they may worship Him in an acceptable manner, and through patience and comfort of the Scriptures may have hope."
          verseRef={19}
        />
      </Text>,
      <Text>
        <BibleVerse verse={"Romans 3:2"} verseRef={14} link={"https://biblia.com/bible/esv/Romans/3/2"} />
        <BibleVerse verse={"Isaiah 8:20"} verseRef={15} link={"https://biblia.com/bible/esv/Isaiah/8/20"} />
        <BibleVerse verse={"Acts 15:15"} verseRef={16} link={"https://biblia.com/bible/esv/Acts/15/15"} />
        <BibleVerse verse={"John 5:39"} verseRef={17} link={"https://biblia.com/bible/esv/John/5/39"} />
        <BibleVerse verse={"1 Corinthians 14:6, 9, 11, 12, 24, 28"} verseRef={18} link={"https://biblia.com/bible/esv/1Corinthians/14/6-28"} />
        <BibleVerse verse={"Colossians 3:16"} verseRef={19} link={"https://biblia.com/bible/esv/Colossians/3/16"} />
      </Text>,
    ],
  },

  {
    title: 9,
    data: [
      <Excerpt
        body=" The infallible rule of interpretation of Scripture is the Scripture itself; and therefore when there is a question about the true and full sense of any Scripture (which is not manifold, but one), it must be searched by other places that speak more clearly."
        verseRef={20}
      />,
      <Text>
        <BibleVerse verse={"2 Peter 1:20"} verseRef={20} link={"https://biblia.com/bible/esv/2Peter/1/20"} />
        <BibleVerse verse={"Acts 15:15, 16"} verseRef={20} link={"https://biblia.com/bible/esv/Acts/15/15-16"} />
      </Text>,
    ],
  },

  {
    title: 10,
    data: [
      <Excerpt
        body=" The supreme judge, by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our faith is finally resolved."
        verseRef={21}
      />,
      <Text>
        <BibleVerse verse={"Matthew 22:29, 31, 32"} verseRef={21} link={"https://biblia.com/bible/esv/Matthew/22/29-32"} />
        <BibleVerse verse={"Ephesians 2:20"} verseRef={21} link={"https://biblia.com/bible/esv/Ephesians/2/20"} />
        <BibleVerse verse={"Acts 28:23"} verseRef={21} link={"https://biblia.com/bible/esv/Acts/28/23"} />
      </Text>,
    ],
  },
];
