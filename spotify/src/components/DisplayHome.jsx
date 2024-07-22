import React from "react";
import Navbar from "./Navbar";
import Album from "./Album";
import Songitem from "./Songitem";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {

    const { songsData , albumsData} = useContext(PlayerContext);

  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Album
              key={index}
              image={item.image}
              name={item.name}
              id={item._id}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item,index) => (
            <Songitem
            key={index}           
            name={item.name}
            desc={item.desc}
            id={item._id}           
            image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
