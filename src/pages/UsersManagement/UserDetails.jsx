import React from "react";
import { Outlet, useParams } from "react-router-dom";
import UserView from "../../components/UsersManagement/UserDetails/view";

const UserDetails = () => {

  const { UserId } = useParams()

  return (
    <>
      <UserView UserId={UserId}/>
    </>
  );
};

export default UserDetails;
