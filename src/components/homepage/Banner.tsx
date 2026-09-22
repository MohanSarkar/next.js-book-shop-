import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg'; 

const Banner = () => {
  return (
    <section className="py-8 flex justify-center">
      <div className="w-11/12 max-w-6xl bg-[#f3f3f3] rounded-3xl p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success text-white font-semibold px-6">
            View The List
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image 
            src={bannerImg} 
            alt="Banner Image" 
            priority 
            className="max-w-[280px] w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;