import {ADDITEM,UPDATEITEM,DELETEITEM,QUANTITYCHANGE} from '../constants/constant';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';


export const products = [{
  		Itemid: 0,
  		ItemName:'Oven',
  		ItemType:'Appliances',
  		Price: 5000,
  		Quantity:12

},
{
  		Itemid: 1,
  		ItemName:'Fridger',
  		ItemType:'Home',
  		Price: 10000,
  		Quantity:1

},
{
  		Itemid: 2,
  		ItemName:'Aashirvaad Atta 10 Kg',
  		ItemType:'Grocery',
  		Price: 100,
  		Quantity:2

}]

const initialState = []

const DiscountItems=[{ItemType:'Grocery' ,Discount:5}]
const UserDiscount=[{UserType:'employee' ,Discount:30},{UserType:'affiliate' ,Discount:10},{UserType:'new' ,Discount:0}]


export default function ToDoItem(state=initialState,action) {
	switch(action.type)
	{
		case ADDITEM:
        let product =  products.filter(item => getVisibleProduct(state,item.Itemid) )
        if(product.length  == 0)
        	return state;
      
			return [
			...state
			,
				Object.assign({},product[0],{
					id:state.length = 0? 0 : state.reduce((maxid,item)=> Math.max(item.id,maxid), -1 )+1,Quantity:1,Discount:getDiscount(product[0].ItemType)
				})
			
			]
		case UPDATEITEM:
		    return state.map(item => item.id === action.id? products.filter(item => item.Itemid == itemId)[0]:item )
		case QUANTITYCHANGE:
			return state.map(item=> item.Itemid == action.id ? Object.assign({}, item, { Quantity: action.itemQuantity }):item )
		default:
		 return state;

	}

}

export function getUserDiscount(UserType) {

	let item = UserDiscount.filter(item => item.UserType ==UserType );
    if(item.length>0)
	{
		return item[0].Discount;
	}
	return 0;
}

export function getItemCollection(data,currentItemid) {
	let product =  products.filter(item => getVisibleProduct(data,item.Itemid) || item.Itemid== currentItemid)
	return product.map(item => Object.assign({value : item.Itemid,name:item.ItemName+" : "+item.ItemType}))
}

export function getDiscountedPrice(item) {
	var itemTotal = item.Quantity * item.Price;
	return   itemTotal-(itemTotal*(getDiscount(item.ItemType)/100));
}
export function getDiscountedAmount(item,discount) {
	var itemTotal = item.Quantity * item.Price;
	return   itemTotal-(itemTotal*(getDiscount(item.ItemType)/100));
}

function getDiscount(itemType) {
	var  item =  DiscountItems.filter(item => item.ItemType ==itemType);
	if(item.length>0)
	{
		return item[0].Discount;
	}
	return 0;
}

export function getQuantity(itemId) {
 	var product =  products.filter(item => item.Itemid == itemId)[0];
 	var collection = []

 	for (var i = 1; i <= product.Quantity; i++) {
 		collection.push({value:i,name:i})
 	}

 	return collection;
}

export function OrderAmount(state) {
	return	state.reduce((amount,item)=> amount+getDiscountedPrice(item) ,0)
}
export function DiscountAmount(state,discount) {
	var amount = OrderAmount(state);
	return (amount*(discount/100));
}
export function AmountPaid(state,discount) {
	debugger
	return OrderAmount(state)  - DiscountAmount(state,discount);
}

function getVisibleProduct(state,itemid) {

    var item = state.filter(item=> item.Itemid == itemid)
    
    if(item.length > 0)
    	return false;

	return true
	
}



const combinereducer = combineReducers({
  ToDoItem,
   form: formReducer 
})
export default combinereducer

