import { h, Fragment } from 'preact';
import { route } from 'preact-router';
import { SORTED_LIPSTICKS } from '../services/lipsticks.service.js';

export const ColorsMatrix = () => {

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

    const goto = (lipstick) => {
        route('/lipstick/' + encodeURIComponent(lipstick.brand) + '/' + encodeURIComponent(lipstick.colour));
    }

    return (
        <Fragment>
            <div className="matrix" id="matrix">
                { SORTED_LIPSTICKS.map(item)  }
            </div>
            <header className="header">
                <span>颜色</span>
                <small className="red">回头一笑百媚生，六宫粉黛无颜色</small>
            </header>
            <div className="color-search">
                <input type="text" className="input" placeholder="颜色代码，色号名称，品牌..."/>
            </div>
        </Fragment>
    )
}