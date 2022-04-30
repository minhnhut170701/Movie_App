import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieService from './movieService';
const initialState = {
    data: [],
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
    }
})

export const {reset} = movieSlice.actions
export default movieSlice.reducer