import React from 'react'
import emojiSlice from '../features/emojiSlice';
import { configureStore } from '@reduxjs/toolkit'
import emojiCategorySlice from '../features/emojiCategorySlice';


export const store = configureStore({
    reducer: {
        emoji: emojiSlice
        // categoryEmoji: emojiCategorySlice 
    }
});

