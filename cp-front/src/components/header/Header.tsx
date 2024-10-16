import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
  const router = useRouter();

  const context = useContext(UserContext);

  // Verificação do contexto para evitar erros de desestruturação
  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { setUserName } = context; // Desestruturação segura

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    setUserName("");
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header_h1}>{title}</h1>
      <div className={styles.header_div}>
        {userName ? (
          <div className={styles.header_div}>
            <span>{userName}</span>
            <button className={styles.header_button} onClick={handleLogout}>
              Sair
            </button>
          </div>
        ) : (
          <button className={styles.header_button} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};
