import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import defaultProductImage from "../assets/defaultProductImage.svg";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ProductCard
        image={defaultProductImage}
        title="제목입니다"
        price={100000}
        likes={5000}
      />
    </>
  );
}

export default App;
