import { useState } from "react";
import Header from "./Header";
import SubmissionForm from "./TrackersBoard/SubmissionForm";
import TrackersBoard from "./TrackersBoard/TrackersBoard";

export default function Page() {
  const [transactions, setTransactions] = useState([]);
  const [selectedType, setSelectedType] = useState("Expense");

  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };

  const updateTransaction = updatedTransaction => {
    setTransactions(
      transactions.map(txn =>
        txn.id === updatedTransaction.id ? updatedTransaction : txn
      )
    );
  };

  const deleteTransaction = id => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  const summary = transactions.reduce(
    (acc, txn) => {
      if (txn.type === "Income") acc.income += txn.amount;
      else acc.expense += txn.amount;

      acc.balance = acc.income - acc.expense;
      return acc;
    },
    { income: 0, expense: 0, balance: 0 }
  );

  return (
    <>
      <Header />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionForm
            addTransaction={addTransaction}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <TrackersBoard
            transactions={transactions}
            updateTransaction={updateTransaction}
            deleteTransaction={deleteTransaction}
            summary={summary}
          />
        </section>
      </main>
    </>
  );
}
