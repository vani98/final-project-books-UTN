import React from "react";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useApi from "../../hooks/useApi";
import Editorial from "./Editorial";
import * as SC from "./Editorials.styles";

const Editorials = () => {
  const [editorialData, isLoading] = useApi("/publishers.json");

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SC.PageTitle>
            Find your favorite
            <span> publisher</span>
          </SC.PageTitle>
          <SC.EditorialContainer>
            {editorialData.map((editorial) => (
              <Editorial data={editorial} key={editorial.id} />
            ))}
          </SC.EditorialContainer>
        </>
      )}
    </Layout>
  );
};

export default Editorials;
