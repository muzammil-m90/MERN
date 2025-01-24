import React, { useState } from "react";

const Counter = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [disLikeCount, setdisLikeCount] = useState(0);
    const like = () => setLikeCount(likeCount + 1);
    const disLike = () => setdisLikeCount(disLikeCount - 1);

    const [likeDisLike, setlikeDislike] = useState(false);
    
    const likeOrUnlike = () =>{
        setlikeDislike(!likeDisLike);
        console.log(likeDisLike);
        if(!likeDisLike)
        {
            console.log(likeDisLike);
            setLikeCount(likeCount + 1);            
        }else{            
            setLikeCount(likeCount - 1);
        }
    }

return (
    <div>
    <div>
         <b>hai hello</b>     
         <p>
         <button onClick={like}>Like❤️{likeCount}</button>&nbsp;&nbsp;
         <button onClick={disLike}>DisLike💔{disLikeCount}</button></p>
    </div>
    <div>
        <p>{likeDisLike ? "Liked" : "UnLiked"}</p>
        <button onClick={likeOrUnlike}>❤️/💔</button>
    </div>
    </div>
);
}

export default Counter;