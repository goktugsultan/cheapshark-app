import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


function Card(props) {
    console.log('props', props.game.gameId)
    return (

        <div className="col-md-4 col-lg-4 col-12 mb-3">
            <div className="card mt-3 article">
                <div className="align-items-center p-2 text-center">
                    <img src={props.game.gameImageUrl} className="rounded" width="130" height="130"/>
                    <h6 className="mt-3">{props.game.gameName}</h6>
                    <StarRatingComponent
                        name="rate"
                        editing={false}
                        starCount={5}
                        starColor="red"
                        value="3"

                    />
                    <hr/>
                    <div className="mt-2">
                            <span className="d-block">
                                Rating: {props.game.gameSteamRatingText ? props.game.gameSteamRatingText : "Not enough to decide"}
                            </span>
                    </div>
                </div>
                <div className="m-2 p-2 d-flex justify-content-around text-dark">
                    <span className="font-weight-bold">$ {props.game.gameSalePrice}</span>
                    <span className="discount px-4">%{props.game.gameSavingPercent}</span>
                    <span className="text-muted font-weight-bold"><s>$ {props.game.gameRetailPrice}</s></span>
                </div>
            </div>
        </div>

    );
}

export default Card;
