import { h, Fragment } from 'preact';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import { SORTED_LIPSTICKS } from '../services/lipsticks.service.js';

export const ColorsMatrix = () => {
    const [lipsticks, setLipsticks] = useState(SORTED_LIPSTICKS);
    let timeout = undefined;

    const item = (lipstick, index) => {
        return (
            <div className="item" 
                key={index} 
                data-hex={lipstick.hex} 
                data-brand={lipstick.brand}
                data-color-name={lipstick.colour}
                style={{ backgroundColor: lipstick.hex }}
                onClick={() => goto(lipstick)}>
            </div>
        )
    }

    const keywordChange = (event) => {
        if (event.target && event.target.value) {
            let keyword = event.target.value;
            keyword = keyword.toLocaleLowerCase();
            window.clearTimeout(timeout);
            if (keyword.length === 0) {
                setLipsticks(SORTED_LIPSTICKS);
            } else {
                timeout = window.setTimeout(() => {
                    const newLipsticks = SORTED_LIPSTICKS.filter((LIPSTICK) => {
                        const hex = LIPSTICK.hex.toLocaleLowerCase();
                        const brand = LIPSTICK.brand.toLocaleLowerCase();
                        const colour = LIPSTICK.colour.toLocaleLowerCase();
                        if (hex.includes(keyword) || brand.includes(keyword) || colour.includes(keyword)) {
                            return true;
                        }
                        return false;
                    });
                    setLipsticks(newLipsticks);
                }, 200);
            }
        } else {
            window.clearTimeout(timeout);
            setLipsticks(SORTED_LIPSTICKS);
        }
    }

    const goto = (lipstick) => {
        route('/lipstick/' + encodeURIComponent(lipstick.brand) + '/' + encodeURIComponent(lipstick.colour));
    }

    return (
        <Fragment>
            <div className="matrix" id="matrix">
                { lipsticks.map(item)  }
            </div>
            <header className="header">
                <span>颜色</span>
                <small className="red">回头一笑百媚生，六宫粉黛无颜色</small>
            </header>
            <div className="color-search">
                <input type="text" className="input" placeholder="颜色代码，色号名称，品牌..." onKeyUp={keywordChange}/>
            </div>
        </Fragment>
    )
}