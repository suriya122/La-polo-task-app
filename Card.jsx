import React from "react";

function Card(props){
if(props.id%2==0){

    return(<div className=" card ciard">
    
   
    <div className="card mb-3" style={{width:"540px"}}>
  <div className="row no-gutters" >
    <div className="col-8">
    <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.about}</p>
        <p className="card-text"><small >Iam {props.age} Years old</small></p>
      </div>
     
    </div>
    <div className="col-4">
    
    
    <img src={props.imge} className="card-img" alt="Loading" width="300px" height="250px"></img>
    </div>
  </div>
</div>
</div>);

}else{
    return(<div className=" card ciard">
    
   
    <div className="card mb-3" style={{width:"540px"}}>
  <div className="row no-gutters" >
    <div className="col-4">
    <img src={props.imge} className="card-img" alt="Loading" width="300px" height="250px"></img>
     
    </div>
    <div className="col-8">
    
    <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.about}</p>
        <p className="card-text"><small >Iam {props.age} Years old</small></p>
      </div>
    
    </div>
  </div>
</div>
   
   
   
   
  

   
        
    </div>);
}
  
}
    

export default Card;