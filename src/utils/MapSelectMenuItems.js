import categoryData from "../data/categoryData";
import shopCategoryData from "../data/shopCategoryData";
import promoTypesData from "../data/promoTypesData";
import axios from "axios";
import { useRequestProcessor } from "../hooks/useRequestProcessor";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

// fetch data for address
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

// fetch data for categories
// const { useCustomQuery } = useRequestProcessor();
// const axiosPrivate = useAxiosPrivate();
// const { auth } = useAuth();

// const ProductsCategory = categoryData.map((category) => ({
//   value: category.name,
//   label: category.name,
// }));

const ProductsCategory = () => {
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  let mappedData = [];

  const { data, isLoading, isError } = useCustomQuery(
    "getProfile",
    () => axiosPrivate.get(`/api/category`).then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    <div>loading</div>;
  } else if (isError) {
    return <p>Error: {isError.message}</p>;
  } else if (!data || data.length === 0) {
    return <p>No shop data available.</p>;
  } else {
    mappedData = data?.map((category) => ({
      value: category.categoryID,
      label: category.category_name,
    }));
  }

  return mappedData;
};

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
  ProductsCategory,
  shopCategory,
  promoTypes,
  provinces,
  regions,
  municipalities,
  barangays,
  districts,
};
