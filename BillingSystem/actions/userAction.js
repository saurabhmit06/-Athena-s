import * as types from '../constants/constant';

export function AddUser(id) {
	return {
		type:types.ADDITEM,
		id
	}
}

export function UpdateItem(id) {
	return {
		type:types.UPDATEITEM,
		id
	}
}

export function DeleteItem(itemId) {
	return {
		type:types.DELETEITEM,
		itemId
	}
}

export function QuantityChange(id,itemQuantity) {
	return {
		type:types.QUANTITYCHANGE,
		id,
		itemQuantity
	}
}

export default function getAllProducts() {
	return [];
}