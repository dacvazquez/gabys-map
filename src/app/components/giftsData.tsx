import React from "react";
import {
  EarringIcon,
  CollarIcon,
  VinylIcon,
  CatKeychainIcon,
  CanelonesIcon,
  PaintingIcon,
  MeIcon,
} from "./GiftIcons";

export type Gift = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  x: number; // percentage position on map
  y: number; // percentage position on map
  icon: React.ReactNode;
};

export const giftsData: Gift[] = [
  {
    id: "earings",
    title: "Butterfly Earings",
    subtitle:
      "You said you liked them when you saw them... well I`ve got you those 🦋",
    x: 10,
    y: 26,
    description:
      "Why did the butterfly won the race? Because she is the `Butter`🧈 at it",
    icon: <EarringIcon />,
  },
  {
    id: "necklace",
    title: "Stawberry Necklace",
    subtitle: "You're berry 🍓 special to me",
    x: 40,
    y: 29,
    description:
      "This I saw it once in a post and I just knew I had to get it for you, and so I did, is yours now",
    icon: <CollarIcon />,
  },
  {
    id: "vinyl",
    title: "Painted Vinyls",
    subtitle: "I'm spinning for you, like a vinyl💿 on a record player",
    x: 67,
    y: 38,
    description:
      "Well this is an easy choice for a present for you since you love vinyls and you love handicrafts, well now you got a summer vibe vinyl and a spooky one :3",
    icon: <VinylIcon />,
  },
  {
    id: "catkey",
    title: "Key-cat 🍫",
    subtitle: "You've cat to be kitten me! I meaw you ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ",
    x: 54,
    y: 65,
    description:
      "A keyhold based on the thing you love the most, your beautiful (and nearly morbidly obese) cat (⁠=⁠^⁠･⁠ｪ⁠･⁠^⁠=⁠)",
    icon: <CatKeychainIcon />,
  },
  {
    id: "cannelloni",
    title: "Cannelloni Lasagna",
    subtitle: "I canna🇮🇹-love you, you know?",
    x: 28,
    y: 72,
    description:
      "I wanted to make you your favorite dish for your birthday but you wanted an outside celebration, thats why I wanted to give you this on Sunday insted of today but anyway, you`ll get it I promise ",
    icon: <CanelonesIcon />,
  },
  {
    id: "picture",
    title: "A picture of me & you",
    subtitle: "You make my .png hard 🖼️",
    x: 10,
    y: 60,
    description:
      "You love taking pictures, I`m taking the bullet this time so you neet to give me credit for this <3",
    icon: <PaintingIcon />,
  },
  {
    id: "me",
    title: "Badass Boyfriend",
    subtitle: "The best you could get, trully sorry for you 🤭",
    x: 28,
    y: 43,
    description:
      "Handsome, smart, a strong, clean, nice body, v-lined jaw, all that you are missing by being with me, thank you",
    icon: <MeIcon />,
  },
];

