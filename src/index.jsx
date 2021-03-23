import { h, render } from 'preact';
import { Router, Route } from 'preact-router'
import { Home, BrandList, ColorsMatrix, Lipstick } from './pages';
import { createHashHistory } from 'history';

const Main = () => {
    return (
        <div className="container">
            <Router history={createHashHistory()}>
                <BrandList path="/brands" />
                <ColorsMatrix path="/colors" />
                <Lipstick path="/lipstick/:brand/:colour" />
                <Home default />
            </Router>
        </div>
    )
}

render(<Main />, document.body);