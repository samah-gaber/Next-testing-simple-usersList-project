import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { loginReceive } from "../redux/actions/auth";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    auth: { token, user_name },
  } = useSelector((state) => state);
  const handleLogout = () => {
    dispatch(loginReceive({ token: null, user_name: null }));
    localStorage.clear();
  };
  return (
    <nav
      className={
        router.pathname === "/login" ? styles.auth_page : styles.normal_page
      }
    >
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/NextLogo.png" width={128} height={77} />
        </div>
      </Link>
      {router.pathname === "/login" ? (
        <></>
      ) : (
        <>
          {user_name ? (
            <div className={styles.user_name_container}>
              <p className={styles.user_name}>{user_name}</p>
              <button
                className={`${styles.logout_btn} ${styles.btn}`}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className={`${styles.login_btn} ${styles.btn}`}>
                login
              </button>
            </Link>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
