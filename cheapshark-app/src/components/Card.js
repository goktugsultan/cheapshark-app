import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css'
import * as rating from "../const/const";


function Card(props) {
    const {gameImageUrl, gameName, gameSteamRatingText, gameSalePrice, gameRetailPrice,gameSavingPercent} = props.game

    const getRatingValue = () => {
        const {gameSteamRatingPercent} = props.game
        if (gameSteamRatingPercent >= 80) {
            return rating.ratingFive;
        } else if (gameSteamRatingPercent >= 60 && gameSteamRatingPercent < 80) {
            return rating.ratingFour;
        } else if (gameSteamRatingPercent >= 40 && gameSteamRatingPercent < 60) {
            return rating.ratingThree;
        } else if (gameSteamRatingPercent >= 20 && gameSteamRatingPercent < 40) {
            return rating.ratingTwo;
        } else {
            return rating.ratingOne;
        }
    }
    const savingPercent = parseFloat(gameSavingPercent).toFixed(2)
    return (

        <div className="col-md-4 col-lg-4 col-12 mb-3">
            <div className="card mt-3">
                <div className="align-items-center p-2 text-center">
                    <img src={gameImageUrl} className="rounded" width="130" height="130"/>
                    <h6 className="mt-3 text-truncate ">{gameName}</h6>
                    <StarRatingComponent
                        name="rate"
                        editing={false}
                        starCount={5}
                        starColor="#091f5f"
                        value={getRatingValue()}
                    />
                    <hr/>
                    <div className="mt-2">
                            <span className="d-block">
                                <span className="font-weight-bold">Rating</span>: {gameSteamRatingText ? gameSteamRatingText : "Not enough"}
                            </span>
                    </div>
                </div>
                <div className="m-2 p-2 d-flex justify-content-around text-dark">
                    <span className="font-weight-bold font-size">$ {gameSalePrice}</span>
                    <span className="discount px-md-1 px-lg-4 font-size">%{savingPercent}</span>
                    <span className="text-muted font-weight-bold font-size"><s>$ {gameRetailPrice}</s></span>
                </div>
            </div>
        </div>

    );
}

export default Card;
