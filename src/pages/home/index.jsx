import React from 'react'
import Hero from '../../components/Hero'
import List from '../../components/List'
import { fetchData } from '../../utils/endPoints'

const Home = () => {
  const {data} = fetchData('snippets', 'snippet/');
  const snippets = data?.data.results;

  return (
    <>
      <Hero banner="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz" />
      <List snippets={snippets} title="Recent Snippets" />
    </>
  )
}

export default Home