import React from 'react'
import Banner from '../components/Banner'
import GenreList from '../components/GenreList'
import MediaCard from '../components/MediaCard'
import MediaCarousel from '../components/MediaCarousel'

function Home() {
  return (
    <>
      <Banner />
      <GenreList />
      <div className='container'>
        <MediaCarousel />
      </div>
    </>
  )
}

export default Home