import categoryData from "../data/categoryData";
import shopCategoryData from "../data/shopCategoryData";
import promoTypesData from "../data/promoTypesData";
import axios from "axios";

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
const regionsData = await fetchData("https://psgc.gitlab.io/api/regions/");
const provincesData = await fetchData("https://psgc.gitlab.io/api/provinces/");
const municipalitiesData = await fetchData(
  "https://psgc.gitlab.io/api/cities-municipalities/"
);

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

const provinces = provincesData.map((category) => ({
  value: category.name,
  label: category.name,
}));

const regions = regionsData.map((category) => ({
  value: category.name,
  label: category.name,
}));

const municipalities = municipalitiesData.map((category) => ({
  value: category.name,
  label: category.name,
}));
export {
  productsCategory,
  shopCategory,
  promoTypes,
  provinces,
  regions,
  municipalities,
};
