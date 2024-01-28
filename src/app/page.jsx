import './home.css'
import Image from "next/image"
import hero from "./images/hero.png"
import background from "./images/homeBg.png"

export default function Home() {
  return (
    <>
    <div className='background'>
      <Image src={background} alt="background"/>
    </div>
      <div className="home">
        <Image id="hero" src={ hero } alt="hero"></Image>
        <div className="slogan">
          <h3>ADYNDASHOP</h3>
          <h3>ADYNDASHOP</h3>
          <h3>ADYNDASHOP</h3>
          <h2>Recharge your game</h2>
          <h2>Increase your gain</h2>
          <h4>AdyndaShop, Your Gateway to Game Vouchers and Community Bliss!.</h4>
        </div>
        <button><em>READ MORE</em></button>
      </div>
    </>
  )
}
