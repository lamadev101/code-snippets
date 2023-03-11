import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import List from '../../components/List'
import { fetchData } from '../../utils/endPoints'

const Category = () => {
  const {state} = useLocation()
  const {slug} = useParams()
  const {data} = fetchData(slug, `snippet/?category__name=${slug}`)
  const snippets = data?.data.results;

  return (
    <>
      <Hero banner={state} />
      <div>
        <List snippets = {snippets} title={slug} />
      </div>
    </>
  )
}

export default Category