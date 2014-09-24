/** @jsx react.DOM */
"use strict";

var react   = require('react');

module.exports = react.createClass({
  displayName: 'Counter',
  getInitialState: function() {
    return {
      value: 0
    };
  },
  onAdd: function() {
    var value = this.state.value;
    value += 1;
    this.setState({value: value});

    this.props.onChange(this.props.name, value);
  },

  onMinus: function() {
    var value = this.state.value;
    value -= 1;
    this.setState({value: value});

    this.props.onChange(this.props.name, value);
  },

  render: function() {
    return <div className="Counter">
             <h2>{ this.props.name }: { this.props.value }</h2>
             <button onClick={ this.onAdd } >+</button>
             <button onClick={ this.onMinus }>-</button>
           </div>;
  },
});
