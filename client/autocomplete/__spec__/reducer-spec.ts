/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import reducer from '../reducer';
import { TextModel } from '../modelText';

import {
    ADD_TO_HISTORY
} from '../constants/ActionTypes';

describe('todo reducer', () => {
  it('handles add', () => {
    let state: TextModel[] = [{  text: '' }];

    state = reducer(state, {
      type: ADD_TO_HISTORY,
      payload: { text: 'TestCase'}
    });

    expect(state[0]).to.eql(
      { text: 'TestCase'}
    );
  });

});

