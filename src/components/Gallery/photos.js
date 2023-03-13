import p1 from "./photos/picture-1.jpg";
import p2 from "./photos/picture-2.jpg";
import p3 from "./photos/picture-3.jpg";
import p4 from "./photos/picture-4.jpg";
import p5 from "./photos/picture-5.jpg";
import p6 from "./photos/picture-6.jpg";
import p7 from "./photos/picture-7.jpg";
import p8 from "./photos/picture-8.jpg";
import p9 from "./photos/picture-9.jpg";
import p10 from "./photos/picture-10.jpg";
import p11 from "./photos/picture-11.jpg";
import p12 from "./photos/picture-12.jpg";
import p13 from "./photos/picture-13.jpg";

export const rows = [
  {
    pictures: [
      { picture: p1 },
      { picture: p2, hide: "medium" },
      { picture: p3, hide: "small" },
      { picture: p4 },
    ],
  },
  {
    pictures: [
      { picture: p5 },
      { picture: p6, hide: "small" },
      { picture: p7, hide: "medium" },
      { picture: p8 },
      { picture: p9 },
    ],
    smallGap: true,
  },
  {
    pictures: [
      { picture: p10 },
      { picture: p11 },
      { picture: p12, hide: "small" },
      { picture: p13, hide: "medium" },
    ],
    smallGap: true,
  },
];
