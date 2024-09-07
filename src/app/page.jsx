import React from 'react';
import Movies from './components/Movies';
import Header from './components/Header';

const Page = async({ searchParams }) => {
  try {
    const genre = searchParams.genre || 'trending';
    const endpoint = genre !== 'trending' ? `movie/${genre}` : 'trending/all/day';
    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=7b8b4357e1f4b4c5cfb162ce97c49542&language=en-US&page=1`, 
    { next: { revalidate: 10000 } });

    if (!res.ok) {
      throw new Error('Veri çekme hatası');
    }
    const data = await res.json();

    return (
      <div className='flex items-center justify-center flex-wrap gap-3'>
       {
        data?.results?.map((dt,i)=>(
          <Movies key={i} dt={dt}/>
        ))
       }
      </div>
    );
  } catch (error) {
    console.error("API isteği sırasında bir hata oluştu: ", error);
    return <div>Veri alınamadı.</div>;
  }
};

export default Page;
