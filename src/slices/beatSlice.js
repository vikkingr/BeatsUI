import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  beats: [], 
  selectedBeatId: null, 
  isLoading: false, 
  error: null, 
};

const beatSlice = createSlice({
  name: 'beats',
  initialState,
  reducers: {
    setBeats: (state, action) => {
      state.beats = action.payload;
      state.error = null;
    },
    addBeat: (state, action) => {
      state.beats.push(action.payload);
    },
    removeBeat: (state, action) => {
      state.beats = state.beats.filter(beat => beat.id !== action.payload);
    },
    selectBeat: (state, action) => {
      state.selectedBeatId = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setBeats, addBeat, removeBeat, selectBeat, setLoading, setError, clearError } = beatSlice.actions;
export default beatSlice.reducer;
