import * as React from 'react';
import * as classNames from 'classnames';
import Option from './Option';

interface OptionsProps {
    show: boolean;
    options: any;
    onOptionSelected?: any;
}
interface OptionsState {
}

class Options extends React.Component<OptionsProps, OptionsState> {
    private input: any;

    constructor() {
        super();
    }

    onClick(index) {
        this.props.onOptionSelected(index)
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        let options = this.props.options.map((option, index) => {
            let key = option + '_' + index;
            return <Option
                value={option}
                onClick={this.onClick.bind(this, index)}
                key={key}/>
        });

        return (
            <ul>
                {options}
            </ul>
        )
    }

}


export default Options;
