import { h, Fragment } from 'preact';
import { route } from 'preact-router';

export const Home = () => {
    const gotoBrands = () => {
        route('/brands');
    }

    const gotoColors = () => {
        route('/colors');
    }

    return (
        <Fragment>
             <div className="home">
                <p>
                    <span>嘿朋友</span>
                </p>
                <p>
                    <span>你是否遇到了传说中的</span> <br/>
                    <span className="red">口红</span>
                    <span>难题？</span>
                </p>
                <p>
                    <span>什么</span>
                    <span style={{ color: "rgb(202, 37, 35)" }}> Prada</span>, 
                    <span style={{ color: "rgb(223, 109, 111)" }}> Ryan Lo</span>,
                    <span style={{ color: "rgb(227, 33, 59)" }}> Agnona</span>... <br/>
                    <span>介不都是</span> 
                    <span style={{ color: "rgb(255, 0, 0)", fontWeight: 700 }}>大红色</span> 
                    <span>吗？</span>
                </p>
                <p>
                    <span>别担心我的朋友</span> <br/>
                    <span>试试这个小玩意</span>
                </p>
                <button onClick={gotoBrands}>
                    <span className="small">BY</span>
                    <span>品牌</span>
                </button>
                <button onClick={gotoColors}>
                    <span className="small">BY</span>
                    <span>颜色</span>
                </button>
            </div>
        </Fragment>
    )
}