import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {
  GET_ALL_PORTFOLIOS, 
  UPDATE_PORTFOLIO, 
  DELETE_PORTFOLIO, 
  CREATE_PORTFOLIO, 
  GET_PORTFOLIO, 
  SIGN_UP, 
  SIGN_IN, 
  GET_AUTH_USER,
  LOG_OUT
} from '../queries';

export const useGetAllPortfolio = () => useQuery(GET_ALL_PORTFOLIOS);

export const useGetSinglePortfolio = (id) => useQuery(GET_PORTFOLIO, {variables: {id}});

export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO);

export const useDeletePortfolio = () =>  useMutation(DELETE_PORTFOLIO, {update(cache, {data : {deletePortfolio}}) {
    const {portfolios} = cache.readQuery({query: GET_ALL_PORTFOLIOS})
    const newPortfolios = portfolios.filter(e => e._id != deletePortfolio._id)
    cache.writeQuery({
      query: GET_ALL_PORTFOLIOS,
      data: {portfolios: newPortfolios}
    })
  }
});

export const useCreatePortfolio = () => useMutation(CREATE_PORTFOLIO, {update(cache, {data : {createPortfolio}}) {
    const {portfolios} = cache.readQuery({query: GET_ALL_PORTFOLIOS})
    cache.writeQuery({
      query: GET_ALL_PORTFOLIOS,
      data: {portfolios: [...portfolios, createPortfolio]}
    })
  }
});

// REGISTER

export const useRegister = () => useMutation(SIGN_UP, {update(cache, {data : {signUp}}) {
  const {portfolios} = cache.readQuery({query: GET_ALL_PORTFOLIOS})
  cache.writeQuery({
    query: GET_ALL_PORTFOLIOS,
    data: {portfolios: [...portfolios, createPortfolio]}
  })
}
});

// LOGIN

export const useLogin = () => useMutation(SIGN_IN, {update(cache, {data: {signIn: signedInUser}}) {
  cache.writeQuery({
    query: GET_AUTH_USER,
    data: {user: signedInUser}
  })
}})

// GET AUTH USER

export const useLazyGetAuthUser = () => useLazyQuery(GET_AUTH_USER)

// LOG OUT

export const useLazyLogOut = () => useMutation(LOG_OUT)