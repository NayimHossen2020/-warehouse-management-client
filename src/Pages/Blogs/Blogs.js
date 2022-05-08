import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-island-24401.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <Container className='my-5'>
            <PageTitle title="Blogs"></PageTitle>
            <h1 className='text-center mt-2 mb-3'>Blogs</h1>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </Container>
    );
};

export default Blogs;