import React from "react";
import Layout from "../../components/Layout";
import useApi from "../../hooks/useApi";
import * as SC from "./Editorials.styles";

const Editorials = () => {
  const [editorial, isLoading] = useApi("/publishers.json");

  return (
    <Layout>
      <SC.Container></SC.Container>
    </Layout>
  );
};

export default Editorials;
