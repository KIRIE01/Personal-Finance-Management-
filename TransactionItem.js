// src/components/TransactionItem.js
import React from 'react';
import './TransactionItem.css';

const TransactionItem = ({ date, type, description, amount }) => {
  return (
    <div className="transaction-item">
      <div className="transaction-date">
        <span>{date}</span>
      </div>
      <div className="transaction-details">
        <span className={`transaction-type ${type.toLowerCase()}`}>
          {type === 'Income' ? '⬤' : '⬤'}
        </span>
        <span>{description}</span>
      </div>
      <div className="transaction-amount">
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default TransactionItem;
