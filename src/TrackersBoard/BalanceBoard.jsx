import BalanceType from "../utility/balanceType";

/* eslint-disable react/prop-types */
export default function BalanceBoard({ transactions }) {
  const { income, expense, balance } = transactions.reduce(
    (acc, txn) => {
      if (txn.type === "Income") acc.income += txn.amount;
      else acc.expense += txn.amount;

      acc.balance = acc.income - acc.expense;
      return acc;
    },
    { income: 0, expense: 0, balance: 0 }
  );
  // const colors =

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <BalanceType
            type={balance}
            value="Balance"
            color={balance < 0 ? "text-red-600" : ""}
          />
          <BalanceType type={income} value="Total Income" />
          <BalanceType type={expense} value="Total Expense" />
        </dl>
      </div>
    </div>
  );
}
