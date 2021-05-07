import Layout from 'components/layout'
import useRouter from 'next/router';
import axios from 'axios';

const fetchPortfolio = (id) => {
  const query = `query Portfolios($id: ID){ 
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
  }`;
  const variables = { id }
  return axios.post( 'http://localhost:3000/graphql', { query, variables } )
  .then(({data: graph}) => graph.data)
}

const Portfolio = ({portfolio}) => {
  return (
    <Layout>
      <div className="portfolio-detail">
        <div className="container">

          <div className="jumbotron">
            <h1 className="display-3">{portfolio.title}</h1>
            <p className="lead">{portfolio.jobTitle}</p>
            <p>
              <a className="btn btn-lg btn-success" href="#" role="button">
                {portfolio.company}
              </a>
            </p>
          </div>

          <div className="row marketing">
            <div className="col-lg-6">
              <h4 className="title">Location</h4>
              <p className="text">{portfolio.location}</p>

              <h4 className="title">Start Date</h4>
              <p className="text">{portfolio.startDate}</p>
            </div>

            <div className="col-lg-6">
              <h4 className="title">Days</h4>
              <p className="text">{Math.ceil(Math.abs((new Date(portfolio.startDate)) - new Date(portfolio.endDate)) / (1000 * 3600 * 24))}</p>

              <h4 className="title">End Date</h4>
              <p className="text">{portfolio.endDate}</p>
            </div>
            <div className="col-md-12">
              <hr />
              <h4 className="title">Description</h4>
                <p>{portfolio.description}</p>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Portfolio.getInitialProps = async ({query}) => {
  const data = await fetchPortfolio(query.id);
  return {...data}
}

export default Portfolio