import { h, render } from 'preact';
import { Router, Route } from 'preact-router'
import { Home, BrandList, ColorsMatrix } from './pages';

const Main = () => {
    return (
        <div className="container">
            <Router>
                <Home path="/" />
                <BrandList path="/brands" />
                <ColorsMatrix path="/colors" />
            </Router>
        </div>
    )
}

render(<Main />, document.body);