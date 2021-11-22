import './App.css';
import React from 'react';
import ContentCard from './ContentCard';
import  DataModelSelect  from './DataModelSelect';
import { Card } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <DataModelSelect></DataModelSelect>
      <ContentCard></ContentCard>
    </div>
  );
}

export default App;
