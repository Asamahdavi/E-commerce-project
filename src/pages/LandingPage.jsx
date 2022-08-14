import Home from "../Components/MainPage/Home";
import FlashDeals from "../Components/flashDeals/FlashDeals";
import ProductDetailed from "../Components/DetailedProduct/ProductDetailed";
const LandingPage = ({productItems ,id, addToCart}) => {
  return (
    <>
      <Home  />
      <FlashDeals productItems={productItems} id={id}  addToCart={addToCart}/>
      
    </>
  );
};

export default LandingPage;
