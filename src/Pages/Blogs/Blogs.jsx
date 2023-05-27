import { Accordion } from 'flowbite-react';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <>
<h1 className='text-4xl text-bold text-center p-10'>Latest Blogs</h1>
<Accordion className='pt-5 pb-5'>
  <Accordion.Panel>
    <Accordion.Title>
    <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        An access token is a credential used to access protected resources, typically issued by an authentication server. A refresh token is used to obtain a new access token without requiring the user to re-authenticate. They should be securely stored on the client-side, typically in an HTTP-only cookie or in local storage with proper security measures to prevent unauthorized access.
        </p>
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    <p>Compare SQL and NoSQL databases?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        SQL databases are relational, structured, and use a fixed schema, while NoSQL databases are non-relational, unstructured, and have a flexible schema. SQL databases provide strong consistency and support complex queries, while NoSQL databases offer scalability, high availability, and better performance for handling large amounts of data.
        </p>
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    <p>What is express js? What is Nest JS ?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        Express.js is a lightweight web application framework for Node.js that provides a simple and flexible way to build web applications and APIs.Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications using TypeScript and follows a modular and opinionated architecture.
        </p>
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
   <p> What is MongoDB aggregate and how does it work ?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis by applying a sequence of operations to documents in a collection, including grouping, filtering, and calculating aggregated results, providing flexible data transformation capabilities.
        </p>
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>


</>
  );
};

export default Blogs;
