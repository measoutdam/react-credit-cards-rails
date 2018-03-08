import React from "react"
import PropTypes from "prop-types"
import Cards from "react-credit-cards";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '', name: '', expiry: '', cvc: '', focused: 'number', inputs: null
    };
    this.state.inputs = ["number", "name", "expiry", "cvc"].map(
      (input_name) =>{
        return(
          <input
            key={input_name}
            type="text"
            name={input_name}
            onChange={ this.handleChange.bind(this) }
            onFocus ={ this.handleFocus.bind(this) }
            placeholder={input_name}
          />
        );
      }
    )
  }

  handleFocus(e){
    this.setState({focused: e.target.name});
  }
  handleChange(e) {
    this.setState({focused: e.target.name});
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.number);
  }

  render () {
    return (
      <React.Fragment>
      <Cards
        number={this.state.number}
        name={this.state.name}
        expiry={this.state.expiry}
        cvc={this.state.cvc}
        focused={this.state.focused}
        />
      <p>
        {this.state.inputs}
      </p>
      </React.Fragment>
    );
  }
}

export default CreditCard
