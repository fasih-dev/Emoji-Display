import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    Categoryemoji: [],
    error: '',
};

const selectedCategory = ['smileys-and-people', 'animals-and-nature', 'food-and-drink', 'travel-and-places', 'activities', 'objects', 'flags']

export const fetchCategoryEmoji = createAsyncThunk('emoji/fetchCategoryemoji', async () => {
    try {
        const response = await axios.get('https://emojihub.yurace.pro/api/all/category/')
        return response.data
        console.log(response)
    } catch (error) {
        throw error;
    }
});

const CategoryemojiSlice = createSlice({
    name: 'Cateogryemoji',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryemoji.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategoryemoji.fulfilled, (state, action) => {
                state.loading = false;
                state.Categoryemoji = action.payload;
                state.error = '';
            })
            .addCase(fetchCategoryemoji.rejected, (state, action) => {
                state.loading = false;
                state.Categoryemoji = [];
                state.error = action.error.message;
            });
    },
});

export default CategoryemojiSlice.reducer;
