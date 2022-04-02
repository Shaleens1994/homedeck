import React from 'react';
import FurnitureList from '../components/FurnitureList';

// to show the page with furniture list
function Furniture(){

    return (
        <div className=" my-1 furnitures">
          <h1 className="mx-4 my-4">Furniture</h1>
          <div>
            <div>
              <FurnitureList />
            </div>
          </div>
        </div>
      );


}

export default Furniture;