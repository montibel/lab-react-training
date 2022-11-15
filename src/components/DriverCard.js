import React from 'react';


function DriverCard({name, rating, img, car}) {

    let stars = () => {

        switch(Math.round(rating)) {
            case 0:
            return '☆☆☆☆☆';

            case 1:
            return '★☆☆☆☆';

            case 2:
            return '★★☆☆☆';


            case 3:
            return '★★★☆☆';

            case 4:
            return '★★★★☆';

            case 5:
            return '★★★★★';

            default: 
            return '☆☆☆☆☆';
        }
    }



  return (
    <div>
        <img class="driver_card" src ={img}></img>
       <p>{name}</p> 
       <p>{stars(rating)}</p>

       <p>{car.model}</p>
       <p>{car.licensePlate}</p>

    </div>
  )
}

export default DriverCard