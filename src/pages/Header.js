import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Header() {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  return (
    <div>
      <header>
        <h1>App</h1>
        <div>
          <button>login</button>
          <button>signup</button>
        </div>
        <div>
          <button>logout (?)</button>
        </div>
      </header>
    </div>
  );
}
