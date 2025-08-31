import imgGamepad from "../assets/img/g-92.png";
import imgKeyboard from "../assets/img/ak-900.png";
import imgMonitor from "../assets/img/g-27.png";
import imgChair from "../assets/img/s-chair.png";
import monthly1 from "../assets/img/monthly-sale1.png";
import monthly2 from "../assets/img/monthly-sale2.png";
import monthly3 from "../assets/img/monthly-sale3.png";
import monthly4 from "../assets/img/monthly-sale4.png";
import our1 from "../assets/img/our1.png";
import our2 from "../assets/img/our2.png";
import our3 from "../assets/img/our3.png";
import our4 from "../assets/img/our4.png";
import our5 from "../assets/img/our5.png";
import our6 from "../assets/img/our6.png";
import our7 from "../assets/img/our7.png";
import our8 from "../assets/img/our8.png";

export const flashSalesProducts = [
  {
    id: "p1",
    title: "HAVIT HV-G92 Gamepad",
    image: imgGamepad,
    price: 120,
    oldPrice: 160,
    discountPercent: 40,
    ratingCount: 88,
  },
  {
    id: "p2",
    title: "AK-900 Wired Keyboard",
    image: imgKeyboard,
    price: 960,
    oldPrice: 1160,
    discountPercent: 35,
    ratingCount: 75,
  },
  {
    id: "p3",
    title: "IPS LCD Gaming Monitor",
    image: imgMonitor,
    price: 370,
    oldPrice: 400,
    discountPercent: 30,
    ratingCount: 99,
  },
  {
    id: "p4",
    title: "S‑Series Comfort Chair",
    image: imgChair,
    price: 375,
    oldPrice: 400,
    discountPercent: 25,
    ratingCount: 99,
  },
];

export const bestSellingProducts = [
  {
    id: "m1",
    title: "The north coat",
    image: monthly1,
    price: 260,
    oldPrice: 360,
    ratingCount: 65,
  },
  {
    id: "m2",
    title: "Gucci duffle bag",
    image: monthly2,
    price: 960,
    oldPrice: 1160,
    ratingCount: 65,
  },
  {
    id: "m3",
    title: "RGB liquid CPU Cooler",
    image: monthly3,
    price: 160,
    oldPrice: 170,
    ratingCount: 65,
  },
  {
    id: "m4",
    title: "Small BookSelf",
    image: monthly4,
    price: 360,
    oldPrice: null,
    ratingCount: 65,
  },
];

export const exploreProducts = [
  {
    id: "e1",
    title: "Breed Dry Dog Food",
    image: our1,
    price: 100,
    ratingCount: 35,
  },
  {
    id: "e2",
    title: "CANON EOS DSLR Camera",
    image: our2,
    price: 360,
    ratingCount: 95,
  },
  {
    id: "e3",
    title: "ASUS FHD Gaming Laptop",
    image: our3,
    price: 700,
    ratingCount: 325,
  },
  {
    id: "e4",
    title: "Curology Product Set",
    image: our4,
    price: 500,
    ratingCount: 145,
  },
  {
    id: "e5",
    title: "Kids Electric Car",
    image: our5,
    price: 960,
    ratingCount: 65,
    isNew: true,
    colors: ["#DB4444", "#000000"],
  },
  {
    id: "e6",
    title: "Jr. Zoom Soccer Cleats",
    image: our6,
    price: 1160,
    ratingCount: 35,
    colors: ["#FDE047", "#DB4444"],
  },
  {
    id: "e7",
    title: "GP11 Shooter USB Gamepad",
    image: our7,
    price: 660,
    ratingCount: 55,
    isNew: true,
    colors: ["#000000", "#DB4444"],
  },
  {
    id: "e8",
    title: "Quilted Satin Jacket",
    image: our8,
    price: 660,
    ratingCount: 55,
    colors: ["#00FF66", "#DB4444"],
  },
];

export const justForYouProducts = [
  {
    id: "j1",
    title: "ASUS FHD Gaming Laptop",
    image: our3,
    price: 960,
    oldPrice: 1160,
    discountPercent: 35,
    ratingCount: 65,
  },
  {
    id: "j2",
    title: "IPS LCD Gaming Monitor",
    image: our6,
    price: 1160,
    oldPrice: null,
    ratingCount: 65,
  },
  {
    id: "j3",
    title: "HAVIT HV-G92 Gamepad",
    image: our7,
    price: 560,
    oldPrice: null,
    ratingCount: 65,
    isNew: true,
  },
  {
    id: "j4",
    title: "AK-900 Wired Keyboard",
    image: our8,
    price: 200,
    oldPrice: null,
    ratingCount: 65,
  },
];
