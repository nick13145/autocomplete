import * as React from 'react';
import * as classNames from 'classnames';
import Options from './Options';


const KEY_ENTER = 13;
const KEY_ESC = 27;


interface TodoTextInputProps {
    options?: any;
    maxOptionsCount: number;
    text?: string;
    defaultValue?: string;
    placeholder?: string;
    onInputEmpty?: any;
    onOptionSelected?: (index: number) => void;
}
interface TodoTextInputState {
    showResults?: boolean;
    selectedIndex?: number;
    results?: any;
    text?: string;
}

class Typeahead extends React.Component<TodoTextInputProps, TodoTextInputState> {
    public static defaultProps: Partial<TodoTextInputProps> = {
        defaultValue: "",
        placeholder: "Введите текст",
        maxOptionsCount: -1
    };

    private input: any;

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.defaultValue !== this.props.defaultValue) {
            this.input.value = this.props.defaultValue;
        }
    }


    hide() {
        this.setState({showResults: false});
    }

    show() {
        this.setState({showResults: true});
    }

    processResults(value) {
        let results = this.props.options.filter((option) => {
            return option.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

        if (this.props.maxOptionsCount > 0) {
            results = results.slice(0, this.props.maxOptionsCount);
        }
        this.setState({results: results, selectedIndex: 0});
        this.show();

    }

    selectOption() {
        let selectedIndex = this.state.selectedIndex;
        let selectedOption = this.state.results[selectedIndex];
        if (selectedOption) {
            this.input.value = selectedOption;
        }
        this.hide();
    }

    setSelectedIndex(index, callback?) {
        this.input.focus();
        this.setState({selectedIndex: index}, callback);
    }


    handleKeyPress(keyCode) {
        switch (keyCode) {
            case KEY_ENTER:
                let showResults = this.state.showResults;
                let selectedIndex = this.state.selectedIndex;
                let selectedOption = this.state.results[selectedIndex];

                if (showResults) {
                    let value = this.input.value;
                    if (value.trim() !== '') {
                        this.setState({results: [], selectedIndex: 0});
                        this.props.onOptionSelected(value.trim());
                        this.hide()
                    }
                } else {
                    if (selectedOption) {
                        this.props.onOptionSelected(selectedOption);
                    }
                    this.selectOption();
                }

                break;
            case KEY_ESC:
                this.hide();
                break;
        }
    }

    onKeyUp(event) {
        this.handleKeyPress(event.keyCode);
    }

    onOptionSelected(index) {
        this.setSelectedIndex(index, this.selectOption);
    }

    onChange() {
        let value = this.input.value;
        if (value.trim() !== '') {
            this.processResults(value);
        } else {
            this.hide();
            this.props.onInputEmpty();
        }
    }

    onMouseUp() {
        let value = this.input.value;
        this.processResults(value);

    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => {
                        if (input != null) {
                            this.input = input;
                        }
                    }}
                    defaultValue={this.props.defaultValue}
                    placeholder={this.props.placeholder}
                    onKeyUp={this.onKeyUp.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onMouseUp={this.onMouseUp.bind(this)}
                />
                <Options
                    show={this.state.showResults}
                    options={this.state.results}
                    onOptionSelected={this.onOptionSelected.bind(this)}
                />
            </div>
        );

    }
}


export default Typeahead;
