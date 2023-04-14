import CustomButton from "./components/custombutton";

function Header(){
    return(
        <div style={{width:"90%",
        border:"2px solid green",
        padding:"60px",
        background:"#1abc9c",
        color:"white",
        borderRadius:"50px",
        margin:"0 auto"
        
    }}>
        <div > 
         
        <h1 style={{textAlign:"center",fontSize:"35px"}}>Tco Gyumri </h1>
       
        
        
        </div>
       
        
            <ul style={{display:"flex",
            textAlign:"center",listStyle:"none",
           
        }}>
           
                <li ><a href="#">Home</a></li>
                <li style={{ marginLeft:"20px"}}><a href="#">About</a></li>
                <li style={{ marginLeft:"20px"}}> <a href="#">Contact</a></li> 
                <li  style={{ marginLeft:"20px"}}><CustomButton title={"Clik Me!"} /></li>
            </ul>
        </div>
    )
}
export default Header;