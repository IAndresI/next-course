import Layout from 'components/layout';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

const Portfolios = ({portfolios}) => {
  const [portf, setPortf] = useState(portfolios)

  const createPortfolio = async () => {
    const newPortfolio = await fetchCreatePortfolio();
    const newPortfolios = [...portf, newPortfolio];
    setPortf(newPortfolios);
  }

  const updatePortfolio = async (id) => {
    const index = portf.findIndex(e => e._id === id);
    const updatedPortfolio = await fetchUpdatePortfolio(id);
    const updated = [...portf]
    updated[index] = {...portf[index], ...updatedPortfolio}
    setPortf(updated);
  }

  const deletePortfolio = async (id) => {
    const index = portf.findIndex(e => e._id === id);
    const deleted = await fetchDeletePortfolio(id);
    console.log(deleted);
    const newArr = [...portf]
    newArr.splice(index, 1)
    setPortf(newArr);
  }

  return (
    <Layout>
      <div className="container">
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Portfolios</h1>
            </div>
          </div>
          <button className="btn btn-primary mb-20" onClick={createPortfolio}>
            Add portfolio
          </button>
        </section>
        <section className="pb-5">
          <div className="row">
            {
              portf.map(e => (
                <div key={e._id} className="col-md-4">
                  <div className="card subtle-shadow no-border">
                    <Link href={`portfolios/${e._id}`}>
                      <div>
                        <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{e.jobTitle}</h6>
                          <p className="card-text fs-2">{e.description}</p>
                        </div>
                        <div className="card-footer no-border">
                          <small className="text-muted">{e.startDate} - {e.endDate}</small>
                        </div>
                      </div>
                    </Link>
                    <button className="btn btn-primary"onClick={() => updatePortfolio(e._id)}>
                      Update
                    </button>
                    <button className="btn btn-danger"onClick={() => deletePortfolio(e._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
      </div>
    </Layout>
  );
};

const fetchDeletePortfolio = (id) => {
  const query = `mutation DeletePortfolio{
    deletePortfolio (id: "${id}") { 
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
}`;
  return axios.post( 'http://localhost:3000/graphql', { query } )
    .then(({data: graph}) => graph.data)
    .then(data => data.deletePortfolio)
}

const fetchUpdatePortfolio = (id) => {
  const query = `mutation UpdatePortfolio{
  
    updatePortfolio (id: "${id}" input: { 
      title: "Update New Job"
      company: "Update New Job"
      description: "Update New Job"
      companyWebsite: "Update New Job"
      location: "Update New Job"
      jobTitle: "Update New Job"
      startDate: "12/12/2012"
      endDate: "14/11/2013"
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
  
}`;
  return axios.post( 'http://localhost:3000/graphql', { query } )
    .then(({data: graph}) => graph.data)
    .then(data => data.updatePortfolio)
}

const fetchCreatePortfolio = () => {
  const query = `mutation CreatePortfolio{ 
    createPortfolio (input: { 
      title: "New Job"
      company: "New Job"
      description: "New Job"
      companyWebsite: "New Job"
      location: "New Job"
      jobTitle: "New Job"
      startDate: "12/12/2012"
      endDate: "14/11/2013"
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
  }`;
  return axios.post( 'http://localhost:3000/graphql', { query } )
    .then(({data: graph}) => graph.data)
    .then(data => data.createPortfolio)
}

const fetchPortfolios = () => {
  const query = `{ 
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
  }`;
  return axios.post( 'http://localhost:3000/graphql', { query } )
  .then(({data: graph}) => graph.data)
}

Portfolios.getInitialProps = async () => {
  const data = await fetchPortfolios();
  return { ...data }
}

export default Portfolios;