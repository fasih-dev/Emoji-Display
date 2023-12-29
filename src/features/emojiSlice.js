import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    emoji: [],
    error: '',
};

export const fetchEmoji = createAsyncThunk('emoji/fetchemoji', async () => {
    try {
        const response = await axios.get('https://emojihub.yurace.pro/api/all')
        return response.data
        console.log(response)
    } catch (error) {
        throw error;
    }
});

const emojiSlice = createSlice({
    name: 'emoji',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmoji.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEmoji.fulfilled, (state, action) => {
                state.loading = false;
                state.emoji = action.payload;
                state.error = '';
            })
            .addCase(fetchEmoji.rejected, (state, action) => {
                state.loading = false;
                state.emoji = [];
                state.error = action.error.message;
            });
    },
});

export default emojiSlice.reducer;
