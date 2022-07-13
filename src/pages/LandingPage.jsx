import Home from "../Components/MainPage/Home";
import FlashDeals from "../Components/flashDeals/FlashDeals";
const LandingPage = ({productItems}) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems}  />
    </>
  );
};

export default LandingPage;
