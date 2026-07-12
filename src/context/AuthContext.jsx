import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const users = [
  {
    email: "manager@transitops.com",
    password: "123456",
    name: "Prashant",
    role: "Fleet Manager",
  },
  {
    email: "safety@transitops.com",
    password: "123456",
    name: "Alex",
    role: "Safety Officer",
  },
  {
    email: "finance@transitops.com",
    password: "123456",
    name: "Emma",
    role: "Financial Analyst",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const found = users.find(
      (u) =>
        u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        u.password.trim() === password.trim()
    );

    if (!found) return false;

    setUser(found);
    localStorage.setItem("user", JSON.stringify(found));

    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}