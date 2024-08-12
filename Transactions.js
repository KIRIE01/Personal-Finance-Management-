// src/components/Transactions.js
import React from 'react';
import TransactionItem from './TransactionItem';
import './Transactions.css';

const Transactions = () => {
  const transactions = [
    {
      date: '31 December 2023',
      type: 'Expense',
      description: 'Housing',
      amount: '-$600.00',
    },
    {
      date: '28 December 2023',
      type: 'Income',
      description: 'Wage, invoices',
      amount: '$1,500.00',
    },
    {
      date: '10 December 2023',
      type: 'Income',
      description: 'Interests, dividends',
      amount: '$100.00',
    },
    {
      date: '1 December 2023',
      type: 'Expense',
      description: 'Transportation',
      amount: '-$50.00',
    },
    {
      date: '30 November 2023',
      type: 'Expense',
      description: 'Housing',
      amount: '-$600.00',
    },
    {
      date: '28 November 2023',
      type: 'Income',
      description: 'Wage, invoices',
      amount: '$1,500.00',
    },
    {
      date: '1 November 2023',
      type: 'Expense',
      description: 'Transportation',
      amount: '-$50.00',
    },
  ];

  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const month = transaction.date.split(' ')[1] + ' ' + transaction.date.split(' ')[2];
    if (!groups[month]) {
      groups[month] = [];
    }
    groups[month].push(transaction);
    return groups;
  }, {});

  return (
    <div className="transactions">
      {Object.keys(groupedTransactions).map((month) => (
        <div key={month} className="transaction-group">
          <h3>{month}</h3>
          {groupedTransactions[month].map((transaction, index) => (
            <TransactionItem key={index} {...transaction} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Transactions;
