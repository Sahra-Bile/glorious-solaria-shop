import type { ReactNode } from 'react';
import { createContext, useState, useContext } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  logIn: () => void
  logOut: () => void
} | null


// Skapa en context för att hantera användarautentisering
const AuthContext = createContext<AuthContextType>(null)


type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Funktioner för att hantera inloggning och utloggning
  const logIn = () => setIsAuthenticated(true)
  const logOut = () => setIsAuthenticated(false)
  console.log("AuthProvider" + isAuthenticated);
  return <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>{children}</AuthContext.Provider>
}




export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within a AuthProvider"
    );
  }
  return context;
};
