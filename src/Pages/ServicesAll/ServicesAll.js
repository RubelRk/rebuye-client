import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServicesAll = () => {
    const allData = useLoaderData();
    const {loading} = useContext(AuthContext)
    useTitle('ServicesAll');

    if(loading){
        return <div className='text-center'>
            <div className="spinner-border m-5" role="status">
           <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    }
    
    return (
        <div>
            <Container >
                <Row>
            {
                allData?.map(aData=>(
           
             <Col key={aData._id} sm={12} lg={4}>
                    <Card  className='mx-auto my-lg-5 my-2' style={{ width: '18rem', height:'500px' }}>
                    <PhotoProvider>
                        <PhotoView src={aData.picture}>
                        <Card.Img variant="top" style={{ height:'200px' }} src={aData.picture} />
                        </PhotoView>
                    </PhotoProvider>
                      
                        <Card.Body>
                            <Card.Title>{aData.title}</Card.Title>
                            <Card.Text>
                            {aData.description.slice(0,100)}
                            </Card.Text>
                            <h4>Price:{aData.price}</h4>
                            <div>
                                <p>Ratings:{aData.rating}</p>
                            </div>
                            <Link to={`/GhostBikers/${aData._id}`}><Button variant="primary" className='w-100'>View Details</Button></Link>
                        </Card.Body>
                        </Card>
                       
                    </Col>
                ))
            }
             </Row>  
            </Container>
        </div>
    );
};

export default ServicesAll;