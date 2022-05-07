import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`blogs.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <Container className='my-5'>
            <h1 className='text-center mt-2 mb-3'>Blogs</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </Container>
    );
};

export default Blogs;