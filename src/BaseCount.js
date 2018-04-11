import React, { Component } from 'react';
import './BaseCount.css';

const BaseCount = (BasicComponent) => {
	return class BaseCount extends Component {
		constructor(props){
			super(props);
			this.state = {
				count :0
			}
			this.incrementCount = this.incrementCount.bind(this);

		}
		incrementCount() {
			this.setState((prevState) => ({
				count : prevState.count + 1
			}));
		}
		render() {
			return(
				<div className="container">
					<BasicComponent {...this.state} increment = {this.incrementCount} />
				</div>
			);
		}
	}
}

const Button = (props) => {
	return (
		<button className="btn blue-btn" onClick={() => props.increment()} >Count : {props.count}</button>
	);
}

const Label = (props) => {
	return (
		<label onMouseLeave={() => props.increment()}>Count : {props.count}</label>
	);
}

const ExtendedButton = BaseCount(Button);
const ExtendedLabel = BaseCount(Label);

class Container extends Component {
	render() {
		return (
			<div>
				<ExtendedButton />
				<ExtendedLabel />
			</div>
		);
	}
}

export default Container;