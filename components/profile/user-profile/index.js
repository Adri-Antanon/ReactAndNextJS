// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { getSession } from "next-auth/client";

import { ProfileForm } from "../profile-form";
import classes from "./user-profile.module.css";

export const UserProfile = () => {
  // First way without getServerSideProps
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       router.push("/auth");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};
