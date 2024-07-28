import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

function Product({ url, limit = 20, skip = 20 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disablebtn,setDisableBtn] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}?limit=${limit}&skip=${count === 0 ? 0 : count * skip}`
      );
      const data = await response.json();

      data &&
        data.products &&
        data.products.length &&
        setProducts((prevdata)=>[...prevdata , ...data.products]);
      setLoading(false);
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length ===100 ) setDisableBtn(true);
  }, [products]);
  console.log(products)
  if (loading) return <div>Products are loading. Please wait</div>;
  if (errorMsg !== null) return <div>Error {errorMsg}</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((productItem) => { return(
              <div key={productItem.id} className="product">
                <h3>{productItem.title}</h3>
                <img src={productItem.thumbnail} alt={productItem.title}/>
                <p>{productItem.description}</p>
              </div>);
            })
          : null}
      </div>
      <div className="btn-container">
        <button disabled={disablebtn} onClick={()=>setCount(count+1)}>Load More Products</button>
      </div>
      {
        disablebtn ? <p>You have reached to 100 products</p> : null 
      }
    </div>
  );
}

export default Product;
