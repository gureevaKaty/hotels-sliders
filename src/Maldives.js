import { useState } from "react";
import { data } from "./data";

function Maldives() {
    const [hotel, setHotel] = useState(0);
    const {id, hotelName, description, image, source} = data[hotel];

    const previousHotel = () => {
        setHotel ((hotel => {
            hotel --;
            if (hotel < 0) {
                return data.length -1;
            }
            return hotel;
        }))
    }

    const nextHotel = () => {
        setHotel ((hotel =>{
            hotel ++;
            if (hotel > data.length -1) {
                hotel = 0;
            }
            return hotel;
        }))
    }

    

    return(<div className='container'>
        <div>
            <img src={image} width="300px" alt="hotel"/>
        </div>

        <div>
            <h2>{hotelName}</h2>
        </div>

        <div>
            <p>{description}</p>
        </div>

        <div>
            <p>{source}</p>
        </div>

        <div>
            <button onClick={previousHotel}>Previous</button>
            <button onClick={nextHotel}>Next</button>
        </div>

        <div>
        <button onClick={() => setHotel([])}>Remove</button>
        </div>
    </div>

    )
}

export default Maldives;