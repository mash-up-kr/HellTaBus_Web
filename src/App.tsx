import React from 'react';
import './app.scss';

interface Props {
  id?: number;
  name?: string;
}

const App: React.FC<Props> = () => {
  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
