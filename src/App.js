import './App.css';
import { useEffect, useState } from 'react';

import MainLayout from './layouts/MainLayout';

function App() {
  const [allDrugs, setAllDrugs] = useState([]);

  // leave array empty to only fire once
  useEffect(() => {
    const fetchDrugs = async () => {
      const rsp = await fetch('/drugs.json');
      const drugs = await rsp.json();
      setAllDrugs(drugs);
    };
    fetchDrugs();
  }, []);
  
  if (allDrugs === null) {
    return 'Loading ... '
  }
  
  return (
    <MainLayout drugs={ allDrugs } />
  );
}

export default App;
