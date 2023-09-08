import categoryData from "../data/categoryData";
import shopCategoryData from "../data/shopCategoryData";

const productsCategory = categoryData.map((category) => ({
  value: category.name,
  label: category.name,
}));

const shopCategory = shopCategoryData.map((category) => ({
  value: category.name,
  label: category.name,
}));

export { productsCategory, shopCategory };
