import * as React from 'react';

import {TextModel} from '../modelText';
import HistoryItem from './HistoryItem';

interface MainHistoryListProps {
    historyText: TextModel[];
}

interface MainHistoryListState {
}

class MainHistoryList extends React.Component<MainHistoryListProps, MainHistoryListState> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {historyText} = this.props;

        return (
            <section className="main">
                <ul className="todo-list">
                    {historyText.map((historyTextItem, index) => <HistoryItem key={`${index}_${historyTextItem.text}`} historyTextItem={historyTextItem}/>)}
                </ul>
            </section>
        );
    }
}

export default MainHistoryList;

