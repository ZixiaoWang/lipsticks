import { h, render } from 'preact';
import { Router, Route } from 'preact-router'
import { Home, BrandList, ColorsMatrix, Lipstick } from './pages';

const Main = () => {
    return (
        <div className="container">
            <Router>
                <Home path="/" />
                <BrandList path="/brands" />
                <ColorsMatrix path="/colors" />
                <Lipstick path="/lipstick/:brand/:colour" />
            </Router>
        </div>
    )
}

render(<Main />, document.body);