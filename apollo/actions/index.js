import {useMutation, useQuery} from '@apollo/client';
import {GET_ALL_PORTFOLIOS, UPDATE_PORTFOLIO, DELETE_PORTFOLIO, CREATE_PORTFOLIO, GET_PORTFOLIO} from '../queries';

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