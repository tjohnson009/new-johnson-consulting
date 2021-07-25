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
        imageURL:
          "https://images.squarespace-cdn.com/content/v1/54c85373e4b059985165a906/1510162676581-DROXE26EZGKP3QZ2J727/Screen+Shot+2017-11-08+at+10.35.52+AM.png?format=750w",
        price: 65,
      },
      {
        id: 2,
        name: "Team Signature Report",
        imageURL:
          "https://resonatenw.com/wp-content/uploads/2017/02/Screen-Shot-2017-03-11-at-11.04.23-AM.png",
        price: 100, //This will start at a certain price and then increase linearly with the number of teammates. After 10 people it's a constant price
      },
      {
        id: 3,
        name: "Marriage Signature Report",
        imageURL:
          "https://images.squarespace-cdn.com/content/v1/54c85373e4b059985165a906/1510162679702-18MBGUACJ9SA27MZVU2X/image-asset.png?format=1000w",
        price: 75,
      },
      {
        id: 4,
        name: "Leaders Signature Report",
        imageURL:
          "https://images.squarespace-cdn.com/content/v1/54c85373e4b059985165a906/1510162677870-B3GL1O944667FQ39A127/Screen+Shot+2017-11-08+at+10.35.40+AM.png?format=1000w",
        price: 125,
      },
    ],
    coaching: [
      {
        id: 5,
        name: "Career Coaching Short Term",
        imageURL:
          "https://thewineingercompany.com/wp-content/uploads/2016/03/BIRKMAN_product-images.jpg",
        price: 50,
      },
      {
        id: 6,
        name: "Career Coaching Long Term",
        imageURL:
          "https://thewineingercompany.com/wp-content/uploads/2016/03/BIRKMAN_product-images.jpg",
        price: 125,
      },
      {
        id: 7,
        name: "Leadership Coaching Short Term",
        imageURL:
          "https://thewineingercompany.com/wp-content/uploads/2016/03/BIRKMAN_product-images.jpg",
        price: 50,
      },
      {
        id: 8,
        name: "Leadership Coaching Long Term",
        imageURL:
          "https://thewineingercompany.com/wp-content/uploads/2016/03/BIRKMAN_product-images.jpg",
        price: 125,
      },
      {
        id: 9,
        name: "Ministry Focus Coaching Short Term",
        imageURL:
          "https://thewineingercompany.com/wp-content/uploads/2016/03/BIRKMAN_product-images.jpg",
        price: 40,
      },
      {
        id: 10,
        name: "Ministry Focus Coaching Long Term",
        imageURL:
          "https://thewineingercompany.com/wp-content/uploads/2016/03/BIRKMAN_product-images.jpg",
        price: 100,
      },
    ],
  },
  {
    // SF Products
    id: 2,
    title: "StrengthsFinder Assessment",
    routeName: "tools/strengthsfinder",
    reports: [
      {
        id: 1,
        name: "Top 5 Strengths Report",
        imageURL:
          "https://high5test.com/wp-content/uploads/2021/04/5only-260x300.png",
        price: 50,
      },
      {
        id: 2,
        name: "Top 10 Strengths Report",
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/51M2iCZYfiL._SX360_BO1,204,203,200_.jpg",
        price: 75,
      },
      {
        id: 3,
        name: "Top 10, Bottom 5 Strengths Report",
        imageURL:
          "https://mrz223.files.wordpress.com/2013/10/core_clarity.jpg?w=990",
        price: 115,
      },
      {
        id: 4,
        name: "Full 34 Strengths Report",
        imageURL: "https://i.ytimg.com/vi/ID_fdLLnbnU/maxresdefault.jpg",
        price: 125,
      },
    ],
    coaching: [
      {
        id: 5,
        name: "Strength Coaching Short Term",
        imageURL: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 50,
      },
      {
        id: 6,
        name: "Strength Coaching Long Term",
        imageURL: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
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
        imageURL: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 50,
      },
      {
        id: 2,
        name: "DISC Team Assessment",
        imageURL: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 75,
      },
    ],
    coaching: [
      {
        id: 3,
        name: "DISC Coaching Short Term",
        imageURL: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 115,
      },
      {
        id: 4,
        name: "DISC COaching Long Term",
        imageURL: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 125,
      },
    ],
  },
  // {
  //   // maybe add some random things people can buy to support JC
  // },
];

export default PRODUCT_DATA; 