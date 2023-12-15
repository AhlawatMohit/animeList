import Anime from '../animeMenu/animeAPI';
import '../component/main.css';
import { useState } from "react";




const Gallery = () => {

    const [items, setItems] = useState(Anime);

    const filterItem = (countryItem) => {
        const updatedItems = Anime.filter((element) => {
            return element.country === countryItem;
        });
        setItems(updatedItems);
    }


    return (
        <>
        <div className='container'>
            <h1 className="mt-5 text-center main-heading"> Top Anime List</h1>
            <hr />

            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around'>
                    <button type="button"  onClick={() => setItems(Anime)}>All</button>
                    <button type="button"  onClick={() => filterItem('Japanese')}>Japanese</button>
                    <button type="button"  onClick={() => filterItem('Korean')}>Korean</button>
                </div>
            </div>

            {/* Main Item Section  */}

            <div className="menu-items container-fluid mt-2">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                items.map((currentEle) => {
                                    const { name, image, description } = currentEle;

                                    return (<>
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row card-container">
                                                {/* Images  */}
                                                <div className="col-12 col-md-12 col-lg-4 img-cont">
                                                    <img src={image} alt={name} className="img-fluid" />
                                                </div>

                                                {/* Anime Details */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
            </div>

        </>
    )
};

export default Gallery;