import React from "react"
import Card from "./Card";
import Profile from "./data";



function App(){
    return(<div><h1 style={{textAlign:"center"}}>PROFILE</h1><div className="row">
    {Profile.map(item=>{
        return(<Card id={item.id} imge={item.imgurl} name={item.name} age={item.age}  about={item.profession} />);

    })}

        
    </div></div>


        
        
        
        
        );

}

export default App;