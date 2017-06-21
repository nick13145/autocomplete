import * as React from 'react';
import * as classNames from 'classnames';

interface OptionProps {
    value: string;
    onClick: any;
}
interface OptionState {
}

class Option extends React.Component<OptionProps, OptionState> {

    constructor() {
        super();
    }

    render() {
        return (
            <li onClick={this.props.onClick}>
                <span >{this.props.value}</span>
            </li>
        );

    }

}

export default Option;
