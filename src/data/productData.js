const productData = [
  {
    productID: 1,
    product_image: null,
    product_name: "Bamboo Bliss Bedsheets",
    total_sold: 76,
    status: "Low Stock",
    number_of_variations: 9,
    promo_type: "Peso Discount",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    // inner join
    voucherID: null,
    shopCategoryID: 1,
    shopCategory: "Category A",
    promoID: 1,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,

    variations: [
      {
        prodVariationID: 1,
        productID: 1,
        variation_name: "variation 1",
        price: 120.0,
        var_image: null,
        amt_sold: 4,
        amt_on_hand: 15,
      },
      {
        prodVariationID: 2,
        productID: 1,
        variation_name: "variation 2",
        price: 120.0,
        var_image: null,
        amt_sold: 4,
        amt_on_hand: 9,
      },
    ],
  },

  {
    productID: 2,
    product_image: null,
    product_name: "Eco-Friendly Bamboo Toothbrush",
    total_sold: 58,
    status: "Out Of Stock",
    number_of_variations: 4,
    promo_type: "Free Shipping",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: null,
    shopCategoryID: 1,
    shopCategory: "Category A",
    promoID: null,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,

    variations: [
      {
        prodVariationID: 3,
        productID: 2,
        variation_name: "variation 3",
        price: 120.0,
        var_image: null,
        amt_sold: 4,
        amt_on_hand: 0,
      },
      {
        prodVariationID: 4,
        productID: 2,
        variation_name: "variation 4",
        price: 120.0,
        var_image: null,
        amt_sold: 4,
        amt_on_hand: 8,
      },
    ],
  },
  {
    productID: 3,
    product_image: null,
    product_name: "Bamboo Charcoal Air Purifier sda dsadas dsadasd asd asd",
    total_sold: 11,
    status: "In Stock",
    number_of_variations: 3,
    promo_type: "Percent Discount",
    is_featured: true,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: null,
    shopCategoryID: 1,
    shopCategory: "Category A",
    promoID: null,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 5,
        productID: 3,
        variation_name: "variation 5",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 21,
      },
    ],
  },
  {
    productID: 4,
    product_image: null,
    product_name: "Bamboo Kitchen Utensil Set",
    total_sold: 93,
    status: "In Stock",
    number_of_variations: 8,
    promo_type: "None",
    is_featured: true,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: null,
    shopCategoryID: 2,
    shopCategory: "Category B",
    promoID: 1,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 6,
        productID: 4,
        variation_name: "variation 5",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 16,
      },
    ],
  },
  {
    productID: 5,
    product_image: null,
    product_name: "Bamboo Fiber Bath Towels",
    total_sold: 27,
    status: "Low Stock",
    number_of_variations: 5,
    promo_type: "Percent Discount",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: null,
    shopCategoryID: null,
    shopCategory: "",
    promoID: null,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 7,
        productID: 5,
        variation_name: "variation 7",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 1,
      },
    ],
  },
  {
    productID: 6,
    product_image: null,
    product_name: "Bamboo Laptop Stand",
    total_sold: 105,
    status: "In Stock",
    number_of_variations: 2,
    promo_type: "Free Shipping",
    is_featured: true,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: null,
    shopCategoryID: null,
    shopCategory: "",
    promoID: 2,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 8,
        productID: 6,
        variation_name: "variation 8",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 11,
      },
    ],
  },
  {
    productID: 7,
    product_image: null,
    product_name: "Bamboo Cutting Board",
    total_sold: 87,
    status: "In Stock",
    number_of_variations: 7,
    promo_type: "Peso Discount",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 1,
    shopCategoryID: 3,
    shopCategory: "Category C",
    promoID: 1,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 9,
        productID: 7,
        variation_name: "variation 9",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 15,
      },
    ],
  },
  {
    productID: 8,
    product_image: null,
    product_name: "Bamboo Picnic Basket",
    total_sold: 37,
    status: "Low Stock",
    number_of_variations: 10,
    promo_type: "None",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 1,
    shopCategoryID: 4,
    shopCategory: "Category D",
    promoID: 3,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 10,
        productID: 8,
        variation_name: "variation 10",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 6,
      },
    ],
  },
  {
    productID: 9,
    product_image: null,
    product_name: "Bamboo Desk Organizer",
    total_sold: 9,
    status: "Discontinued",
    number_of_variations: 1,
    promo_type: "Percent Discount",
    is_featured: true,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 2,
    shopCategoryID: null,
    shopCategory: "",
    promoID: 4,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 11,
        productID: 9,
        variation_name: "variation 11",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 0,
      },
    ],
  },
  {
    productID: 10,
    product_image: null,
    product_name: "Bamboo Fiber Coffee Cups",
    total_sold: 70,
    status: "Out Of Stock",
    number_of_variations: 6,
    promo_type: "Free Shipping",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 2,
    shopCategoryID: 3,
    shopCategory: "Category C",
    promoID: 5,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 12,
        productID: 10,
        variation_name: "variation 12",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 0,
      },
    ],
  },
  {
    productID: 11,
    product_image: null,
    product_name: "Bamboo Soap Dispenser",
    total_sold: 62,
    status: "In Stock",
    number_of_variations: 9,
    promo_type: "Peso Discount",
    is_featured: true,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 2,
    shopCategoryID: 4,
    shopCategory: "Category D",
    promoID: 6,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 13,
        productID: 11,
        variation_name: "variation 13",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 15,
      },
    ],
  },
  {
    productID: 12,
    product_image: null,
    product_name: "Bamboo Plant Stand",
    total_sold: 39,
    status: "Low Stock",
    number_of_variations: 4,
    promo_type: "Percent Discount",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 3,
    shopCategoryID: 5,
    promoID: 7,
    shopCategory: "Category G",
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 14,
        productID: 12,
        variation_name: "variation 14",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 8,
      },
    ],
  },
  {
    productID: 13,
    product_image: null,
    product_name: "Bamboo Folding Chair",
    total_sold: 21,
    status: "Out Of Stock",
    number_of_variations: 7,
    promo_type: "None",
    is_featured: false,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 4,
    shopCategoryID: 6,
    shopCategory: "Category F",
    promoID: null,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 15,
        productID: 13,
        variation_name: "variation 15",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 0,
      },
    ],
  },
  {
    productID: 14,
    product_image: null,
    product_name: "Product 14",
    total_sold: 21,
    status: "Out Of Stock",
    number_of_variations: 7,
    promo_type: "None",
    is_featured: true,
    category: "Bamboo",
    description:
      "lorem ispum sada dasjkldhaslk dioeudioa klasjdalsd a duiapdia ad9pwoae idam poaiedaopw edaklxnma auapeasd jkh ra",

    voucherID: 3,
    shopCategoryID: 7,
    shopCategory: "Category G",
    promoID: 4,
    price: 750.0,
    orig_price: 750.0,
    rating: 4.5,
    variations: [
      {
        prodVariationID: 16,
        productID: 14,
        variation_name: "variation 16",
        price: 120.0,
        var_image: null,
        amt_sold: 10,
        amt_on_hand: 0,
      },
    ],
  },
];

export default productData;
