import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    categories: [],
    basket: [],
    oneProduct: '',
}

export const loadProducts = createAsyncThunk(
    'loadProducts',
    async (category) => {
        if (category === 'all') {
            const data = await fetch('/api/products')
            return data.json()
        } else {
            const data = await fetch(`/api/products/${category}`)
            return data.json()
        }
    }
)

export const loadProduct = createAsyncThunk(
    'loadProduct',
    async (id) => {
        const data = await fetch(`/api/products/product/${id}`)
        return data.json()
    }
)

export const loadCategories = createAsyncThunk(
    'loadCategories',
    async () => {
        const data = await fetch('/api/products/allcat')
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
        clearBasket: (state, action) => {
            state.basket = []
        },
        sliceBasket: (state, action) => {
            state.basket = state.basket.filter(el => el.id !== action.payload)
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
            .addCase(loadProduct.fulfilled, (state, action) => {
                console.log(action.payload, 'PAYLOAD IN SLICE');
                state.oneProduct = action.payload
            })
    }

})

export const { filterProducts, setBasket, clearBasket, sliceBasket } = storeSlice.actions
export const selectProducts = state => state.store.products
export const selectCategories = state => state.store.categories
export const selectBasket = state => state.store.basket
export const selectOneProduct = state => state.store.oneProduct
export default storeSlice.reducer
