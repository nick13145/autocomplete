import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import {TextModel, IStateModel} from "./modelText";

import {
  ADD_TO_HISTORY
} from './constants/ActionTypes';


// const initialState: IStateModel = [<TextModel>{
//   text: 'Russia',
// }];

const initialState: IStateModel = [];

export default handleActions<IStateModel, TextModel>({
  [ADD_TO_HISTORY]: (state: IStateModel, action: Action<TextModel>): IStateModel => {
    return [{
      text: action.payload.text
    }, ...state];
  },

}, initialState);
