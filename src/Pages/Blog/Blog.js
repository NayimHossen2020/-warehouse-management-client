import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer, img } = blog;
    return (
        <div className="card mb-3 shadow-sm">
            <div className="row g-0 p-3">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{question}</h5>
                        <p className="card-text">{answer}</p>
                        <button className='main-button'>read more..</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;