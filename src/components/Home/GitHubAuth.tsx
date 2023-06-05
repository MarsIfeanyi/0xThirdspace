// SignUp or SignIn a user
"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
Image;

type Props = {};

const GitHubAuth = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session && session.user) {
    return (
      <>
        <div className="text-center items-center mx-auto">
          <p className="text-white font-nexa font-normal text-xl text-center mt-40">
            {" "}
            Signed in as: {session.user.email}{" "}
          </p>
          <br />
          <button
            onClick={() => signOut()}
            className="buttonGradient font-nexa text-white py-2 px-6 rounded-full font-medium text-xl "
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className=" text-center mt-40 font-nexa font-semibold text-2xl ">
        Not signed in <br />
        <button
          onClick={() => signIn()}
          className="buttonGradient font-nexa text-white py-2 px-6 rounded-full font-medium text-xl"
        >
          Sign in
        </button>
      </div>
    </>
  );
};

export default GitHubAuth;
