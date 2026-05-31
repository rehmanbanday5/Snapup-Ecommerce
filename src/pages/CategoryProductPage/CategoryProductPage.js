import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../store/productSlice";
import ProductList from "../../components/ProductList/ProductList";

const CategoryProductPage = () => {
  const { category } = useParams();
  const products = useSelector(getAllProducts);

  const filteredProducts = products.filter(
    (p) => p.category?.toLowerCase() === category?.toLowerCase(),
  );

  return (
    <div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default CategoryProductPage;
