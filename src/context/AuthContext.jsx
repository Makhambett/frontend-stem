import { createContext, useContext, useState, useEffect } from 'react'
import { useUserEmail } from './UserEmailContext'
import { login as apiLogin, register as apiRegister, logout as apiLogout, getCurrentUser } from '../api/api'

// ✅ Создаём контекст
const AuthContext = createContext(null)

// ✅ Базовый URL для прямого fetch (если нужно)
const API_BASE = 
  import.meta.env.VITE_API_URL_BACKEND || 
  import.meta.env.VITE_API_URL || 
  'http://localhost:8000'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const { setUserEmail } = useUserEmail()

  // Проверка токена при загрузке
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('stem_access_token')
        
        if (token) {
          const userData = await getCurrentUser(token)
          setUser(userData)
          setUserEmail(userData.email)
        }
      } catch (err) {
        console.error('Auth check error:', err)
        localStorage.removeItem('stem_access_token')
      } finally {
        // ✅ Всегда завершаем загрузку, даже если была ошибка
        setLoading(false)
      }
    }
    
    checkAuth()
  }, [setUserEmail])

  const register = async (name, email, password) => {
    const data = await apiRegister(email, password, name)
    localStorage.setItem('stem_access_token', data.access_token)
    const userData = await getCurrentUser(data.access_token)
    setUser(userData)
    setUserEmail(userData.email)
    setShowModal(false)
    return userData
  }

  const login = async (email, password) => {
    const data = await apiLogin(email, password)
    localStorage.setItem('stem_access_token', data.access_token)
    const userData = await getCurrentUser(data.access_token)
    setUser(userData)
    setUserEmail(userData.email)
    setShowModal(false)
    return userData
  }

  const logout = () => {
    apiLogout()
    setUser(null)
    setUserEmail(null)
  }

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  // ✅ ВАЖНО: Provider рендерится ВСЕГДА, даже во время загрузки!
  // Только внутри него мы можем условно рендерить children или лоадер
  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      showModal, 
      openModal, 
      closeModal,
      isAuthenticated: !!user,
      loading  // ✅ Экспортируем состояние загрузки для детей
    }}>
      {/* ✅ children рендерятся всегда, но можно добавить лоадер внутри если нужно */}
      {children}
    </AuthContext.Provider>
  )
}

// ✅ Хук с защитой от использования вне провайдера
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}