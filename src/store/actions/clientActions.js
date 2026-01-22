import api from '../../services/api';

// Aksiyon tipleri
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

// Aksiyon oluşturucular
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

// Roller verisini API'dan çeker
export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/roles');
      dispatch(setRoles(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error;
    }
  };
};

// Giriş işlemi
export const loginUser = (credentials, rememberMe = false) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/login', credentials);
      const { token, ...userData } = response.data;
      
      if (token) {
        localStorage.setItem('token', token);
        api.defaults.headers.common['Authorization'] = token;
      }
      // Kullanıcıyı kaydet
      localStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('user', JSON.stringify(userData));
      dispatch(setUser(userData));
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
};

// Çıkış işlemi
export const logoutUser = () => {
  return (dispatch) => {
    // Token ve kullanıcıyı sil
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    // Store'dan kullanıcıyı temizle
    dispatch(setUser({}));
  };
};

// Token doğrulama
export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    
    try {
      // Token zaten header'da var
      const response = await api.get('/verify');
      // Kullanıcıyı kaydet
      localStorage.setItem('user', JSON.stringify(response.data));
      sessionStorage.setItem('user', JSON.stringify(response.data));
      dispatch(setUser(response.data));
      // Backend yeni token verirse güncelle
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Token verification failed:', error);
      // Geçersiz token ve kullanıcıyı sil
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      dispatch(setUser({}));
      throw error;
    }
  };
};
