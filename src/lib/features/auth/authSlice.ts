import { fetcher } from "@/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface AuthInfo {
    user: object | null;
    isAuthenticated: boolean;
    isLoading?: boolean;
    error?: string | null;
}
const initialState: AuthInfo = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
}
export const getLoggedInUser = createAsyncThunk('auth/me', async () => {
    const credentials = await fetcher('/auth/me');
    console.log(credentials)
    return credentials;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.success;
            state.isLoading = false;
            state.error = null;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getLoggedInUser.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        }).addCase(getLoggedInUser.fulfilled, (state, action) => {
            if (action.payload.success) {
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.isLoading = false;
                state.error = null;
            } else {
                state.isLoading = false;
                state.error = action.payload.message;
            }
        }).addCase(getLoggedInUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!';
        })
    }
})

export const { setUser, clearUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;