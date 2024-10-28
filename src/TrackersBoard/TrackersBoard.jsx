/* eslint-disable react/prop-types */
import BalanceBoard from "./BalanceBoard";
import BalanceList from "./BalanceList";

export default function TrackersBoard({
  transactions,
  updateTransaction,
  deleteTransaction,
  summary,
}) {
  const incomeTransactions = transactions.filter(txn => txn.type === "Income");
  const expenseTransactions = transactions.filter(
    txn => txn.type === "Expense"
  );

  return (
    <>
      <div className="lg:col-span-2">
        <div className="lg:col-span-2">
          <BalanceBoard summary={summary} />
          <BalanceList
            transactions={incomeTransactions}
            type="Income"
            updateTransaction={updateTransaction}
            deleteTransaction={deleteTransaction}
          />
          <BalanceList
            transactions={expenseTransactions}
            type="Expense"
            updateTransaction={updateTransaction}
            deleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </>
  );
}
