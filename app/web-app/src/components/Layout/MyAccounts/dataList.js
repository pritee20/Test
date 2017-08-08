import React, { Component } from 'react';
import { connect } from 'react-redux';



class DataList extends Component {
  renderDataList(){
    return this.props.getData.map((postID) => {
      return (
          <tr key={postID.id}>
            <td>{postID.postId}</td>
            <td>{postID.name}</td>
            <td>{postID.email}</td>
            <td>{postID.body}</td>
          </tr>
      )
    })
  }
  render() {
    return (
    	<table className="table table-hover">
    		<thead>
    			<tr>
    				<th>Post ID</th>
    				<th>Name</th>
    				<th>Email</th>
    				<th>Description</th>
    			</tr>
    		</thead>
    		<tbody>{this.renderDataList()}</tbody>
	    	
    	</table>
    );
  }
}


function mapStateToProps(state){
	return {getData: state.getData}
}
export default connect(mapStateToProps)(DataList);
