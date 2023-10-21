import { useState } from "react";
function Tour({id,name,image,info,price,removeTour}) {
  const [readMore,setReadMore] = useState(false);
  return (
    <div className="tour-item">
      <img src={image} alt={name} />
      <div className="tour-content">
        <div className="title-price">
          <h3>{name}</h3>
          <span> ${price} </span>
        </div>
        <p className="tour-text">
          {
            readMore ? info : `${info.slice(0,200)} ...`            
          }
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Show More'}</button>
        </p>
        <button onClick={()=> removeTour(id)} class="delete-btn btn-block btn">not interested</button> 
      </div>
    </div>
  );
}

export default Tour;
