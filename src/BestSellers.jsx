import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const BestSellers = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/')
        .then((res) => {setProducts(res.data)
        })
    }, [])

    return (
        <div className="cards">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="img" />
                    <h4>{product.title}</h4>
                    <p className="price">${product.price}</p>
                    <button onClick={() => navigate(`./product/${product.id}`)}>Show more</button>
                </div>
            ))}
        </div>

    )
}