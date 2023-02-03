import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    authUser: '',
    logout: '',
    allOrders: '',
    order: '',
    orderStatus: '',
    color: ''
}

export const adminLogin = createAsyncThunk(
    'login',
    async (user) => {
        const data = await fetch('/api/admin/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                user,
            ),
        })
        return data.json()
    }
)

export const changeOrderStatus = createAsyncThunk(
    'changeOrderStatus',
    async (body) => {
        console.log(body.status, 'ID!!!!!!!!');
        const data = await fetch(`/api/admin/order/${body.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderStatus: body.status,
            }),
        })
        return data.json()
    }
)

export const adminLogout = createAsyncThunk(
    'logout',
    async () => {
        const data = await fetch('/api/admin/logout', { method: 'DELETE' })
        return data.json()
    }
)

export const getOrders = createAsyncThunk(
    'getOrders',
    async () => {
        const data = await fetch('/api/admin/orders')
        return data.json()
    }
)

export const getOrder = createAsyncThunk(
    'getOrder',
    async (id) => {
        const data = await fetch(`/api/admin/order/${id}`)
        return data.json()
    }
)


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.allOrders = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.authUser = action.payload
            })
            .addCase(adminLogout.fulfilled, (state, action) => {
                state.logout = action.payload
                state.authUser = ''
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.allOrders = action.payload
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.order = action.payload
            })
            .addCase(changeOrderStatus.fulfilled, (state, action) => {
                console.log(action.payload.message, 'payload');

                if (action.payload.message === 'pending') state.color = 'primary'
                if (action.payload.message === 'process') state.color = 'info'
                if (action.payload.message === 'cancel') state.color = 'danger'
                if (action.payload.message === 'done') state.color = 'success'

                state.order.status = action.payload.message
            })
    }

})

export const { filterProducts, setBasket, clearBasket, sliceBasket, clearMessages, setOrders } = adminSlice.actions
export const selectAuthUser = state => state.admin.authUser
export const selectLogout = state => state.admin.logout
export const selectOrders = state => state.admin.allOrders
export const selectOrder = state => state.admin.order
export const selectStatus = state => state.admin.orderStatus
export const selectColor = state => state.admin.color

export default adminSlice.reducer
