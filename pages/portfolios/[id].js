import {useRouter} from 'next/router';
import Layout from '../../components/layout'

const Portfolio = ({query}) => {
  return (
    <Layout>
      <h1>I'm details page with id: {query.id}</h1>
    </Layout>
  )
}

Portfolio.getInitialProps = ({query}) => {
  return {query}
}

export default Portfolio