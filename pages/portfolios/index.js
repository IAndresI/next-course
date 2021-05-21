import Layout from 'components/layout';
import Link from 'next/link';
import {
  useCreatePortfolio,
  useUpdatePortfolio,
  useDeletePortfolio,
  useGetAllPortfolio} from '../../apollo/actions';
import withApollo from '../../hoc/withApollo';
import { getDataFromTree } from "@apollo/client/react/ssr";

const Portfolios = () => {
  const { data } = useGetAllPortfolio();

  const [ updatePortfolio ] = useUpdatePortfolio();

  const [ deletePortfolio ] = useDeletePortfolio();

  const [ createPortfolio ] = useCreatePortfolio();

  const portfolios = data && data.portfolios || [];
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
              portfolios.map(e => (
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
                    <button 
                      className="btn btn-primary" 
                      onClick={() => updatePortfolio({variables: {id: e._id}})}>
                      Update
                    </button>
                    <button 
                      className="btn btn-danger"
                      onClick={() => deletePortfolio({variables: {id: e._id}})}>
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

export default withApollo(Portfolios, { getDataFromTree });