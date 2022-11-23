import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs');
    const{loading} = useContext(AuthContext);

    if(loading){
        return <div className='text-center'>
            <div className="spinner-border m-5" role="status">
           <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    }
    return (
        <div className='w-75 mx-auto m-2'>
            <div>
                <h4>1. Difference between SQL and NoSQL</h4>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th className='text-center fs-3 fw-semibold'>SQL</th>
                    <th className='text-center fs-3 fw-semibold'>NoSQL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1.SQL is the programming language.</td>
                    <td>1.NoSQL is a class of DBMs.</td>
                    </tr>
                    <tr>
                    <td>2.SQL databases are primarily called as Relational Databases (RDBMS)</td>
                    <td>2.NoSQL database are primarily called as non-relational or distributed database.</td>
                    </tr>
                    <tr>
                    <td>3.SQL databases defines and manipulates data based structured query language (SQL).</td>
                    <td>3.A NoSQL database has dynamic schema for unstructured data.</td>
                    </tr>
                    <tr>
                    <td>4.That you can increase the load on a single server by increasing things like RAM, CPU or SSD</td>
                    <td>4.That you handle more traffic by sharding, or adding more servers in your NoSQL database</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='my-5'>
                <h4>2.What is JWT, and how does it work?</h4>
                <p><strong>Ans:</strong>
                JSON Web Token (JWT, pronounced, same as the word "jot") is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. <br />
                In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned and must be saved locally (typically in local or session storage, but cookies can also be used), instead of the traditional approach of creating a session in the server and returning a cookie. For unattended processes the client may also authenticate directly by generating.
                </p>

            </div>
            <div className='mb-5'>
                <h4>3.What is the difference between javascript and NodeJS?</h4>
                <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th className='text-center fs-3 fw-semibold'>javascript</th>
                    <th className='text-center fs-3 fw-semibold'>NodeJS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1.JavaScript is a simple programming language that runs in any browser JavaScript Engine. </td>
                    <td>1. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</td>
                    </tr>
                    <tr>
                    <td>2.JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand,</td>
                    <td>2.Node. js is a server-side scripting language based on the Google Chrome V8 engine.</td>
                    </tr>
                    <tr>
                    <td>3.We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.</td>
                    <td>3. NodeJS helps us run JS outside the browser as well.</td>
                    </tr>
                </tbody>
                </table>
                
              
            </div>
            <div className='mb-5'>
                <h4>4.How does NodeJS handle multiple requests at the same time?</h4>

                <p><strong>ANS:</strong> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;