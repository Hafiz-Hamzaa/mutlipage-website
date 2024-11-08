import Nav from "../components/page";
export default function About(){
    return(
        <div className="about-page">
        <Nav/>
        <h1 className="title">ABOUT CRYPTO</h1>
        <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum <br /> maiores quod sint qui dicta velit adipisci reiciendis voluptas? Maxime?Lorem ipsum dolor sit <br /> amet consectetur, adipisicing elit. Suscipit neque magni enim quaerat natus esse!</p>
        <h1 className="title">WHAT DRIVES CRYPTO?</h1>
        <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="card-container">
            <div className="card"> <h2>Open Source</h2><p className="r-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Et nibhurna in proin dui purus bibendum cras. Morbi cursus nunc.</p></div>
            <div className="card"> <h2>Open Source</h2><p className="r-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Et nibhurna in proin dui purus bibendum cras. Morbi cursus nunc.</p></div>
            <div className="card"> <h2>Open Source</h2><p className="r-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Et nibhurna in proin dui purus bibendum cras. Morbi cursus nunc.</p></div>
            <div className="card"> <h2>Open Source</h2><p className="r-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Et nibhurna in proin dui purus bibendum cras. Morbi cursus nunc.</p></div>
        </div>
        </div>
    )
}