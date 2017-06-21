import * as React from 'react';

import {TextModel} from '../modelText';

interface HistoryItemProps {
    historyTextItem: TextModel;
}

interface HistoryItemState {
}

class HistoryItem extends React.Component<HistoryItemProps, HistoryItemState> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {historyTextItem} = this.props;

        return  (<li>{historyTextItem.text}</li>);

    }
}

export default HistoryItem;
