import {Component} from "react";

import './styles.css';

export class TextInput extends Component {
    render() {
        const {searchValue, handleChange} = this.props;

        return (
            <input
                onChange={handleChange}
                value={searchValue}
                type="search"
                className="text-input" />
        )
    }
}