import * as React from 'react';

import Typeahead from './Typeahead';

interface HeaderProps {
    addToHistory: (text: string) => any;
    options: string[];
}
;

class Header extends React.Component<HeaderProps, void> {

    onOptionSelected(option) {
        if (option.length !== 0) {
            this.props.addToHistory(option);
        }
    }

    onInputEmpty() {
        console.warn("Typeahead input is empty!");
    }

    render() {
        const {options} = this.props;

        return (
            <header className="header">
                <Typeahead options={options}
                           onOptionSelected={this.onOptionSelected.bind(this)}
                           onInputEmpty={this.onInputEmpty.bind(this)}
                           maxOptionsCount={-1}
                />
            </header>
        );
    }
}

export default Header;
