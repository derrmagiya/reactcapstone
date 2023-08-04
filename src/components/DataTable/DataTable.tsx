import React, { useState } from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

// Internal Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { FitnessForm } from '../FitnessForm';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'exercise',
    headerName: 'Exercise',
    width: 150,
    editable: true,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  },
  {
    field: 'duration',
    headerName: 'Duration (minutes)',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  },
  {
    field: 'calories_burned',
    headerName: 'Calories Burned',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  }, 
  {
    field: 'distance',
    headerName: 'Distance',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  }, 
  {
    field: 'heart_rate',
    headerName: 'Heart Rate (bpm)',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  }, 
  {
    field: 'steps',
    headerName: 'Steps',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  },
  {
    field: 'workout_date',
    headerName: 'Workout Date',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  },
  {
    field: 'workout_time',
    headerName: 'Workout Time',
    width: 150,
    headerClassName: 'running-header',
    cellClassName: 'running-cell',
  },
  {
    field: 'random_joke',
    headerName: 'Random Joke',
    width: 150
  }
];

export const DataTable = () => {
  const { fitnessData, getData } = useGetData();
  const [open, setOpen] = useState(false);
  const [gridData, setData] = useState<GridRowSelectionModel>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    serverCalls.delete(`${gridData[0]}`);
    getData();
  };

  const myAuth = localStorage.getItem('myAuth')

if (myAuth === 'true'){
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={fitnessData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
      />
      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="warning" onClick={deleteData}>
        Delete
      </Button>
      {/* Dialog Popup for Updating a Fitness */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update a Fitness</DialogTitle>
        <DialogContent>
          <DialogContentText>Fitness id: {gridData[0]}</DialogContentText>
          <FitnessForm id={`${gridData[0]}`} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
    )}else{
      return (
        <Box>
          <Typography variant='h4'>Please Sign In to view your Fitness</Typography>
        </Box>
      )
    }
}