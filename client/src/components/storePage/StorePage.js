import React, { useEffect } from 'react'
import Products from './products/Products/Products'
import {
    selectProducts,
    selectCategories,
    loadProducts,
    loadCategories
} from '../../slices/storeSlice'
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { useParams } from 'react-router-dom';

const StorePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const categories = useSelector(selectCategories)
    const category = useParams()

    useEffect(() => {
        dispatch(loadProducts(category.category))
    }, [dispatch, category.category])

    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch])

    return (
        <div >
            <Products categories={categories} products={products} />
        </div>
    )
}

export default StorePage