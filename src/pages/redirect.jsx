import { h } from 'preact';
import { route } from 'preact-router';

export const Redirect = (props) => {
    if (props.to) {
        route(props.to);
    }
    return null;
}