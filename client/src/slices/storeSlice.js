import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    categories: [],
    basket: [],
    oneProduct: '',
    order: '',
    orderError: '',
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

export const createOrder = createAsyncThunk(
    'createOrder',
    async (info) => {
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                info,
            })
        })
        if (response.status >= 400) {
            const { error } = await response.json();
            throw error;
        } else {
            return response.json();
        }
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
                state.oneProduct = action.payload
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.orderError = action.error.message
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.order = action.payload
            })
    }

})

export const { filterProducts, setBasket, clearBasket, sliceBasket } = storeSlice.actions
export const selectProducts = state => state.store.products
export const selectCategories = state => state.store.categories
export const selectBasket = state => state.store.basket
export const selectOneProduct = state => state.store.oneProduct
export const selecetOrderError = state => state.store.orderError
export const selectOrder = state => state.store.order
export default storeSlice.reducer
