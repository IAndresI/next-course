import Layout from 'components/layout'
import withApollo from '../../hoc/withApollo';
import { useGetSinglePortfolio } from '../../apollo/actions';
import { getDataFromTree } from "@apollo/client/react/ssr";

const PortfolioDetails = ({id}) => {
  const { data }  = useGetSinglePortfolio(id);

  const portfolio = data && data.portfolio || {};

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

PortfolioDetails.getInitialProps = async ({query}) => query

export default withApollo(PortfolioDetails, { getDataFromTree })