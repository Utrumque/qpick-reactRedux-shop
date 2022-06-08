import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchFavourites = createAsyncThunk(
	"favourites/fetchFavourites",
	async function (_, { rejectWithValue }) {
		try {
			const response = await axios.get("https://628503cea48bd3c40b79915a.mockapi.io/favourite")
			const data = response.data

			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addFavourite = createAsyncThunk(
	"favourites/addFavourite",
	async function (obj, { rejectWithValue, dispatch }) {
		try {
			await axios.post("https://628503cea48bd3c40b79915a.mockapi.io/favourite", obj)
			dispatch(onAddToFavorite({ obj }))
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteFavourite = createAsyncThunk(
	"favourites/deleteFavourite",
	async function (id, { rejectWithValue, dispatch }) {
		try {
			axios.delete(`https://628503cea48bd3c40b79915a.mockapi.io/favourite/${id}`)
			dispatch(onDeleteFromFavorite({ id }))
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
	isFavourite: false,
	status: null,
	error: null,
}

export const favouritesSlice = createSlice({
	name: "favourites",
	initialState,
	reducers: {
		onAddToFavorite: (state, action) => {
			state.values.push(action.payload)
		},
		onDeleteFromFavorite: (state, action) => {
			state.values = state.values.filter((value) => value.id !== action.payload.id)
		},
		toggleComplete(state, action) {
			const toggledFav = state.values.find((value) => value.obj === action.payload.obj)
			toggledFav.completed = !toggledFav.completed
		},
	},
	extraReducers: {
		[fetchFavourites.pending]: (state) => {
			state.status = "loading"
			state.error = null
		},
		[fetchFavourites.fulfilled]: (state, action) => {
			state.status = "resolved"
			state.values = action.payload
		},
		[fetchFavourites.rejected]: setError,
		[deleteFavourite.rejected]: setError,
		[addFavourite.rejected]: setError,
	},
})

export const { onAddToFavorite, onDeleteFromFavorite } = favouritesSlice.actions

export default favouritesSlice.reducer
