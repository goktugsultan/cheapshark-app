import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css'


function Card(props) {
    const {gameImageUrl, gameName, gameSteamRatingText, gameSalePrice, gameRetailPrice,gameSavingPercent} = props.game

    const getRatingValue = () => {
        const {gameSteamRatingPercent} = props.game
        if (gameSteamRatingPercent >= 80) {
            return 5;
        } else if (gameSteamRatingPercent >= 60 && gameSteamRatingPercent < 80) {
            return 4;
        } else if (gameSteamRatingPercent >= 40 && gameSteamRatingPercent < 60) {
            return 3;
        } else if (gameSteamRatingPercent >= 20 && gameSteamRatingPercent < 40) {
            return 2;
        } else {
            return 1;
        }
    }
    const savingPercent = parseFloat(gameSavingPercent).toFixed(2)
    return (

        <div className="col-md-4 col-lg-4 col-12 mb-3">
            <div className="card mt-3">
                <div className="align-items-center p-2 text-center">
                    <img src={gameImageUrl} className="rounded" width="130" height="130"/>
                    <h6 className="mt-3">{gameName}</h6>
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
                                Rating: {gameSteamRatingText ? gameSteamRatingText : "Not enough to decide"}
                            </span>
                    </div>
                </div>
                <div className="m-2 p-2 d-flex justify-content-around text-dark">
                    <span className="font-weight-bold font-size">$ {gameSalePrice}</span>
                    <span className="discount px-4 font-size">%{savingPercent}</span>
                    <span className="text-muted font-weight-bold font-size"><s>$ {gameRetailPrice}</s></span>
                </div>
            </div>
        </div>

    );
}

export default Card;
