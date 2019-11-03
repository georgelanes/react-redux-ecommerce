import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        // const prodIndex = draft.findIndex(p => p.id === action.product.id);
        // if (prodIndex >= 0) {
        //   draft[prodIndex].amount += 1;
        // } else {
        //   draft.push({ ...action.product, amount: 1 });
        // }

        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const prodIndex = draft.findIndex(p => p.id === action.id);
        if (prodIndex >= 0) {
          draft.splice(prodIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const prodIndex = draft.findIndex(p => p.id === action.id);
        if (prodIndex >= 0) {
          draft[prodIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
