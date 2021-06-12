import { gql } from '@apollo/client';

export const GET_PORTFOLIO = gql`
  query Portfolios($id: ID){ 
    portfolio(id: $id) { 
      _id
      title
      company 
      description
      companyWebsite
      location
      jobTitle
      startDate
      endDate
    } 
  }
`;

export const GET_ALL_PORTFOLIOS = gql`
  query Portfolios{ 
    portfolios { 
      _id
      title
      company 
      description
      companyWebsite
      location
      jobTitle
      startDate
      endDate
    } 
  }
`;

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id: ID){
    deletePortfolio (id: $id) { 
      _id
      title
      company 
      description
      companyWebsite
      location
      jobTitle
      startDate
      endDate
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID){
    updatePortfolio (id: $id, input: { 
      title: "Update New Job"
      company: "Update New Job"
      description: "Update New Job"
      companyWebsite: "Update New Job"
      location: "Update New Job"
      jobTitle: "Update New Job"
      startDate: "2005-08-09T18:31:42"
      endDate: "2005-09-09T18:31:42"
    }) { 
      _id
      title
      company 
      description
      companyWebsite
      location
      jobTitle
      startDate
      endDate
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio{ 
    createPortfolio (input: { 
      title: "New Job"
      company: "New Job"
      description: "New Job"
      companyWebsite: "New Job"
      location: "New Job"
      jobTitle: "New Job"
      startDate: "2005-08-09T18:31:42"
      endDate: "2005-09-09T18:31:42"
    }) { 
      _id
      title
      company 
      description
      companyWebsite
      location
      jobTitle
      startDate
      endDate
    } 
  }
`;


// REGISTER

export const SIGN_UP = gql`
mutation SignUp(
  $avatar: String
  $username: String!
  $email: String!
  $password: String!
  $repassword: String!
) {
  signUp(input: {
    avatar: $avatar
    userName: $username
    email: $email
    password: $password
    passwordConfirmation: $repassword
    info: "asdasd"
    name: "AndresTests"
  }) {
    _id
  }
}
`

// LOGIN

export const SIGN_IN = gql`
mutation SignIn(
  $email: String!
  $password: String!
) {
  signIn(input: {
    email: $email, 
    password: $password
  }) {
    _id
    userName
    role
    avatar
  }
}
`

// GET USER

export const GET_AUTH_USER = gql`
query GetAuthUser{
  user {
    _id
    userName
    role
    avatar
  }
}
`

// LOG OUT

export const LOG_OUT = gql`
mutation LogOut{
  signOut
}
`