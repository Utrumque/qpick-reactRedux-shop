import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async function (_, { rejectWithValue }) {
		try {
			const response = await axios.get("https://628503cea48bd3c40b79915a.mockapi.io/products")
			const data = response.data

			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const setError = (state, action) => {
	state.status = "rejected"
	state.error = action.payload
}

const initialState = {
	values: [],
	status: null,
	error: null,
}

export const productsSlice = createSlice({
	name: "products",
	initialState,
	//reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.status = "loading"
			state.error = null
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.status = "resolved"
			state.values = action.payload
		},
		[fetchProducts.rejected]: setError,
	},
})

//export const {} = productsSlice.actions

export default productsSlice.reducer
