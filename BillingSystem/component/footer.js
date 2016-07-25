import React,{Component,Protype} from 'react';
import * as actions from '../actions/itemAction';
import {connect} from 'react-redux';
import {bindActionCreators}from 'redux'
import { OrderAmount,DiscountAmount,AmountPaid} from '../reducers/item'

class Footer extends Component
{
	render()
	{
		const {data,discount} = this.props;
		debugger
		return <table>
			      <tr>
			      <th></th>
			      <th></th>
			     
			      <th>Order Value</th>
			       <th>:</th>
			      <th>{OrderAmount(data)}</th>
			      </tr>
			      <tr><th></th>
			      <th></th>
			      <th>Discount {discount}%</th>
			      <th>:</th>
			      <th>{DiscountAmount(data,discount)}</th>
			      </tr>
			      <tr><th></th>
			      <th></th>
			      <th>Amount to be paid</th>
			      <th>:</th>
			      <th>{AmountPaid(data,discount)}</th>
			      </tr>
			    </table>
	}
}

function getItems(state) {
		
	return {data:state.ToDoItem
	}
}
function getAction(dispatch) {
	return {action:bindActionCreators(actions,dispatch)}
}

export default connect(getItems,getAction)(Footer)