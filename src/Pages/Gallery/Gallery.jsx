import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <>

<div className='bg-slate-100 text-center p-5 '>
        <h1 className='text-bold text-3xl'><span className='text-5xl'>ToyLand</span> Collection</h1>
        <p className='w-68 p-5'>you'll discover an extensive collection of toy cars designed for children's enjoyment and imaginative play. Explore a world of miniature vehicles that spark excitement and adventure.</p>
    </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 h-half bg-slate-100 ">
    <div className="grid gap-4 ">
        <div >
            <img className="h-82 max-w-full rounded-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://e0.pxfuel.com/wallpapers/386/655/desktop-wallpaper-cars-2006-phone-moviemania-disney-cars-cars-cartoon-disney-cars-movie-thumbnail.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://wallpapercave.com/wp/wp4558596.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://hips.hearstapps.com/autoweek/assets/s3fs-public/110629917.jpg?crop=0.625xw:1xh;center,top&resize=1200:*" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://wallpaper-house.com/data/out/10/wallpaper2you_405865.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?cs=srgb&dl=pexels-albin-berlin-919073.jpg&fm=jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://cdn.wallpapersafari.com/33/90/IP1WfU.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://i.pinimg.com/originals/cd/37/62/cd3762a766e54a2b4fde093d36d78049.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?cs=srgb&dl=pexels-albin-berlin-919073.jpg&fm=jpg" alt=""/>
        </div>
    </div>
</div>

    </>
  );
};

export default Gallery;
