import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import { requestSingleUserAction } from "../redux/thunk/users";
import UserDetails from "../components/UserDetails";

const SingleUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const singleUser = useSelector((state) => state.users.singleUser);

  useEffect(() => {
    if (id) {
      dispatch(requestSingleUserAction(id));
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Users List | Single User</title>
        <meta
          name="description"
          content="This page renders the selected user details"
        ></meta>
      </Head>
      {Object.keys(singleUser).length > 0 && (
        <UserDetails singleUser={singleUser} />
      )}
    </>
  );
};

export default SingleUser;
