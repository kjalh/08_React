// 이 파일은 필요없음 ProdictHook.jsx랑 useProdicts.js로 나눔

import React, { useEffect, useState } from "react"
import useProducts from "../hooks/useProducts"


export default function Products() {
    // 이런 상태 변수가 중복되면 부모에서 관리하는 게 좋음 아마 04_reducer에서 쓸듯
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState()
    const [products, setProducts] = useState([])

    const handleChange = () => setChecked((prev) => !prev)

    useEffect(() => {
        setLoading(true)
        setError(undefined)
        fetch(`data/${checked ? "sale_" : ""}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log("네트워크에서 데이터를 잘 불러옴")
                setProducts(data)
            })
            .catch((e) => setError("에러가 발생함!"))
            .finally(() => setLoading(false))
        return () => {
            console.log("데이터 처리 완료")
        }
    }, [checked])

    if (loading) return <p>Loading 중...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <input id="checkbox" type="checkbox" checked={checked} 
            value={checked} onChange={handleChange} />

            <label htmlFor="checkbox">세일상품보기</label>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}