import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import searchIcon from "../assets/icon-search.svg";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import useWindowWidth from "../hooks/useWindowWidth";

function AllProductsSection() {
    const [products, setProducts] = useState([]);
    const [orderBy, setOrderBy] = useState("recent");
    const [keyword, setKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const windowWidth = useWindowWidth();

    let pageSize = 10;

    if (windowWidth < 744) {
        pageSize = 4;
    } else if (windowWidth < 1280) {
        pageSize = 6;
    }

    const totalPages = Math.ceil(totalCount / pageSize);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts({
                page,
                pageSize,
                orderBy,
                keyword: searchKeyword,
            });

            const newTotalPages = Math.ceil(data.totalCount / pageSize);

            setTotalCount(data.totalCount);

            if (newTotalPages > 0 && page > newTotalPages) {
                setPage(newTotalPages);
                return;
            }

            setProducts(data.list);
        }
        loadProducts();
    }, [page, pageSize, orderBy, searchKeyword]);
    function handleSearch(event) {
        event.preventDefault();
        setPage(1);
        setSearchKeyword(keyword);
    }
    function handleOrderByChange(event) {
        setPage(1);
        setOrderBy(event.target.value);
    }
    return (
        <section
            className="allProducts"
            aria-labelledby="all-products-title">
            <div className="allProductsHeader">
                <h2 id="all-products-title" className="sectionTitle">
                    판매 중인 상품
                </h2>

                <div className="allProductsControls">
                    <form className="searchForm" onSubmit={handleSearch}>
                        <img className="searchIcon"
                            src={searchIcon}
                            alt=""
                        />
                        <input
                            type="text"
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                            placeholder="검색할 상품을 입력해주세요"
                        />
                    </form>
                    <button className="registerButton" type="button">
                        상품 등록하기
                    </button>

                    <select
                        value={orderBy}
                        onChange={handleOrderByChange}
                    >
                        <option value="recent">최신순</option>
                        <option value="favorite">좋아요순</option>
                    </select>
                </div>
            </div>

            <div className="allProductsGrid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </section>
    );
}

export default AllProductsSection;