import React, { Component } from 'react';
import { bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';




class Dashboard extends Component {


  constructor() {
    super();
    this.state = {
      showSavings: false
    }
  }
  onClickHandler(e){
    e.preventDefault();
    console.log('test action');
    this.setState({showSavings: !this.state.showSavings})
  };
  savingList(){
    return this.props.savings.map((txt)=>{
      return (

        <li key={txt.id} className="listTable">{txt.description}<span className="currencyVal">$ {txt.payCheckVal}</span></li>

      );
    });
  }
  render() { 
    return (

      <div className='Dashboard'>
       
        <div className="jumbotron">
          <h2>My estimated retirement income</h2>
          <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          {this.state.showSavings && <ul className="clearfix">{this.savingList()}</ul>}
          <p><a className="btn btn-lg btn-success pull-right" href="#" role="button" onClick={this.onClickHandler.bind(this)}>View Details</a></p>
        </div>
      </div>
    );   
  }  
}
function mapStateToProps(state){
  return {
    savings: state.savings 
  }  
}




 
export default connect(mapStateToProps)(Dashboard);
