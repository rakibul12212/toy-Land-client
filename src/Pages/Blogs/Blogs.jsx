import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-purple-100">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://images.unsplash.com/photo-1647296848101-4842ad263d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=404&q=80" alt="photo"  className='w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p>An access token is a credential used to access protected resources, typically issued by an authentication server. A refresh token is used to obtain a new access token without requiring the user to re-authenticate. They should be securely stored on the client-side, typically in an HTTP-only cookie or in local storage with proper security measures to prevent unauthorized access.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://images.unsplash.com/photo-1615402020065-b01cca46ca41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="photo" className='w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>SQL databases are relational, structured, and use a fixed schema, while NoSQL databases are non-relational, unstructured, and have a flexible schema. SQL databases provide strong consistency and support complex queries, while NoSQL databases offer scalability, high availability, and better performance for handling large amounts of data.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="photo" className='w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS ?</h2>
          <p>
Express.js is a lightweight web application framework for Node.js that provides a simple and flexible way to build web applications and APIs.Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications using TypeScript and follows a modular and opinionated architecture.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://images.unsplash.com/photo-1611957082141-c449bb2b4ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="photo" className='w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
          <p>
MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis by applying a sequence of operations to documents in a collection, including grouping, filtering, and calculating aggregated results, providing flexible data transformation capabilities.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
