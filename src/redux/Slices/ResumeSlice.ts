import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'YOUR_API_URL_HERE';  

export const downloadCV = createAsyncThunk(
  'users/downloadCV',
  async () => {
    const response = await axios.get(`${api}user/xls`, {
      responseType: 'blob',
    });
    if (response.status === 200) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users.xls');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  }
);

interface DataState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  status: 'idle',
  error: null,
};

const dataSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(downloadCV.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(downloadCV.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      // .addCase(downloadCV.rejected, (state, action: PayloadAction<string | undefined>) => {
      //   state.status = 'failed';
      //   state.error = action.payload ?? 'An error occurred';
      // });
  },
});

export default dataSlice.reducer;
