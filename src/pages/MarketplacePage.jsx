import Header from "../components/Header";
import Footer from "../components/Footer";

function MarketplacePage() {
    return (
        <>
            <Header />

            <main className="marketplace">
                <section
                    className="bestProducts"
                    aria-labelledby="best-products-title"
                >
                    <h2 id="best-products-title" className="sectionTitle">
                        베스트 상품
                    </h2>
                </section>

                <section
                    className="allProducts"
                    aria-labelledby="all-products-title"
                >
                    <h2 id="all-products-title" className="sectionTitle">
                        판매 중인 상품
                    </h2>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default MarketplacePage;