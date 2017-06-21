/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import * as actions from '../actions';

describe('actions', () => {
  it('creates new item to history', () => {
    const { payload: historyText } = actions.addToHistory('hello');

    expect(historyText.text).to.eql('hello');
  });

});
