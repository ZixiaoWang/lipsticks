import { h, Fragment } from 'preact';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import { brands, brandsMap } from '../services/brands.service.js';

export const BrandList = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const toggleSelectedBrand = (brandName) => {
        if (selectedBrand === brandName) {
            setSelectedBrand(null);
        } else {
            setSelectedBrand(brandName);
        }
    }

    const goto = (lipstick) => {
        route('/lipstick/' + encodeURIComponent(lipstick.brand) + '/' + encodeURIComponent(lipstick.colour));
    }

    const item = (brand, index) => {
        const colorsOfTheBrand = brandsMap.get(brand) || [];

        return (
            <Fragment>
                <div className="item" key={index}>
                    <div className="item-label" onClick={() => toggleSelectedBrand(brand)}>
                        { brand }
                    </div>
                    {
                        brand === selectedBrand &&
                        colorsOfTheBrand.length > 0 &&
                        <div className="matrix item-extra">
                            {
                                colorsOfTheBrand.map((lipstick, lipstickIndex) => {
                                    return <div className="item" 
                                        key={lipstickIndex} 
                                        style={{ backgroundColor: lipstick.hex }}
                                        onClick={() => goto(lipstick)}>
                                    </div>
                                })
                            }
                            <div className="angle-arrow"></div>
                        </div>
                    }
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="list" id="list">
                { brands.map(item) }
            </div>
            <header className="header">
                <span>品牌</span>
                <small className="red">金钗斜戴宜春胜，万岁千秋绕鬓红</small>
            </header>
        </Fragment>
    )
}