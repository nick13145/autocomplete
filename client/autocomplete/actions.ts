import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { TextModel } from './modelText';

import {
  ADD_TO_HISTORY
} from './constants/ActionTypes';

const addToHistory = createAction<TextModel, string>(
    ADD_TO_HISTORY,
    (text: string) => ({ text })
);

export {
  addToHistory
}
