function ProductCard({name,price,inStock}){
    return(
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{inStock ? 'In Stock' : 'out of Stock'}</p>
        </div>
    )
}

export default ProductCard