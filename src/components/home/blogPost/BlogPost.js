import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;
    return (
        <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card shadow-sm">
                <div className="card-header d-flex align-items-center">
                    <img className="mx-3" src={authorImg} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{author}</h6>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="text-card text-secondary mt-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;