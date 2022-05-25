import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import commentService from "./commentService"
const initialState = {
    data: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getComment = createAsyncThunk("comment/getAll", async(_,thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await commentService.getComment(token)
    }catch(error){
        const message = (error.reponse && error.response.data && error.response.data.message)
         || error.message
         || error.toString()
        
         return thunkAPI.rejectWithValue(message)
    }
})


export const commentSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getComment.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(getComment.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
        })
        .addCase(getComment.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
   
})

export const {reset} = commentSlice.actions
export default commentSlice.reducer