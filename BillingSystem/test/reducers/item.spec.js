import expect from 'expect'
import ToDoItem from '../../reducers/item'
import * as types from '../../constants/constant'

describe('ToDoItem reducer', () => {
  it('should handle initial state', () => {
    expect(ToDoItem([], {})).toEqual({ ToDoItem: [], form: {} })
  })

  it('should handle ADDITEM', () => {
    expect(
      ToDoItem([], {
        type: types.ADDITEM,
        text: 'Run the tests'
      })
    ).toEqual({ ToDoItem: [ { Discount: 0, ItemName: 'Oven',
     ItemType: 'Appliances', Itemid: 0,
      Price: 5000, Quantity: 1, id: 0 } ], form: {} })
  })

  it('should handle EDITITEM', () => {
    expect(
      ToDoItem(
        { ToDoItem: [ { Discount: 0, ItemName: 'Oven',
     ItemType: 'Appliances', Itemid: 0,
      Price: 5000, Quantity: 1, id: 0 } ], form: {} }, 
      {
        type: types.QUANTITYCHANGE,
        id: 0,
        itemQuantity:12
      })
    ).toEqual({ ToDoItem: [ { Discount: 0, ItemName: 'Oven',
     ItemType: 'Appliances', Itemid: 0,
      Price: 5000, Quantity: 12, id: 0 } ], form: {} })
  })

})
