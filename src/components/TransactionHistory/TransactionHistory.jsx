import PropTypes from "prop-types";

import {TransactionTh, TransactionTd, TransactionTable, TransactionTbody, TransactionTr} from "./TransactionHistory.styled"

export default function TransactionHistory ({items}) {
    return (
        <TransactionTable>
        <thead>
          <tr>
            <TransactionTh>Type</TransactionTh>
            <TransactionTh>Amount</TransactionTh>
            <TransactionTh>Currency</TransactionTh>
          </tr>
        </thead>
      
        <TransactionTbody>
            {items.map(({id, type, amount, currency})=> (
                 <TransactionTr key = {id}>
                 <TransactionTd>{type}</TransactionTd>
                 <TransactionTd>{amount}</TransactionTd>
                 <TransactionTd>{currency}</TransactionTd>
               </TransactionTr>
            ))}
        </TransactionTbody>
      </TransactionTable>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
      }),
  ),
};
