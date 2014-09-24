/** @jsx react.DOM */
"use strict";

var react   = require('react');
var Counter = require('../Counter');

module.exports = react.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {
      total: 0,
      counters: {}
    }
  },

  addCounter: function(e) {
    e.preventDefault();
    var value = this.refs.name.getDOMNode().value;
    var counters = this.state.counters;
    counters[value] = 0;

    this.setState({
      counters: counters
    });
  },

  updateTotal: function(name, value) {
    var counters = this.state.counters;
    var total = 0;
    counters[name] = value;

    for(var name in counters) {
      total += counters[name];
    }
    this.setState({
      counters: counters,
      total: total
    });
  },

  render: function() {
    var Counters = [];
    var counters = this.state.counters;
    for(var name in counters) {
      Counters.push(<Counter name={ name } value={ counters[name] } onChange={ this.updateTotal } key={ name }/>);
    };

    return <div className="App">
             <h1>Counter App</h1>
             <h2>Total: { this.state.total }</h2>
             { Counters }
             <form onSubmit={ this.addCounter } >
              <input type="text" ref="name"/>
              <button>Add</button>
             </form>
           </div>;
  },
});
