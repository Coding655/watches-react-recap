import { useState } from 'react';
import './watch.css'

const Watch = ({watch,handleShopCart }) => {
    console.log(handleShopCart)
    const {brand, img, model, price,features,batteryLife} = watch;
    const [mark, setMark] = useState(false)
    const handleMarkBtn = () => {
        setMark(!mark)
    }
  

    return (
        <div className="border">
            <p>Watch Name: <big><em> {brand} </em></big> </p>
            <img className="img" src={img} alt="image is wasted" />
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <hr />
            <button onClick={handleMarkBtn}>{mark ? 'Mark' : 'mark it'}</button>
            <p><em>{mark ? ' mark done' : ' i want to mark it'}</em></p>
            <hr />
            <button onClick={()=> handleShopCart(watch)}>shop cart</button>
            <hr />
            <br />
            <small>
                <p>Show Details: 
                    <li>
                    {batteryLife}
                    </li>
                    <br />
                    <li>
                        {features}
                    </li>
                    </p>
            </small>
            
            
        </div>
    );
};

export default Watch;