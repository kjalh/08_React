import React, { useState } from "react"

// import Products from "./components/Products"
import Products from "./components/ProductHook"

function App() {
  // show에 true가 들어감 set에는 useState 안에 있는 함수가 들어감
  // show는 set을 호출해서 보였다 안 보였다
  const [showProducts, setShowProducts] = useState(true)


  // showProducts = 지금 보여줄지 말지 결정하는 스위치 값
  // setShowProducts = 그 스위치를 딸깍 누르는 손 (버튼 역할, 자기 자신이 보이거나 숨는 게 아님)
  // 진짜 보이거나 숨는 것 = <ProductList /> 같은 실제 컴포넌트/엘리먼트

  return (
    <>
      <div>
        {showProducts && <Products />}

        <button onClick={() => setShowProducts((show) => !show)}>
          제품 보기
        </button>
      </div>
    </>
  )
}

export default App