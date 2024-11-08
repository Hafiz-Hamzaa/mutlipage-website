import Nav from "./components/page";
export default function Home(){
  return(
    <div className="home-page">
      <Nav/>
      <h1 className="hero-head">Buy and trade cryptos <br /> like never before.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repellendus quia eum magni facere adipisci quae.</p>
      <button className="fir-btn">DOWNLOAD APP</button>
      <button className="sec-btn">VIEW PRICING</button>
      
    </div>
  )
}