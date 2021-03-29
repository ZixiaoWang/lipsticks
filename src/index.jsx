import { h, render } from 'preact';
import { Router } from 'preact-router'
import { Home, BrandList, ColorsMatrix, Lipstick, Redirect } from './pages';
import { createHashHistory } from 'history';

const Main = () => {
    return (
        <div className="container">
            <Router history={createHashHistory()}>
                <BrandList path="/brands" />
                <ColorsMatrix path="/colors" />
                <Lipstick path="/lipstick/:brand/:colour" />
                <Home path="/home" />
                <Redirect path="/" to="/home" />
            </Router>
        </div>
    )
}

render(<Main />, document.body);