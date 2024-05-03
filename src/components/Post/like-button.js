import React, { useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty, IoIosArrowDroprightCircle } from 'react-icons/io';
import { IconContext } from 'react-icons';

export function LikeButton() {
    const [liked, setLiked] = useState(false); 

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="icon" onClick={handleLike}>
            <IconContext.Provider value={{ size: "2em", color: liked ? "red" : "white" }}>
                {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </IconContext.Provider>
        </div>
    );
}