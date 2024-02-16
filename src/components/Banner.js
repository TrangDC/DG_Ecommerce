import React from 'react';
import {carousel} from "../data/Data";

const Banner = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        {
                            carousel.map((value, index) =>(
                                <div>
                                    <div>
                                        <img src={value.cover_img} alt="img"/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;