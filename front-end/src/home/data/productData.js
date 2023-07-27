// import {} from '../../../public/assets/images'

const products = [
   {
      name: "Jordan Delta 3 Mid",
      type: "jd3",
      id: "jd3-black",
      color: "black",
      price: 400,
      img: "jordan_delta_3_black.png",
      desc: "Inspired by '90s on-court gear and the Space-Age aesthetic, the Delta 3 is ready to launch. With super-lightweight technical materials, they have a retro-futuristic look and feel. This is the next-gen footwear that's gonna take you into tomorrow",
   },

   {
      name: "Jordan Delta 3 Mid",
      type: "jd3",
      id: "jd3-khaki",
      color: "khaki",
      price: 400,
      img: "jordan_delta_3_khaki.png",
      desc: "Inspired by '90s on-court gear and the Space-Age aesthetic, the Delta 3 is ready to launch. With super-lightweight technical materials, they have a retro-futuristic look and feel. This is the next-gen footwear that's gonna take you into tomorrow",
   },

   {
      name: "Air Jordan 1",
      type: "jd1",
      id: "jd1-white",
      color: "white",
      price: 199,
      img: "jordan_1_black_white.png",
      desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
   },

   {
      name: "Air Jordan 1",
      type: "jd1",
      id: "jd1-yellow",
      color: "yellow",
      price: 99,
      img: "jordan_1_yellow.png",
      desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
   },

   {
      name: "Air Jordan 1",
      type: "jd1",
      id: "jd1-orange",
      color: "orange",
      price: 89,
      img: "jordan_1_orange.png",
      desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
   },

   {
      name: "Air Jordan 1",
      type: "jd1",
      id: "jd1-violet",
      color: "violet",
      price: 189,
      img: "jordan_1_violet.png",
      desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
   },

   {
      name: "Nike Air Max 270",
      type: "AirMax",
      id: "AM270-white-black",
      color: "white-black",
      price: 399,
      img: "nike_airmax_270_white_black.png",
      desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
   },

   {
      name: "Nike Air Max 270",
      type: "AirMax",
      id: "AM270-white",
      color: "white",
      price: 399,
      img: "nike_airmax_270_white.png",
      desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
   },

   {
      name: "Nike Air Max 270",
      type: "AirMax",
      id: "AM270-black",
      color: "black",
      price: 419,
      img: "nike_airmax_270_black.png",
      desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
   },
];

const sortOptions = [
   { name: "Most Popular", href: "#", current: true },
   { name: "Best Rating", href: "#", current: false },
   { name: "Newest", href: "#", current: false },
   { name: "Price: Low to High", href: "#", current: false },
   { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
   { name: "Totes", href: "#" },
   { name: "Backpacks", href: "#" },
   { name: "Travel Bags", href: "#" },
   { name: "Hip Bags", href: "#" },
   { name: "Laptop Sleeves", href: "#" },
];
const filters = [
   {
      id: "color",
      name: "Color",
      options: [
         { value: "white", label: "White", checked: false },
         { value: "beige", label: "Beige", checked: false },
         { value: "blue", label: "Blue", checked: true },
         { value: "brown", label: "Brown", checked: false },
         { value: "green", label: "Green", checked: false },
         { value: "purple", label: "Purple", checked: false },
      ],
   },
   {
      id: "category",
      name: "Category",
      options: [
         { value: "new-arrivals", label: "New Arrivals", checked: false },
         { value: "sale", label: "Sale", checked: false },
         { value: "travel", label: "Travel", checked: true },
         { value: "organization", label: "Organization", checked: false },
         { value: "accessories", label: "Accessories", checked: false },
      ],
   },
   {
      id: "size",
      name: "Size",
      options: [
         { value: "37", label: "37", checked: false },
         { value: "38", label: "38", checked: false },
         { value: "39", label: "39", checked: false },
         { value: "40", label: "40", checked: false },
         { value: "41", label: "41", checked: false },
         { value: "42", label: "42", checked: true },
      ],
   },
];

export { products, subCategories, sortOptions, filters };
