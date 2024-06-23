import { useEffect, useState } from "react";
import Watch from "../watch/Watch";
import './watches.css'


const Watches = () => {
    const [watches, setWatches] = useState([]);
    const [shopCart, setShopCart] = useState([]);
    const handleShopCart = www =>{
        const newShopCart = [...shopCart, www];
        setShopCart(newShopCart)
    }
   

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Coding655/watches/main/api')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <div>
            <h2>Total Watches: <big><em>{watches.length}</em></big> </h2>
            <h3>Marked Watch: {shopCart.length}</h3>

            <div>
                <h4><em>Add to Shop cart</em></h4>
                
                   <div className="shopCart">
                        {
                            shopCart.map(cart =>
                                 <li key={cart.model}> {cart.brand}
                                 <img className="li-img" src={cart.img} alt="" />
                                 </li>   )
                        }
                   </div>
                
            </div>
            <div className="watch-container">
                {
                    watches.map(watch => <Watch key={watch.model}
                                    handleShopCart = {handleShopCart}
                                         watch={watch}></Watch>)
                }
            </div>
        </div>
    );
};

export default Watches;