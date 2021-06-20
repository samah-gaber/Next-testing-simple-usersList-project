import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import { requestUsersListAction } from "../redux/thunk/users";
import UserCard from "../components/userCard";
import styles from "../styles/Users.module.css";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestUsersListAction());
  }, []);
  const users = useSelector((state) => state.users);
  return (
    <>
      <Head>
        <title>Users List | Home</title>
        <meta
          name="description"
          content="This page renders a list of users"
        ></meta>
      </Head>
      <h1 className={styles.title}>Users</h1>
      <div className="row">
        {users &&
          users.usersList &&
          users.usersList.map(({ id, name, phone }, i) => (
             <Link href={`/${id}`} key={i}>
              <div className="col-4 mb-5">
                <UserCard id={id} name={name} phone={phone} />
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
