import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery,useGetProductsByCategoryQuery,useGetCategoriesQuery} from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import Category from '../components/Category';

const HomeScreen = () => {
  const { pageNumber, keyword, categoryName} = useParams();

  const productsQuery = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const categoriesQuery = useGetProductsByCategoryQuery({
    pageNumber,
    categoryName,
  });

  const queryResult = !categoryName ? productsQuery : categoriesQuery;

  const { data, isLoading, error } = queryResult;


  const {data:categories} = useGetCategoriesQuery();
  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {
      categories && !keyword ? (<Category categories={categories}/>) :(console.log("no"))
      }
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) 
      :(
        <>
          <Meta/>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
