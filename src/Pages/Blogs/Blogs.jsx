import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <>




<div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
  <h2 id="accordion-color-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-color-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-color-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>




{/* //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-purple-100">
//       <div className="card w-full bg-base-100 shadow-xl image-full">
//         <figure><img src="https://images.unsplash.com/photo-1647296848101-4842ad263d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=404&q=80" alt="photo"  className='w-full'/></figure>
//         <div className="card-body">
//           <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
//           <p>An access token is a credential used to access protected resources, typically issued by an authentication server. A refresh token is used to obtain a new access token without requiring the user to re-authenticate. They should be securely stored on the client-side, typically in an HTTP-only cookie or in local storage with proper security measures to prevent unauthorized access.</p>
//         </div>
//       </div>
//       <div className="card w-full bg-base-100 shadow-xl image-full">
//         <figure><img src="https://images.unsplash.com/photo-1615402020065-b01cca46ca41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="photo" className='w-full'/></figure>
//         <div className="card-body">
//           <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
//           <p>SQL databases are relational, structured, and use a fixed schema, while NoSQL databases are non-relational, unstructured, and have a flexible schema. SQL databases provide strong consistency and support complex queries, while NoSQL databases offer scalability, high availability, and better performance for handling large amounts of data.</p>
//         </div>
//       </div>
//       <div className="card w-full bg-base-100 shadow-xl image-full">
//         <figure><img src="https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="photo" className='w-full'/></figure>
//         <div className="card-body">
//           <h2 className="card-title">What is express js? What is Nest JS ?</h2>
//           <p>
// Express.js is a lightweight web application framework for Node.js that provides a simple and flexible way to build web applications and APIs.Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications using TypeScript and follows a modular and opinionated architecture.</p>
//         </div>
//       </div>
//       <div className="card w-full bg-base-100 shadow-xl image-full">
//         <figure><img src="https://images.unsplash.com/photo-1611957082141-c449bb2b4ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="photo" className='w-full'/></figure>
//         <div className="card-body">
//           <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
//           <p>
// MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis by applying a sequence of operations to documents in a collection, including grouping, filtering, and calculating aggregated results, providing flexible data transformation capabilities.</p>
//         </div>
//       </div>
//     </div> */}

</>
  );
};

export default Blogs;
