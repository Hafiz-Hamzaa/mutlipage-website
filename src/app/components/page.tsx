import Link from "next/link"
export default function Nav(){
    return (
        <div>
            <nav className="navbar">
            <div className="navbar-left">
    <img src="https://cdn.prod.website-files.com/5f8f28722b0eae892596eb35/5fac14536bfe49d6412e1990_logo-crypto-template.svg" alt="Logo" className="logo"></img>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/About">About</Link></li>
      <li><a href="/blogs">Blogs</a></li>
    </ul>
  </div>
  <div className="navbar-right">
    <button className="btn signin-btn">Sign In</button>
    <button className="btn signup-btn">Sign Up</button>
  </div>
</nav>
</div>
    
)}