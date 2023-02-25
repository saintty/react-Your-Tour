import p1 from "./pictures/picture-1.jpg";
import p2 from "./pictures/picture-2.jpg";
import p3 from "./pictures/picture-3.jpg";
import p4 from "./pictures/picture-4.jpg";
import p5 from "./pictures/picture-5.jpg";
import p6 from "./pictures/picture-6.jpg";
import p7 from "./pictures/picture-7.jpg";
import p8 from "./pictures/picture-8.jpg";
import p9 from "./pictures/picture-9.jpg";
import p10 from "./pictures/picture-10.jpg";
import p11 from "./pictures/picture-11.jpg";
import p12 from "./pictures/picture-12.jpg";
import p13 from "./pictures/picture-13.jpg";

export const rows = [
  {
    pictures: [
      { picture: p1 },
      { picture: p2, isMediumHidden: true },
      { picture: p3, isSmallHidden: true },
      { picture: p4 },
    ],
  },
  {
    pictures: [
      { picture: p5 },
      { picture: p6, isSmallHidden: true },
      { picture: p7, isMediumHidden: true },
      { picture: p8 },
      { picture: p9 },
    ],
    smallGap: true,
  },
  {
    pictures: [
      { picture: p10 },
      { picture: p11 },
      { picture: p12, isSmallHidden: true },
      { picture: p13, isMediumHidden: true },
    ],
    smallGap: true,
  },
];
