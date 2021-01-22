import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import * as api from "./api/api";

function App() {
    const axios = require('axios');
    const [games, setGames] = useState([])
    const [games2, setGames2] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get(api.urlBatman);
            let multipleIds = response.data.map(id => id.gameID).toString();

            if (multipleIds) getPriceDetail(multipleIds)
        };
        fetchData();
    }, []);

    const getPriceDetail = async (multipleIds) => {
        const priceDetail = await axios.get(`${api.urlIds}${multipleIds}`)

        Object.values(priceDetail.data).map(detail => {
            let tempData = detail.deals.find(f => Math.max(f.savings));
            if (tempData && tempData.dealID) {
                getGameDetail(tempData)
            }
        })
    }
    const getGameDetail = async (tempData) => {
        const detailCard = await axios.get(`${api.urlDetails}${tempData.dealID}`);
        console.log(detailCard)
        let detailCardModel = {
            gameId: detailCard.data.gameInfo.gameID,
            gameName: detailCard.data.gameInfo.name,
            gameSalePrice: detailCard.data.gameInfo.salePrice,
            gameRetailPrice: detailCard.data.gameInfo.retailPrice,
            gameSteamRatingText: detailCard.data.gameInfo.steamRatingText,
            gameImageUrl: detailCard.data.gameInfo.thumb,
            gameSavingPercent: tempData.savings

        }
        games2.push(detailCardModel);
        if (games2.length > 17) {
            setGames(games2)
        }
    }


    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    {games.map(game => {
                        return <Card game={game}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
