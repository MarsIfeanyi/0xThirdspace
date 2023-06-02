import BountyOrganization from "@/components/Creator/BountyOrganization";
import Head from "next/head";
import React from "react";

type Props = {};

const BountyOrganizationPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Bounties | ThridSpace</title>
      </Head>
      <BountyOrganization />
    </div>
  );
};

export default BountyOrganizationPage;
