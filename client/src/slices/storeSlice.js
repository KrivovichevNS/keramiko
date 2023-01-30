import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    categories: [],
    basket: [],
}

export const loadProducts = createAsyncThunk(
    'loadProducts',
    async (category) => {
        if (category === 'all') {
            const data = await fetch('http://localhost:1717/api/products')
            return data.json()
        } else {
            const data = await fetch(`http://localhost:1717/api/products/${category}`)
            return data.json()
        }
    }
)

export const loadCategories = createAsyncThunk(
    'loadCategories',
    async () => {
        const data = await fetch('http://localhost:1717/api/products/allcat')
        return data.json()
    }
)

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            console.log(action);
            const category_id = action.payload.cat_id
            const products = action.payload.prod.products
            state.products = products.filter(product => product.category_id === category_id)
        },
        setBasket: (state, action) => {
            state.basket.push(action.payload)
        },
        deleteFromBasket: (state, action) => {
            state.basket = state.basket.filter(prdct => prdct !== action.payload.id)
        },
        clearBasket: (state, action) => {
            state.basket = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
    }

})

export const { filterProducts, setBasket, deleteFromBasket, clearBasket } = storeSlice.actions
export const selectProducts = state => state.store.products
export const selectCategories = state => state.store.categories
export const selectBasket = state => state.store.basket
export default storeSlice.reducer
