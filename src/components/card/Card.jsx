import React, {useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import './Card.css'

import { Link } from "react-router-dom";

const Card = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=> {
            setIsLoading(false)
        }, 1500)
    }, [])


    return(


        <>
        {
            isLoading
            
            ? 
            
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444"></SkeletonTheme>

                <Skeleton height={300} duration={2} />

            </div>
            : <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards">
                    <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" />
                    <div className="cards_overlay">
                        <div className="cards_title">
                            {movie ? movie.original_title: ""}
                        </div>
                        <div className="cards_runtime">
                            {movie? movie.release_date: ""}
                            <span className="card_rating">{movie? movie.vote_average: ""} <i className="fas fa-star"></i> </span>
                        </div>
                        <div className="cards_description">
                            { movie? movie.overview.slice(0,118) + "..." : "" }
                        </div>
                    </div>
                </div>
            </Link>
        }
        </>

    )

}

export default Card;