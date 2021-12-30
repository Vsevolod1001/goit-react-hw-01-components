import {TransactionTh, TransactionTd, TransactionTable, TransactionTbody, TransactionTr} from "./TransactionHistory.styled"

export default function ({items}) {
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
            {items.map(item => (
                 <TransactionTr key = {item.id}>
                 <TransactionTd>{item.type}</TransactionTd>
                 <TransactionTd>{item.amount}</TransactionTd>
                 <TransactionTd>{item.currency}</TransactionTd>
               </TransactionTr>
            ))}
        </TransactionTbody>
      </TransactionTable>
    )
};