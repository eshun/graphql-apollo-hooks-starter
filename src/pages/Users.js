import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { useQuery } from "react-apollo-hooks";

import "../styles.css";

const getUsersQuery = gql`
  {
    users {
      id
      name
      email
      age
    }
  }
`;

// 未使用hooks
const Users = () => (
  <Query query={getUsersQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return `Users Error! ${error.message}`;

      return (
        <div>
          <ul className="ul">
            {data.users.map(currentUser => (
              <li key={currentUser.id}> {currentUser.name} </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

// 使用hooks，useQuery函数
const useUsers = () => {
  const { data, error, loading } = useQuery(getUsersQuery, { suspend: true });

  // 可以将useQuery与React Suspense一起使用{suspend：true}。由App.js Suspense达到组件异步请求等待效果
  // if (loading) return <div>Loading...</div>;
  if (error) return `Users Error! ${error.message}`;

  return (
    <div>
      <ul className="ul">
        {data.users &&
          data.users.map(user => <li key={user.id}> {user.name} </li>)}
      </ul>
    </div>
  );
};
export default useUsers;
