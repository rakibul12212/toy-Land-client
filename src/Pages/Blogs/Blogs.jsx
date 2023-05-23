import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <article className='card'>
                <div className='card-inner'>
                <div className='card-side card-side--front'>
                    <div className='card-img-wrapper'>
                        <img src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png" alt=""  className='card-img'/>
                    </div>
                    <div className='card-body card-body--flex'>
                       <h2 className='card-title'>blogs</h2>
                       <span className='card-arrow'>&rarr;</span>
                    </div>
                </div>
                <div className='card-side card-side--back'>
                    <div className='card-body'>
                       <p>Lorem ipsum </p>              
                   </div>    
                </div>
                </div>
            </article>
        </div>
    );
};

export default Blogs;