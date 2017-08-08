import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDataAll } from '../../actions/getData';
import DataList from './dataList';


class MyAccounts extends Component {

constructor(props){
	super(props);
	this.state = {
		term: ''
	};
	this.onSubmitHandler = this.onSubmitHandler.bind(this);
	this.getInputValue = this.getInputValue.bind(this);
}
getInputValue(event){
	this.setState({term: event.target.value});
}
onSubmitHandler(event){
	event.preventDefault();
	this.props.getDataAll(this.state.term);
	this.setState({term: ''});
}
  render() {
    return (
    	<div>
    		<h3>My Accounts</h3>
	    	<form onSubmit={this.onSubmitHandler}>
	    		<input placeholder="Search Data" value={this.state.term} onChange={this.getInputValue}/>
	    		<button type="submit">Search</button>
	    	</form>
	    	<DataList/>
    	</div>
    );
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({getDataAll},dispatch);
}


export default connect(null, mapDispatchToProps)(MyAccounts);
