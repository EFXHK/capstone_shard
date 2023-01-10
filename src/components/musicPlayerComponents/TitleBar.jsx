import React from "react";

const Titlebar = ({handleSelectChange, musicGenres}) => {
    return (
        <div>
            <h1>Music Para</h1>
            <select onChange={handleSelectChange}>
                {musicGenres.map(genre => {
                    return <option key={genre.name} value={genre.url}>{genre.name}</option>
                })}
            </select>
        </div>
    );
    
};

export default Titlebar;