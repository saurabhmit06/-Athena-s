import React,{Component,Protype} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators}from 'redux'
import { getItemCollection,getDiscountedPrice,getQuantity} from '../reducers/item'
import * as actions from '../actions/itemAction';

class ItemControl extends Component
{

	render()
	{

          const {data,action} = this.props;
	      return <table><tbody>
	             <tr><th></th><th></th><th></th><th></th><th><input type="button" value="Add Item" onClick={action.AddItem} /></th></tr>
			      <tr><th>Item</th><th>Quantity</th><th>PricePerUnit</th><th>Discount</th><th>Price</th></tr>
			      {
					data.map((item,i) => <tr key={i}>
						<td><DropDown data={getItemCollection(data,item.Itemid)} selectedValue={item.ItemId}  /></td>
						<td><DropDown data={getQuantity(item.Itemid)} value={item.Quantity} itemId = {item.Itemid} action={action.QuantityChange}/></td>
						<td>{item.Price}</td>
						<td>{item.Discount}%</td>
						<td>{getDiscountedPrice(item)}</td>
						</tr>)

			      }
			      </tbody>
                </table>;

	}
}


class DropDown extends Component
{

	handelChange(e){
debugger;
		this.props.action(this.props.itemId, parseInt( e.target.value));

	}


	render(){

		const {data,selectedValue,action} = this.props;
		return <select defaultValue = {selectedValue}  onChange={this.handelChange.bind(this)} >
		{ 
			data.map(item => <option key={item.value} value={item.value}  >{item.name}</option> )
		}
		</select>
	}
}


function getItems(state) {
		
	return {data:state.ToDoItem
	}
}
function getAction(dispatch) {
	return {action:bindActionCreators(actions,dispatch)}
}

export default connect(getItems,getAction)(ItemControl)
