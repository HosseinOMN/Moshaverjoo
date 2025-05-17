import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchDoctor = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log('جستجو برای:', search);
    
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        fullWidth
        label="نام پزشک یا تخصص"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
        onClick={handleSearch}
      >
        جستجو
      </Button>
    </div>
  );
};

export default SearchDoctor;
