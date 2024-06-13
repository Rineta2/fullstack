import home from "../assets/home/home.jpg";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "About",
    path: "#about",
  },

  {
    id: 3,
    name: "Services",
    path: "#services",
  },

  {
    id: 4,
    name: "Product",
    path: "#product",
  },

  {
    id: 5,
    name: "Contact",
    path: "#contact",
  },
];

export const homeData = [
  {
    id: 1,
    title: "Ruang untuk kerja, ruang untuk main",
    text: "Lengkapi ruang kerja dengan aksesoris yang menarik.",
    name: "Selengkapnya",
    path: "#product",
  },
];

export const homeImg = [
  {
    id: 1,
    img: home,
  },
];
