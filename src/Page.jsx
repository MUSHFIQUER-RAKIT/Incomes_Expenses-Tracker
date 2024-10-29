import { useState } from "react";
import Header from "./Header";
import SubmissionForm from "./TrackersBoard/SubmissionForm";
import TrackersBoard from "./TrackersBoard/TrackersBoard";

export default function Page() {
  const [transactions, setTransactions] = useState([]);
  const [selectedType, setSelectedType] = useState("Expense");
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const addTransaction = (newTransaction, isAdd) => {
    if (isAdd) {
      setTransactions([...transactions, newTransaction]);
    } else {
      setTransactions(
        transactions.map(txn => {
          if (txn.id === newTransaction.id) {
            return newTransaction;
          } else {
            return txn;
          }
        })
      );
    }
  };

  const handleEditTxn = newTxn => {
    setTaskToUpdate(newTxn);
    setTransactions(
      transactions.map(txn => (txn.id === newTxn.id ? newTxn : txn))
    );
  };

  const deleteTransaction = id => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  return (
    <>
      <Header />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionForm
            addTransaction={addTransaction}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            taskToUpdate={taskToUpdate}
          />
          <TrackersBoard
            transactions={transactions}
            handleEditTxn={handleEditTxn}
            deleteTransaction={deleteTransaction}
          />
        </section>
      </main>
    </>
  );
}
