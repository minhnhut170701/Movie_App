import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieService from './movieService';
const initialState = {
    data: [],
    comment: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//get data
export const getData = createAsyncThunk('data/getAll', async (_,thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await movieService.getData(token)

    }catch(error){
        const message = (error.reponse && error.response.data && error.response.data.message)
         || error.message
         || error.toString()
        
         return thunkAPI.rejectWithValue(message)
    }
})

//search movie
export const searchData = createAsyncThunk('data/searchAll', async(key,thunkAPI) =>{
    try{
        return await movieService.searchData(key)
    }catch(error){
        const message = (error.reponse && error.response.data && error.response.data.message)
         || error.message
         || error.toString()
        
         return thunkAPI.rejectWithValue(message)
    }
})

//comment movie
export const setDataComment = createAsyncThunk('data/comment', async({key,data},thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await movieService.setDataComment(key,data,token)
    }catch(error){
        const message = (error.reponse && error.response.data && error.response.data.message)
         || error.message
         || error.toString()
        
         return thunkAPI.rejectWithValue(message)
    }
})

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        reset: (state) => initialState
    },

    extraReducers: (builder) =>{
        builder
        .addCase(getData.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(getData.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
        })
        .addCase(getData.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(searchData.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(searchData.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
        })
        .addCase(searchData.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(setDataComment.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(setDataComment.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.comment = action.payload
        })
        .addCase(setDataComment.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.comment = null
        })
    }
})

export const {reset} = movieSlice.actions
export default movieSlice.reducer