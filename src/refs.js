import React, { Component } from 'react';
import Hello from './Hello';
import MyInput from './MyInput';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class Refs extends Component {
	constructor(props) {
		super(props);
		this.textInputRef = React.createRef();
	}
	componentDidMount() {
		this.textInputRef.current.focus();
	}
	render() {
		return (
			<div style={styles}>
				<Hello name="CodeSandBox" />
				<MyInput ref={this.textInputRef} />
			</div>
		);
	}
}

export default Refs;