const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const products = [
  {
    id: 1,
    name: "tablet",
    image: "../assets/Image/tech/image 33.png",

    images: [
      "../assets/Image/tech/image 33.png",
      "../assets/Image/tech/image 33.png",
      "../assets/Image/tech/image 33.png",
      "../assets/Image/tech/image 33.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 2,
    name: "OnePlus",
    image: "../assets/Image/tech/image 23.png",

    images: [
      "../assets/Image/tech/image 23.png",
      "../assets/Image/tech/image 23.png",
      "../assets/Image/tech/image 23.png",
      "../assets/Image/tech/image 23.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 3,
    name: "tablet",
    image: "../assets/Image/tech/image 32.png",

    images: [
      "../assets/Image/tech/image 32.png",
      "../assets/Image/tech/image 32.png",
      "../assets/Image/tech/image 32.png",
      "../assets/Image/tech/image 32.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 4,
    name: "Laptop",
    image: "../assets/Image/tech/image 34.png",

    images: [
      "../assets/Image/tech/image 34.png",
      "../assets/Image/tech/image 34.png",
      "../assets/Image/tech/image 34.png",
      "../assets/Image/tech/image 34.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 5,
    name: "Smart watch",
    image: "../assets/Image/tech/8.png",

    images: [
      "../assets/Image/tech/8.png",
      "../assets/Image/tech/8.png",
      "../assets/Image/tech/8.png",
      "../assets/Image/tech/8.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 6,
    name: "Headphone",
    image: "../assets/Image/tech/image 86.png",

    images: [
      "../assets/Image/tech/image 86.png",
      "../assets/Image/tech/image 86.png",
      "../assets/Image/tech/image 86.png",
      "../assets/Image/tech/image 86.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 7,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    image: "../assets/Image/tech/6.png",

    images: [
      "../assets/Image/tech/6.png",
      "../assets/Image/tech/6.png",
      "../assets/Image/tech/6.png",
      "../assets/Image/tech/6.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 8,
    name: "Headset",
    image: "../assets/Image/tech/image 29.png",

    images: [
      "../assets/Image/tech/image 29.png",
      "../assets/Image/tech/image 29.png",
      "../assets/Image/tech/image 29.png",
      "../assets/Image/tech/image 29.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 9,
    name: "Blazer",
    image: "../assets/Layout/alibaba/Image/cloth/image 30.png",

    images: [
      "../assets/Layout/alibaba/Image/cloth/image 30.png",
      "../assets/Layout/alibaba/Image/cloth/image 30.png",
      "../assets/Layout/alibaba/Image/cloth/image 30.png",
      "../assets/Layout/alibaba/Image/cloth/image 30.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 10,
    name: "Jacket",
    image: "../assets/Layout/alibaba/Image/cloth/2 1.png",

    images: [
      "../assets/Layout/alibaba/Image/cloth/2 1.png",
      "../assets/Layout/alibaba/Image/cloth/2 1.png",
      "../assets/Layout/alibaba/Image/cloth/2 1.png",
      "../assets/Layout/alibaba/Image/cloth/2 1.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 11,
    name: "Pants",
    image: "../assets/Layout/alibaba/Image/cloth/Bitmap (2).png",

    images: [
      "../assets/Layout/alibaba/Image/cloth/Bitmap (2).png",
      "../assets/Layout/alibaba/Image/cloth/Bitmap (2).png",
      "../assets/Layout/alibaba/Image/cloth/Bitmap (2).png",
      "../assets/Layout/alibaba/Image/cloth/Bitmap (2).png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 12,
    name: "T-shirt",
    image: "../assets/Layout/alibaba/Image/cloth/Bitmap.png",

    images: [
      "../assets/Layout/alibaba/Image/cloth/Bitmap.png",
      "../assets/Layout/alibaba/Image/cloth/Bitmap.png",
      "../assets/Layout/alibaba/Image/cloth/Bitmap.png",
      "../assets/Layout/alibaba/Image/cloth/Bitmap.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 13,
    name: "Wallet",
    image: "../assets/Layout/alibaba/Image/cloth/image 24.png",

    images: [
      "../assets/Layout/alibaba/Image/cloth/image 24.png",
      "../assets/Layout/alibaba/Image/cloth/image 24.png",
      "../assets/Layout/alibaba/Image/cloth/image 24.png",
      "../assets/Layout/alibaba/Image/cloth/image 24.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 14,
    name: "Bag",
    image: "../assets/Layout/alibaba/Image/cloth/image 26.png",

    images: [
      "../assets/Layout/alibaba/Image/cloth/image 26.png",
      "../assets/Layout/alibaba/Image/cloth/image 26.png",
      "../assets/Layout/alibaba/Image/cloth/image 26.png",
      "../assets/Layout/alibaba/Image/cloth/image 26.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 15,
    name: "Sofa",
    image: "../assets/Image/interior/1.png",

    images: [
      "../assets/Image/interior/1.png",
      "../assets/Image/interior/1.png",
      "../assets/Image/interior/1.png",
      "../assets/Image/interior/1.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 16,
    name: "Lamp",
    image: "../assets/Image/interior/6.png",

    images: [
      "../assets/Image/interior/6.png",
      "../assets/Image/interior/6.png",
      "../assets/Image/interior/6.png",
      "../assets/Image/interior/6.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 17,
    name: "Pot",
    image: "../assets/Image/interior/3.png",

    images: [
      "../assets/Image/interior/3.png",
      "../assets/Image/interior/3.png",
      "../assets/Image/interior/3.png",
      "../assets/Image/interior/3.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 18,
    name: "Chair",
    image: "../assets/Image/interior/7.png",

    images: [
      "../assets/Image/interior/7.png",
      "../assets/Image/interior/7.png",
      "../assets/Image/interior/7.png",
      "../assets/Image/interior/7.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },

  {
    id: 19,
    name: "Plant",
    image: "../assets/Image/interior/image-89.png",

    images: [
      "../assets/Image/interior/image-89.png",
      "../assets/Image/interior/image-89.png",
      "../assets/Image/interior/image-89.png",
      "../assets/Image/interior/image-89.png"
    ],

    rating: 9.3,
    reviews: 32,
    sold: 154,

    prices: [
      { price: "$98.00", qty: "50-100 pcs" },
      { price: "$90.00", qty: "100-700 pcs" },
      { price: "$78.00", qty: "700+ pcs" }
    ],

    details: {
      price: "Negotiable",
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    }
  },
];


const product = products.find(p => p.id == id);

if (product) {

  // ===== TITLE =====
  document.querySelector(".product-title").textContent = product.name;

  // ===== MAIN IMAGE =====
  document.getElementById("mainImage").src = product.image;

  // ===== THUMBNAILS =====
  const thumbs = document.querySelector(".thumbs");
  thumbs.innerHTML = "";

  product.images.forEach(img => {
    thumbs.innerHTML += `<img src="${img}">`;
  });

  // ===== RATING =====
  document.querySelector(".rating-row").innerHTML = `
    <span class="stars">
      <span class="filled">★★★★</span><span class="empty">★</span>
    </span>
    <span class="rating">${product.rating}</span>
    <span class="dot">•</span>
    <span>${product.reviews} reviews</span>
    <span class="dot">•</span>
    <span>${product.sold} sold</span>
  `;

  // ===== PRICE BOX =====
  document.querySelector(".price-box").innerHTML =
    product.prices.map(p => `
      <div>
        <b>${p.price}</b>
        <span>${p.qty}</span>
      </div>
    `).join("");

  // ===== DETAILS =====
  document.querySelector(".product-meta").innerHTML = `
    <p><b>Price:</b> ${product.details.price}</p>
    <p><b>Type:</b> ${product.details.type}</p>
    <p><b>Material:</b> ${product.details.material}</p>
    <p><b>Design:</b> ${product.details.design}</p>
    <p><b>Customization:</b> ${product.details.customization}</p>
    <p><b>Protection:</b> ${product.details.protection}</p>
    <p><b>Warranty:</b> ${product.details.warranty}</p>
  `;
}

// ===== THUMB CLICK =====
document.addEventListener("click", function(e) {
  if (e.target.closest(".thumbs img")) {
    document.getElementById("mainImage").src = e.target.src;
  }
});