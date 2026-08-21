import Header from "../components/Header";
import Footer from "../components/Footer";
import BestProductsSection from "../components/BestProductsSection";
import AllProductsSection from "../components/AllProductsSection";

function MarketplacePage() {
    return (
        <>
            <Header />

            <main className="marketplace">
                <BestProductsSection />
                <AllProductsSection />
            </main>
            <Footer />
        </>
    );
}

export default MarketplacePage;