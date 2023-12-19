import React, { useState } from 'react';
import UnityRoot from './UnityRoot';
import MUITable from './MUITable';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('unityRoot');

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
        App Navigation
      </Typography>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button variant={selectedComponent === 'unityRoot' ? 'contained' : 'outlined'} onClick={() => handleButtonClick('unityRoot')}>
          Unity Root
        </Button>
        <Button variant={selectedComponent === 'muiTable' ? 'contained' : 'outlined'} onClick={() => handleButtonClick('muiTable')}>
          Comment Table
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {selectedComponent === 'unityRoot' && <UnityRoot />}
        {selectedComponent === 'muiTable' && <MUITable />}
      </div>
    </div>
  );
};

export default App;
