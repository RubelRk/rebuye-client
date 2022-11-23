import {TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const SingleReview = ({review, handleDeleteReview}) => {

    const {price,serviceName, images, _id } = review;

    return (
        <tr>
        <td> <Link onClick={()=>handleDeleteReview(_id)}><TrashIcon style={{ width: '2rem', height: '50px', marginLeft:'10px' }}></TrashIcon></Link> </td>
        <td> <img src={images} style={{ width: '6rem', height: '60px', marginRight:'10px' }} alt=''/> {serviceName}</td>
        <td><Link to={`/editReview/${_id}`}>Edit</Link></td>
        <td>{price}</td>
      </tr>
    );
};

export default SingleReview;