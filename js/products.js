// products.js - Product data structure
const PRODUCTS = {
  womens_tops: [
    {
      id: 1,
      name: "Dreamy Horizons",
      price: 42.00,
      category: "TEES",
      image: "img/product/shirt/Shirt10.jpg",
      description: "Soft cotton tee with layered landscape design in pastel blues and sunshine yellow. Wearable art meets everyday comfort."
    },
    {
      id: 2,
      name: "Rockabilly",
      price: 21.15,
      category: "BUTTON UP TEE",
      image: "img/product/shirt/Shirt11.jpg",
      description: "Classic button-up with retro vibes and modern comfort."
    },
    {
      id: 3,
      name: "Shape Shifter",
      price: 48.00,
      category: "TOPS",
      image: "img/product/shirt/Shirt12.jpg",
      description: "Classic Memphis design with organic shapes in coral, navy, and mint. Abstract art meets everyday wearability."
    },
    {
      id: 4,
      name: "Tropical State of Mind",
      price: 38.00,
      category: "TEES",
      image: "img/product/shirt/Shirt21.jpg",
      description: "Palm leaf graphics on crisp white cotton with golden sun backdrop. Vacation vibes for any day of the week."
    },
    {
      id: 5,
      name: "Color Block Dreams",
      price: 89.00,
      category: "KNITWEAR",
      image: "img/product/shirt/Shirt5.png",
      description: "Bold color-blocked knit sweater with painterly brushstrokes in electric blue, coral pink, and sunshine yellow."
    },
  {
    "id": 6,
    "name": "Confetti Celebration",
    "price": 65.00,
    "category": "BLOUSES",
    "image": "img/product/shirt/Shirt6.png",
    "description": "Playful button-up featuring organic shapes and golden polka dots on cream base. A modern take on abstract expressionism you can wear."
  },
  {
    "id": 7,
    "name": "Sunset Blocks",
    "price": 58.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt7.jpg",
    "description": "Vibrant geometric color blocking in emerald, coral, and sky blue. Bold stripes meet modern art in this statement piece."
  },
  {
    "id": 8,
    "name": "Memphis Mayhem",
    "price": 45.00,
    "category": "TEES",
    "image": "img/product/shirt/Shirt26.jpg",
    "description": "Pure 80s Memphis magic with squiggles, dots, and geometric shapes in primary colors. Retro-futurism at its finest."
  },
  {
    "id": 9,
    "name": "Midnight Garden",
    "price": 72.00,
    "category": "BLOUSES",
    "image": "img/product/shirt/Shirt32.png",
    "description": "Sophisticated button-up with abstract florals and brushstrokes on black canvas. Dark romanticism meets modern art."
  },
  {
    "id": 10,
    "name": "Retro Future Crop",
    "price": 68.00,
    "category": "SWEATSHIRTS",
    "image": "img/product/shirt/Shirt34.jpg",
    "description": "Cropped sweatshirt featuring classic Memphis patterns - stripes, dots, and geometric chaos. 80s energy for modern rebels."
  }

  ],
  
  dresses: [
  {
    "id": 11,
    "name": "Market Day Midi",
    "price": 78.00,
    "category": "DRESSES",
    "image": "img/product/dress/Dress1.jpg",
    "description": "Strapless midi dress with abstract blob print in coral and navy on soft pink canvas. Perfect for farmers market strolls and weekend adventures."
  },
  {
    "id": 12,
    "name": "Eclipse Elegance",
    "price": 95.00,
    "category": "DRESSES",
    "image": "img/product/dress/Dress2.jpg",
    "description": "Sophisticated sleeveless dress featuring bold geometric color blocking with white circle motif and sunshine yellow hem. Modern minimalism meets Memphis style."
  },
  {
    "id": 13,
    "name": "Tropical Halter Jumpsuit",
    "price": 88.00,
    "category": "JUMPSUITS",
    "image": "img/product/dress/Dress3.png",
    "description": "Vibrant halter jumpsuit with abstract leaf print in sunset colors. Belted waist and flowing silhouette for effortless vacation vibes."
  },
  {
    "id": 14,
    "name": "Santorini Sunset",
    "price": 85.00,
    "category": "MAXI DRESSES",
    "image": "img/product/dress/Dress4.jpg",
    "description": "Strapless maxi dress with bold color blocks in coral and cobalt blue. Mediterranean-inspired design perfect for seaside evenings."
  },
  {
    "id": 15,
    "name": "Memphis Mondrian Mini",
    "price": 65.00,
    "category": "MINI DRESSES",
    "image": "img/product/dress/Dress5.jpg",
    "description": "Short sleeve mini dress covered in authentic Memphis patterns - grids, dots, and geometric shapes in primary colors. Pure 80s architectural energy."
  },
  {
    "id": 16,
    "name": "Pattern Play Tiered",
    "price": 92.00,
    "category": "MIDI DRESSES",
    "image": "img/product/dress/skirt.jpg",
    "description": "Sleeveless tiered midi dress in electric blue with abstract pattern mix including animal prints and geometric shapes. Playful maximalism at its finest."
  },
  {
    "id": 17,
    "name": "Abstract Garden Maxi",
    "price": 110.00,
    "category": "MAXI DRESSES",
    "image": "img/product/dress/Dress7.png",
    "description": "Flowing spaghetti strap maxi dress with bold abstract floral print in turquoise, coral, and navy. Artistic expression meets bohemian elegance."
  },
  {
    "id": 18,
    "name": "Neon Nights Mini",
    "price": 72.00,
    "category": "MINI DRESSES",
    "image": "img/product/dress/Dress8.jpg",
    "description": "Long-sleeve mini dress with electric Memphis pattern in neon brights and geometric shapes. Bold turtleneck design for the fearlessly fashionable."
  }
],
  
  pants: [
  {
    "id": 19,
    "name": "Primary Pop Shorts",
    "price": 68.00,
    "category": "SHORTS",
    "image": "img/product/pants/Pants1.jpg",
    "description": "High-waisted denim shorts with bold color-blocked panels in red, blue, yellow, and green. Classic meets contemporary in this playful Memphis-inspired design."
  },
  {
    "id": 20,
    "name": "Geometric Glitch Set",
    "price": 145.00,
    "category": "SETS",
    "image": "img/product/pants/Pants2.jpg",
    "description": "Two-piece set featuring abstract geometric patterns in neon brights. Sleeveless top and matching high-waisted pants for the ultimate statement look."
  },
  {
    "id": 21,
    "name": "Pattern Mix Madness",
    "price": 58.00,
    "category": "SHORTS",
    "image": "img/product/pants/Pants3.jpg",
    "description": "Collection of color-blocked shorts featuring stripes, solids, and mixed patterns. Each pair is a unique work of wearable art in bright Memphis colors."
  },
  {
    "id": 22,
    "name": "Street Art Trousers",
    "price": 95.00,
    "category": "PANTS",
    "image": "img/product/pants/Pants4.jpg",
    "description": "Straight-leg pants covered in graffiti-inspired Memphis patterns with checkered details. Urban edge meets 80s design rebellion."
  },
  {
    "id": 23,
    "name": "Dalmatian Dreams",
    "price": 52.00,
    "category": "SHORTS",
    "image": "img/product/pants/Pants5.jpg",
    "description": "High-waisted denim shorts with playful black and white cow print detailing. A fun twist on the classic animal print trend."
  },
  {
    "id": 24,
    "name": "Stripe & Block Fusion",
    "price": 65.00,
    "category": "SHORTS",
    "image": "img/product/pants/Pants6.jpg",
    "description": "Color-blocked denim shorts combining solid panels with bold blue and white stripes. Perfect balance of pattern and color for summer adventures."
  },
  {
    "id": 25,
    "name": "Digital Pop Jeans",
    "price": 78.00,
    "category": "JEANS",
    "image": "img/product/pants/Pants7.jpg",
    "description": "Relaxed-fit jeans featuring abstract digital-inspired prints in electric blues and bright accents. Comfort meets contemporary art."
  },
  {
    "id": 26,
    "name": "Shape Shuffle Shorts",
    "price": 48.00,
    "category": "SHORTS",
    "image": "img/product/pants/Pants8.jpg",
    "description": "Memphis-inspired shorts with scattered geometric shapes and organic forms on dark background. Abstract minimalism for the bold dresser."
  },
  {
    "id": 27,
    "name": "Color Patch Vintage",
    "price": 72.00,
    "category": "SHORTS",
    "image": "img/product/pants/Pants12.jpg",
    "description": "High-waisted vintage-wash denim shorts with colorful geometric pocket details in orange, green, and red. Retro meets modern patchwork style."
  },
  {
    "id": 28,
    "name": "Abstract Swim Shorts",
    "price": 45.00,
    "category": "SWIM SHORTS",
    "image": "img/product/pants/Pants14.jpg",
    "description": "Quick-dry swim shorts with bold abstract print featuring organic shapes and Memphis-style color blocking. Pool party ready with artistic flair."
  }
],
  
  accessories: [
  {
    "id": 29,
    "name": "Retro Vibes Sunglasses Set",
    "price": 45.00,
    "category": "SUNGLASSES",
    "image": "img/product/accessories/accessories1.jpg",
    "description": "Three-piece sunglasses collection featuring yellow mirrored aviators, tortoiseshell rounds, and rose gold classics. Complete your vintage-inspired look with these timeless frames."
  },
  {
    "id": 30,
    "name": "Memphis Shape Earrings",
    "price": 28.00,
    "category": "EARRINGS",
    "image": "img/product/accessories/accessories2.jpg",
    "description": "Playful acrylic earrings featuring abstract shapes in primary Memphis colors. Lightweight dangles perfect for adding a pop of 80s-inspired geometric fun to any outfit."
  },
  {
    "id": 31,
    "name": "Coral Stripe Statement Shades",
    "price": 52.00,
    "category": "SUNGLASSES",
    "image": "img/product/accessories/accessories3.jpg",
    "description": "Bold coral frames with black and white striped temple details. Oversized square lenses with gradient tint for maximum UV protection and style impact."
  },
  {
    "id": 32,
    "name": "Geometric Mix Earring Set",
    "price": 35.00,
    "category": "EARRINGS",
    "image": "img/product/accessories/accessories4.jpg",
    "description": "Colorful acrylic earring collection featuring circles, squares, and abstract shapes in Memphis-inspired color combinations. Mix and match for endless styling possibilities."
  },
  {
    "id": 33,
    "name": "Color Block Statement Drops",
    "price": 42.00,
    "category": "EARRINGS",
    "image": "img/product/accessories/accessories5.jpg",
    "description": "Oversized acrylic earrings with orange rectangles, mint circles, and navy arch details. Bold architectural jewelry that makes every outfit a statement piece."
  },
  {
    "id": 34,
    "name": "Pattern Puzzle Sunglasses",
    "price": 65.00,
    "category": "SUNGLASSES",
    "image": "img/product/accessories/accessories6.jpg",
    "description": "Unique round frames in soft pink with geometric pattern temples and blue accent details. Handcrafted design that's part art piece, part eyewear."
  },
  {
    "id": 35,
    "name": "Memphis Mondrian Shades",
    "price": 58.00,
    "category": "SUNGLASSES",
    "image": "img/product/accessories/accessories7.jpg",
    "description": "Round yellow frames with polka dot temples and geometric color blocking. A tribute to both Memphis design and Mondrian's color theory in wearable form."
  },
  {
    "id": 36,
    "name": "Pop Art Timepiece",
    "price": 125.00,
    "category": "WATCHES",
    "image": "img/product/accessories/accessories8.jpg",
    "description": "Statement watch with Memphis-inspired face design and coral leather strap. Bold rectangular case with artistic dial featuring geometric patterns and bright colors."
  },
  {
    "id": 37,
    "name": "Checkered Rebel Sneakers",
    "price": 85.00,
    "category": "SHOES",
    "image": "img/product/accessories/accessories9.jpg",
    "description": "Low-top canvas sneakers with black and white checkered pattern, neon yellow stripe, and hot pink heel details. Street art meets classic skate shoe design."
  },
  {
    "id": 38,
    "name": "Neon Rain Boots",
    "price": 48.00,
    "category": "SHOES",
    "image": "img/product/accessories/accessories10.jpg",
    "description": "Transparent rain boots with coral and mint color blocking. Waterproof design with cotton candy laces and matching striped socks for puddle-jumping in style."
  },
  {
    "id": 39,
    "name": "Color Block Architect Frames",
    "price": 68.00,
    "category": "SUNGLASSES",
    "image": "img/product/accessories/accessories11.jpg",
    "description": "Oversized square frames in powder blue with yellow accent band and geometric temple details. Architectural eyewear inspired by Memphis design movement."
  },
  {
    "id": 40,
    "name": "Lightning Bolt Dangles",
    "price": 32.00,
    "category": "EARRINGS",
    "image": "img/product/accessories/accessories12.jpg",
    "description": "Dynamic acrylic earrings featuring white zigzag lightning bolts with teal and purple geometric elements. Electric energy captured in wearable Memphis-style art."
  },
  {
    "id": 41,
    "name": "Holographic Triangle Hoops",
    "price": 38.00,
    "category": "EARRINGS",
    "image": "img/product/accessories/accessories13.jpg",
    "description": "Clear acrylic triangle earrings with holographic Memphis squiggles and colorful dots. Futuristic design meets 80s nostalgia in these eye-catching statement hoops."
  }
],
  
  mens: [
  {
    "id": 42,
    "name": "Crystal Kaleidoscope Button-Up",
    "price": 68.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt1.jpg",
    "description": "Short-sleeve button-up featuring abstract geometric crystals in coral, pink, and mint. Angular Memphis design that catches light and attention wherever you go."
  },
  {
    "id": 43,
    "name": "Pop Culture Patchwork",
    "price": 85.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt2.jpg",
    "description": "Maximalist short-sleeve shirt with collage-style print mixing geometric patterns, pop art elements, and vibrant color blocks. Street art meets high fashion."
  },
  {
    "id": 44,
    "name": "Memphis Geometry Vacation Shirt",
    "price": 58.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt3.jpg",
    "description": "Classic camp collar shirt in hot pink with scattered Memphis shapes, dots, and geometric elements. Perfect for pool parties and weekend adventures."
  },
  {
    "id": 45,
    "name": "Retro Surf Club Button-Up",
    "price": 75.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt8.jpg",
    "description": "Oversized button-up with striped collar and abstract wave patterns in primary colors. Vintage 80s surf culture meets Memphis design movement."
  },
  {
    "id": 46,
    "name": "Bauhaus Block Party Shirt",
    "price": 72.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt9.jpg",
    "description": "Short-sleeve shirt featuring interlocking geometric blocks in forest green, cream, and orange. Architectural design inspired by Bauhaus and Memphis styles."
  },
  {
    "id": 47,
    "name": "Abstract Fragments Button-Up",
    "price": 65.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt14.jpg",
    "description": "Relaxed-fit shirt with scattered coral geometric fragments on black canvas. Modern art meets casual wear in this effortlessly cool design."
  },
  {
    "id": 48,
    "name": "Memphis Confetti Classic",
    "price": 62.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt17.jpg",
    "description": "White button-up covered in colorful Memphis confetti - dots, triangles, and squiggles in primary colors. Pure 80s celebration in shirt form."
  },
  {
    "id": 49,
    "name": "Color Splash Camp Shirt",
    "price": 78.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt19.jpg",
    "description": "Camp collar shirt with fluid color blocking in coral, mint, and sky blue. Abstract paint splash design perfect for creative souls and summer vibes."
  },
  {
    "id": 50,
    "name": "Patchwork Puzzle Button-Up",
    "price": 88.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt22.jpg",
    "description": "Artistic short-sleeve shirt with patchwork color blocking in dusty pink, mustard, navy, and cream. Each panel tells part of the Memphis story."
  },
  {
    "id": 51,
    "name": "Postmodern Pattern Mix",
    "price": 92.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt23.jpg",
    "description": "Black shirt featuring the ultimate Memphis pattern explosion - circles, grids, stripes, and geometric chaos in turquoise, yellow, and pink accents."
  },
  {
    "id": 52,
    "name": "Sprinkles & Shapes Party Shirt",
    "price": 55.00,
    "category": "SHIRTS",
    "image": "img/product/shirt/Shirt30.jpg",
    "description": "Black and white sprinkle pattern base with scattered primary color shapes. Playful design that brings joy to any occasion or everyday wear."
  }
]
};

// Product renderer class
class ProductRenderer {
  constructor() {
    this.initializeProducts();
  }

  initializeProducts() {
    // Clear existing product sections and rebuild from JSON
    this.renderSection('womens_tops', PRODUCTS.womens_tops, 'WOMEN\'S TOPS');
    this.renderSection('dresses_container', PRODUCTS.dresses, 'DRESSES');
    this.renderSection('pants_container', PRODUCTS.pants, 'PANTS & SHORTS');
    this.renderSection('accessories_container', PRODUCTS.accessories, 'ACCESSORIES');
    this.renderSection('mens_container', PRODUCTS.mens, 'MEN\'S SHORT SLEEVES');
  }

  renderSection(sectionId, products, title) {
    const $container = $(`#${sectionId}`);
    if (!$container.length) {
      console.warn(`Section container #${sectionId} not found`);
      return;
    }

    // Clear existing products (keep any non-product elements like "Load more" sections)
    $container.find('.lg\\:w-1\\/4').remove();

    // Generate product HTML
    const productsHtml = products.map(product => this.generateProductHtml(product)).join('');
    
    // Find any "Load more" section and insert before it, otherwise append
    const $loadMore = $container.find('section');
    if ($loadMore.length) {
      $loadMore.before(productsHtml);
    } else {
      $container.append(productsHtml);
    }
  }

  generateProductHtml(product) {
    return `
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden product-item cursor-pointer" 
           data-product='${JSON.stringify(product)}'>
          <img alt="ecommerce" 
               class="object-cover object-center w-full h-full block" 
               src="${product.image}">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">${product.name}</h2>
          <p class="mt-1">$${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
  }

  // Method to add new product
  addProduct(section, product) {
    PRODUCTS[section].push(product);
    this.renderSection(section.replace('_', ''), PRODUCTS[section], this.getSectionTitle(section));
  }

  // Method to update product
  updateProduct(section, productId, updates) {
    const productIndex = PRODUCTS[section].findIndex(p => p.id === productId);
    if (productIndex !== -1) {
      PRODUCTS[section][productIndex] = { ...PRODUCTS[section][productIndex], ...updates };
      this.renderSection(section.replace('_', ''), PRODUCTS[section], this.getSectionTitle(section));
    }
  }

  // Method to remove product
  removeProduct(section, productId) {
    PRODUCTS[section] = PRODUCTS[section].filter(p => p.id !== productId);
    this.renderSection(section.replace('_', ''), PRODUCTS[section], this.getSectionTitle(section));
  }

  getSectionTitle(section) {
    const titles = {
      'womens_tops': 'WOMEN\'S TOPS',
      'dresses': 'DRESSES',
      'pants': 'PANTS & SHORTS',
      'accessories': 'ACCESSORIES',
      'mens': 'MEN\'S SHORT SLEEVES'
    };
    return titles[section] || section.toUpperCase();
  }

  // Search functionality
  searchProducts(query) {
    const allProducts = Object.values(PRODUCTS).flat();
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter by category
  filterByCategory(category) {
    const allProducts = Object.values(PRODUCTS).flat();
    return allProducts.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Get products by price range
  getProductsByPriceRange(min, max) {
    const allProducts = Object.values(PRODUCTS).flat();
    return allProducts.filter(product => 
      product.price >= min && product.price <= max
    );
  }
}

// Usage example:
$(document).ready(function() {
  // Initialize the product renderer
  const productRenderer = new ProductRenderer();
  
  // Example of adding a new product
  /*
  productRenderer.addProduct('womens_tops', {
    id: 999,
    name: "New Bold Design",
    price: 55.00,
    category: "TOPS",
    image: "img/product/shirt/new-shirt.jpg",
    description: "Fresh Memphis-inspired design for the modern woman."
  });
  */
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, ProductRenderer };
}