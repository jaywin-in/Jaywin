import productsData from "../products.json";

const products = (categoryName) =>{
    const products = productsData.filter((product) => product.category === categoryName);
    return products;
};



export { products };
