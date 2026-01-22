import api from '../../services/api';

// Aksiyon tipleri
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

// Aksiyon oluşturucular
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSelectedProduct = (product) => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});

// Kategori verisini API'dan çeker
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/categories');
      dispatch(setCategories(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };
};

// Ürünleri API'dan çeker
export const fetchProducts = (params = {}) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState('FETCHING'));
      
      const response = await api.get('/products', { params });
      
      // Toplam ve ürün listesini güncelle
      dispatch(setTotal(response.data.total));
      dispatch(setProductList(response.data.products));
      dispatch(setFetchState('FETCHED'));
      
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      dispatch(setFetchState('FAILED'));
      throw error;
    }
  };
};

// Tek bir ürünü ID ile getirir
export const fetchProductById = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState('FETCHING'));
      
      const response = await api.get(`/products/${productId}`);
      
      // Seçili ürünü güncelle
      dispatch(setSelectedProduct(response.data));
      dispatch(setFetchState('FETCHED'));
      
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      dispatch(setFetchState('FAILED'));
      throw error;
    }
  };
};
