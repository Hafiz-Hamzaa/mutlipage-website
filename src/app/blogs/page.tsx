import Nav from "../components/page";

export default function Blog(){
    return(
        <div className="blog-page">
            <Nav/>
            <div className="container-blog">
            <div className="content-blog">
                <h1 className="title-blog">Blog</h1>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>
            </div>
            <div className="img-cont">
            <div className="Card">
                    <div className="btns">Featured</div>
                    <div className="rt">What is the best and most secure crypto wallet of 2024 </div>
                    <div className="r-t">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus, nobis distinctio ?</div>
            </div>
            <div className="image"></div>
            </div>
            </div>
        </div>
    )
}