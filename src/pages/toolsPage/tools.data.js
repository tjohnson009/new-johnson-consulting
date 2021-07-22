const PRODUCT_DATA = [
  {
    // Birkman Products
    id: 1,
    title: "Birkman Assessment",
    routeName: "tools/birkman",
    reports: [
      {
        id: 1,
        name: "Individual Signature Report",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 65,
      },
      {
        id: 2,
        name: "Team Signature Report",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 100, //This will start at a certain price and then increase linearly with the number of teammates. After 10 people it's a constant price
      },
      {
        id: 3,
        name: "Marriage Signature Report",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 75,
      },
      {
        id: 4,
        name: "Leaders Signature Report",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 125,
      },
    ],
    coaching: [
      {
        id: 5,
        name: "Career Coaching Short Term",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 50,
      },
      {
        id: 6,
        name: "Career Coaching Long Term",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 125,
      },
      {
        id: 7,
        name: "Leadership Coaching Short Term",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 50,
      },
      {
        id: 8,
        name: "Leadership Coaching Long Term",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 125,
      },
      {
        id: 9,
        name: "Ministry Focus Coaching Short Term",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 40,
      },
      {
        id: 10,
        name: "Ministry Focus Coaching Long Term",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 100,
      },
    ],
  },
  {
    // SF Products
    id: 2,
    title: "StrengthFinders Assessment",
    routeName: "tools/strengthfinders",
    reports: [
      {
        id: 1,
        name: "Top 5 Strengths Report",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 50,
      },
      {
        id: 2,
        name: "Top 10 Strengths Report",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 75,
      },
      {
        id: 3,
        name: "Top 10, Bottom 5 Strengths Report",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 115,
      },
      {
        id: 4,
        name: "Full 34 Strengths Report",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 125,
      },
    ],
    coaching: [
      {
        id: 5,
        name: "Strength Coaching Short Term",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 50,
      },
      {
        id: 6,
        name: "Strength Coaching Long Term",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 125,
      },
    ],
  },
  {
    //DISC Products
    id: 3,
    title: "DISC Assessment",
    routeName: "tools/disc",
    reports: [
      {
        id: 1,
        name: "DISC Individual Assessment",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 50,
      },
      {
        id: 2,
        name: "DISC Team Assessment",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 75,
      },
    ],
    coaching: [
      {
        id: 3,
        name: "DISC Coaching Short Term",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 115,
      },
      {
        id: 4,
        name: "DISC COaching Long Term",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 125,
      },
    ],
  },
  // {
  //   // maybe add some random things people can buy to support JC
  // },
];

export default PRODUCT_DATA; 