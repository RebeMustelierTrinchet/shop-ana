import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  // Si no hay usuario → redirige a /login
  if (!user) return <Navigate to="/login" replace />;

  // Si hay usuario → muestra la página
  return children;
}
