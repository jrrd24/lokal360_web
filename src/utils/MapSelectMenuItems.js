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
const districtsData = await fetchData("https://psgc.gitlab.io/api/districts/");
const barangaysData = await fetchData("https://psgc.gitlab.io/api/barangays/");

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
  regionCode: category.regionCode,
  provinceCode: category.code,
}));

const districts = districtsData.map((category) => ({
  value: category.name,
  label: category.name,
  regionCode: category.regionCode,
  districtCode: category.code,
}));

const regions = regionsData.map((category) => ({
  value: category.name,
  label: category.name,
  code: category.code,
}));

const municipalities = municipalitiesData.map((category) => ({
  value: category.name,
  label: category.name,
  provinceCode: category.provinceCode,
  districtCode: category.districtCode,
  municipalityCode: category.code,
}));

const barangays = barangaysData.map((category) => ({
  value: category.name,
  label: category.name,
  municipalityCode: category.municipalityCode,
  barangayCode: category.code,
  cityCode: category.cityCode,
}));

export {
  productsCategory,
  shopCategory,
  promoTypes,
  provinces,
  regions,
  municipalities,
  barangays,
  districts,
};
