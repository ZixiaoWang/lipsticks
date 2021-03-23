import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import { brandsMap } from '../services/brands.service';

function copyToClipboard(containerid) {
    const elem = document.getElementById(containerid);
    elem.select();
    elem.setSelectionRange(0, 1000);
    document.execCommand('copy');
    
    document.getSelection().removeAllRanges();
    return true;
  }

export const Lipstick = (props) => {
    const lipsticks = brandsMap.get(props.brand) || [];
    const lipstick = lipsticks.find((item => item.colour.toLowerCase() === props.colour.toLowerCase()));
    const [copied, setCopied] = useState(0);

    const copy = () => {
        const result = copyToClipboard('lipstickinfo');
        if (result) {
            const ele = document.getElementById('lipstickinfo');
            if (ele) {
                ele.classList.add('copied');
                setCopied(Math.random());
            } else {
               setCopied(-1 * Math.random());
            }
        } else {
            setCopied(-1 * Math.random());
        }
    }

    return (
        <Fragment>
            <div className="lipstick">
                <div className="lipstick-effect">
                    <div className="lipstick-color" style={{ backgroundColor: lipstick.hex }}></div>
                    <div className="lipstick-cover"></div>
                </div>
                <div className="lipstick-info">
                    <div className="row">
                        <textarea className="keyword" id="lipstickinfo" autoCorrect="false">
                            { props.brand }, { props.colour }
                        </textarea>
                        <small className="extra-small">
                            <span>&nbsp;&nbsp;</span>
                            <span>请谨慎使用剪贴板，以防止第三方软件读取您的剪贴板</span>
                        </small>
                    </div>
                    <div className="row">
                        <div className="center">
                            <button class="lipstick-button" onClick={copy}>
                                <span>点击复制品牌和颜色</span>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center">
                            {
                                (copied !== 0) ?
                                (copied > 0 && <span class="grey">已复制至您的剪贴板</span>) :
                                (copied < 0 && <span className="red">未能复制，请手动选择范围并复制</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <header className="header lipstick-header">
                <span>{ props.brand }</span>
                <small style={{ color: lipstick.hex }}>{ props.colour }</small>
            </header>
        </Fragment>
    )
}