import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as jQuery from 'jquery';

import {
  Header,
  MainHistoryList,
  modelText,
  addToHistory
} from '../../autocomplete';

interface AppProps {
  historyText: modelText.TextModel[];
  dispatch: Dispatch<{}>;
}

interface AppState {
  options: string[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props : AppProps) {
    super(props);
    this.state = { options: [] };
  }

  componentDidMount() {
    let self = this;
    jQuery.get("http://localhost:3000/getHistory").done(function(result) {
      self.setState({ options: JSON.parse(result) });
    });
  }

  render() {
    const { options } = this.state;
    const { historyText, dispatch } = this.props;
    let newOptions = options.slice();
    Array.prototype.push.apply(newOptions,historyText.map((el)=>el.text));
    return (
      <div>
        <Header addToHistory={(text: string) => dispatch(addToHistory(text))} options={newOptions} />
        <MainHistoryList historyText={historyText}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  historyText: state.historyText
});

export default connect(mapStateToProps)(App);
