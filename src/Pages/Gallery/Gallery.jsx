import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <>

<div className='bg-purpel-50 text-center p-5 '>
        <h1 className='text-bold text-3xl'><span className='text-5xl'>ToyLand</span> Collection</h1>
        <p className='w-68 p-5'>you'll discover an extensive collection of toy cars designed for children's enjoyment and imaginative play. Explore a world of miniature vehicles that spark excitement and adventure.</p>
    </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 ">
    <div className="grid gap-4 ">
        <div >
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

    </>
  );
};

export default Gallery;
