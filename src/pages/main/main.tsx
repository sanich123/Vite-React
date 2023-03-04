import { useState } from 'react';
import '../../styles/entry.scss';
import styles from './main.module.scss';
import React from 'react';
import Header from 'src/components/header/header';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
    </div>
  );
}
