import styles from "./Home.module.css"
import "../App.css"
export default function Home(){
    return(
        <div>
            Home <button className={styles.button}>버튼1</button> {/*deeppink    추가로 F12누르면 클래스 이상하게 나옴 하지만 안 겹치게 하려고 그렇게 나오는 거임 이유는 모듈로 만들어서*/}
            <button className="button">버튼1</button>  {/*deepskyblue*/}
        </div>
    )
}