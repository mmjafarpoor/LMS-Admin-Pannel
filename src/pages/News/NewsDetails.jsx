import React from "react";
import { Outlet, useParams } from "react-router-dom";
import NewsView from "../../components/News/NewsDetails/view";

const NewsDetails = () => {

  const { NewsId } = useParams()

  return (
    <>
      <NewsView NewsId={NewsId}/>
    </>
  );
};

export default NewsDetails;