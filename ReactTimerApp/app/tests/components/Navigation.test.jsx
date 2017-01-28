var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Navigation = require('Navigation');

describe('Navigation Component', () => {
    it('Should Exists', () => {
        expect(Navigation).toExist();
    });
});