import gql from "graphql-tag";

export const FIND_ALL_USER = gql`
  query {
    findAllUser {
      id
      userName
      userEmail
      userPass
      isRole
      isStatus
    }
  }
`;
