/* eslint-disable react/prop-types */
import BalanceBoard from "./BalanceBoard";
import BalanceList from "./BalanceList";

export default function TrackersBoard({
  transactions,
  onEdit,
  deleteTransaction,
}) {
  const incomeTransactions = transactions.filter(txn => txn.type === "Income");
  const expenseTransactions = transactions.filter(
    txn => txn.type === "Expense"
  );

  return (
    <>
      <div className="lg:col-span-2">
        <div className="lg:col-span-2">
          <BalanceBoard transactions={transactions} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <BalanceList
              transactions={incomeTransactions}
              type="Income"
              onEdit={onEdit}
              deleteTransaction={deleteTransaction}
            />
            <BalanceList
              transactions={expenseTransactions}
              type="Expense"
              onEdit={onEdit}
              deleteTransaction={deleteTransaction}
            />
          </div>
        </div>
      </div>
    </>
  );
}
