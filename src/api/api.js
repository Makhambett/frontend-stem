const BASE_URL =
  import.meta.env.VITE_API_URL_BACKEND ||
  import.meta.env.VITE_API_URL ||
  'http://localhost:8000'

// ===== ПРОДУКТЫ =====
export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString()
  const url = `${BASE_URL}/api/products${query ? '?' + query : ''}`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Ошибка загрузки товаров: ${res.status}`)

  return res.json()
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/api/products/${id}`)
  if (!res.ok) throw new Error(`Товар не найден: ${id}`)

  return res.json()
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/categories`)
  if (!res.ok) throw new Error(`Ошибка загрузки категорий: ${res.status}`)

  return res.json()
}

// ===== ЗАЯВКИ =====
export async function createOrder(data) {
  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(error || `Ошибка отправки заказа: ${res.status}`)
  }

  return res.json()
}

export async function createApplication(data) {
  const res = await fetch(`${BASE_URL}/api/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(error || `Ошибка отправки заявки: ${res.status}`)
  }

  return res.json()
}

// ===== АВТОРИЗАЦИЯ =====
export async function login(email, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Неверный email или пароль')
  }

  return res.json()
}

export async function register(email, password, name, phone = '') {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, phone })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Ошибка регистрации')
  }

  return res.json()
}

export async function getCurrentUser(token) {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  if (!res.ok) throw new Error('Failed to fetch user')

  return res.json()
}

export function logout() {
  localStorage.removeItem('stem_access_token')
}