import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <>

<div className='bg-purpel-50 text-center p-10 '>
        <h1 className='text-bold text-3xl'><span className='text-5xl'>ToyLand</span> Collection</h1>
        <p className='w-68 p-5'>you'll discover an extensive collection of toy cars designed for children's enjoyment and imaginative play. Explore a world of miniature vehicles that spark excitement and adventure.</p>
    </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 ">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
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






    {/* <div className='bg-purpel-50 text-center p-10'>
        <h1 className='text-bold text-3xl'><span className='text-5xl'>ToyLand</span> Collection</h1>
        <p className='w-68 p-5'>you'll discover an extensive collection of toy cars designed for children's enjoyment and imaginative play. Explore a world of miniature vehicles that spark excitement and adventure.</p>
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-10 bg-purple-50'>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://cfx-vrf-main-imgs.imgix.net/c/2/4/e3bfec73fd1f2031729e5670b11cf4657dd3b42c.png?auto=format&fit=clip&w=420" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" />
</figure>
          
        </div>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://www.lego.com/cdn/cs/set/assets/bltf73564a058fa0425/42151.png" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure>
        </div>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://www.porschestlouis.com/assets/stock/ColorMatched_01/Transparent/1280/cc_2023PRC20_01_1280/cc_2023PRC200005_01_1280_2H.png" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure>
        </div>
        <div className="card  glass bg-purple-300 p-5" >
          <figure><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3adcdc3-39f6-4e83-8c6b-7967406dd8cb/dfeeuyl-d4eb1b47-6557-4b95-a9a3-64f1501e1091.png/v1/fill/w_622,h_350/optimus_prime_peterbilt__3_by_dipperbronypines98_dfeeuyl-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzNhZGNkYzMtMzlmNi00ZTgzLThjNmItNzk2NzQwNmRkOGNiXC9kZmVldXlsLWQ0ZWIxYjQ3LTY1NTctNGI5NS1hOWEzLTY0ZjE1MDFlMTA5MS5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Vu6oi5df95R2-heMRFjepAoK1P9YPjX18VV0Hg-URio" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure>
        </div>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/63139/baby-police-car-4398817722.jpg" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure>
        </div>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/vehicles/showrooms/models/mazda-cx-3" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure> 
        </div>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfXG7y10tLhu1XzWVo7puMLWFmdkAj5DOP7IFkZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snpq6v6ODubLz2aKqfksQjmB2fJj5DOP5Eagd%25kcWExHWpbl8FO2k3Hy2o242yATQBrXpFkDulZ24riInRascpF4Hv5xj0KiIFJG8WkABHvIT91leO2JGvloVsdgpT9GsLz9FUilo90yadhbHsLoACRVAhJ0yLOExDnqTACygN6z5mlOECUkw327sgNEbn%25hV10UkNh5uqCVAbnkq83eEzOh5nmPXDWagq857Mr2IRUmP81D4pcxb7MPVYFXqWh1DMztIoQeqVYDafM3ajmztYRSDXv67aftxdYrIw1RSfWQt4o%25VxdSeZfq6uzWQdjcFbX3aeZQ6KIv6XRjcZwBvG%25rx6Kc%252G9n4WwBKup9g1Fe%252B3iohzIjup2XHLNzv63iprJyksGwXHi4Tiwx9%25rJHFlHLuou4TJIsJyUL3FlTv0QCxbZP%25F6Y8snGXMESk%25Nb5zvVo7Xgu" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure>
        </div>
        <div className="card  glass bg-purple-300 p-5">
          <figure><img src="https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f40590b1e3d8e88cb10/stills_0640_png/MY2021/15180/15180_st0640_116.png" alt="car!" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"/></figure>
        </div>
        </div> */}
    </>
  );
};

export default Gallery;
