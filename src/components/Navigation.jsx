const Navigation = ()=>{
    return(
       <div> 
         <nav className="container">
               <div className="logo">
                <img src="/images/brand_logo.png" alt="Logo of Brand"/>          
               </div>

              <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
     
              <button>Login</button>
       </nav>
   </div>
      
    );
};

export default Navigation