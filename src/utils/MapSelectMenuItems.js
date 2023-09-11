import categoryData from "../data/categoryData";
import shopCategoryData from "../data/shopCategoryData";
import promoTypesData from "../data/promoTypesData";

const productsCategory = categoryData.map((category) => ({
  value: category.name,
  label: category.name,
}));

const shopCategory = shopCategoryData.map((category) => ({
  value: category.name,
  label: category.name,
}));

const promoTypes = promoTypesData.map((category) => ({
  value: category.type,
  label: category.type,
}));

export { productsCategory, shopCategory, promoTypes };
