import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/auth-context'

export function GoogleAuthRedirect() {
  const location = useLocation()
  const { logIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')

    if (token) {
      localStorage.setItem('authToken', token)
      logIn()
      // Redirect to last visited page
      const lastPage = localStorage.getItem('lastVisitedPage') || '/defaultPage'
      navigate(lastPage, { replace: true })
    }
  }, [location, logIn])

  // TODO: Add loading spinner
  return <div>Processing Google login...</div>
}
