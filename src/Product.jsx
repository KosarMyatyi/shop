import { useEffect, useState } from "react"
import axios from "axios"
import cartWhite from './assets/img/cartWhite.svg'
import rating from './assets/img/rating.svg'
import arrowBack from './assets/img/arrowBack.svg'
import { useParams, Link } from "react-router-dom"
import { Reviews } from "./Reviews"



export const Product = () => {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const [isProductInCart, setIsProductIncart] = useState(false)

    useEffect(() => {
        axios
            .get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${params.productId}`)
            .then((res) => setProduct(res.data))
    }, [params.productId])
    if (product === null) {
        return <h2>Page is Loading...</h2>
    }


    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }

    return (
        <div>
            <div className="arrowBack">
                <Link to={"/"}>
                    <img src={arrowBack} alt="" />
                    Back to Best Seller
                </Link>
            </div>

            <div className="product">
                <img src={product.image} alt="" />
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="rating">
                        <p>Rating: {product.rating.rate}</p>
                        <img src={rating} alt="" />
                    </div>
                    <div className="category">
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>
                    <p className="description">{product.description}</p>
                    <button onClick={addProductToCartHandler} >
                        <img src={cartWhite} alt="" />
                        {isProductInCart ? 'Go to cart' : 'Add to cart'}
                    </button>
                </div>
            </div>
            <Reviews />
        </div>
    )
}
