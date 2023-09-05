const voucherData = [
  {
    voucherID: 1,
    shopID: 1,
    promoID: 1,
    start_date: "2023-02-23",
    end_date: "2023-02-26",
    is_active: true,
    //from shopID
    logo_img_link: null,
    name: "Bamboo Land",
    //from promoID
    promo_type: "Free Shipping",
    discount_amount: 999999.0,
    min_spend: 99999.0,
  },
  {
    voucherID: 2,
    shopID: 1,
    promoID: 2,
    start_date: "2023-02-23",
    end_date: "2023-02-26",
    is_active: true,
    //from shopID
    logo_img_link: null,
    name: "Bamboo Land",
    //from promoID
    promo_type: "Percent Discount",
    discount_amount: 0.2,
    min_spend: 999999.0,
  },
  {
    voucherID: 3,
    shopID: 1,
    promoID: 2,
    start_date: "2023-02-23",
    end_date: "2023-02-26",
    is_active: false,
    //from shopID
    logo_img_link: null,
    name: "Bamboo Land",
    //from promoID
    promo_type: "Percent Discount",
    discount_amount: 0.5,
    min_spend: 999999.0,
  },
  {
    voucherID: 4,
    shopID: 1,
    promoID: 3,
    start_date: "2023-02-23",
    end_date: "2023-02-26",
    is_active: true,
    //from shopID
    logo_img_link: null,
    name: "Bamboo Land",
    //from promoID
    promo_type: "Peso Discount",
    discount_amount: 100,
    min_spend: 999999.0,
  },
];
export default voucherData;
