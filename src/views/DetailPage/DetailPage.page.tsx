//#region IMPORTS

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutSection from "../../components/molecules/CheckoutSection";
import DataSection from "../../components/molecules/DataSection";
import PictureSection from "../../components/molecules/PictureSection";
import RelatedSection from "../../components/organisms/RelatedSection";
import { ProductProvider } from "../../contexts/ProductProvider";
import { ProductsByCategoryProvider } from "../../contexts/ProductsByCategoryProvider";
import { ProductTypes } from "../../services/products";
//#endregion

//#region MAIN COMPONENT
const DetailPage: React.FC = () => {
  const { productID } = useParams();
  const [cartData, setCartData] = useState<ProductTypes[]>([]);
  const handleClickAddtoCart = (data: ProductTypes) => {
    // concat the data
    setCartData([...cartData, data]);
  };
  const handleClickCartButton = () => {
    // reset the cart
    setCartData([]);
  };
  const navigate = useNavigate();

  if (!productID) return null;
  return (
    <ProductProvider productID={productID}>
      <ProductsByCategoryProvider>
        <div>
          <div className="flex items-center justify-between px-2 lg:px-8">
            <IconButton variant="text" onClick={() => navigate(-1)} size="lg">
              <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>
            <div className="space-x-1">
              <Button className="space-x-1" onClick={handleClickCartButton}>
                <span>Shopping Cart</span>
                <span>{cartData.length > 0 && cartData.length}</span>
              </Button>
            </div>
          </div>
          <div className="mx-4 my-10 lg:mx-auto lg:max-w-5xl">
            <section className="flex flex-col items-center justify-center mb-20 space-y-4 lg:space-x-10 lg:flex-row">
              <PictureSection />
              <DataSection />
              <CheckoutSection onClick={handleClickAddtoCart} />
            </section>
            <RelatedSection />
          </div>
        </div>
      </ProductsByCategoryProvider>
    </ProductProvider>
  );
};
//#endregion

export default DetailPage;
