import { GetServerSideProps } from 'next'
import { useState } from 'react'
import Inspector from '../components/Inspector'

const IndexPage = ({ global , countries}: Statistics) => {
  const [inspectorStatistics, setInspectorStatistics] = useState(global)
  return (
    <>
      <Inspector inspectorStatistics={inspectorStatistics}/>
    </>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.covid19api.com/summary')
  const { Global, Countries } = await res.json()
  const global = {
    location: 'World',
    id: 'World',
    date: Global.Date,
    newConfirmed: Global.NewConfirmed,
    newDeaths: Global.NewDeaths,
    newRecovered: Global.NewRecovered,
    totalConfirmed: Global.TotalConfirmed,
    totalDeaths: Global.TotalDeaths,
    totalRecovered: Global.TotalRecovered,
    activeCases: (Global.TotalConfirmed - Global.TotalRecovered) - Global.TotalDeaths,
    closeCases: Math.abs(((Global.TotalConfirmed - Global.TotalRecovered) - Global.TotalDeaths) - Global.TotalConfirmed)
  }
  const countries = Countries.map((country: Country) => {
    return {
      location: country.Country,
      id: country.ID,
      date: country.Date,
      newConfirmed: country.NewConfirmed,
      newDeaths: country.NewDeaths,
      newRecovered: country.NewRecovered,
      totalConfirmed: country.TotalConfirmed,
      totalDeaths: country.TotalDeaths,
      totalRecovered: country.TotalRecovered,
      activeCases: (Global.TotalConfirmed - Global.TotalRecovered) - Global.TotalDeaths,
      closeCases: Math.abs(((Global.TotalConfirmed - Global.TotalRecovered) - Global.TotalDeaths) - Global.TotalConfirmed)
    }
  })
  return {
    props: { global, countries }
  }

  interface Country {
    Country: string,
    ID: string,
    Date: string,
    NewConfirmed: number,
    NewDeaths: number,
    NewRecovered: number,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number
  }
}

interface Statistics {
  global: Records,
  countries: Records[]
}

export interface Records {
  location: string,
  id: string,
  date: string,
  newConfirmed: number,
  newDeaths: number,
  newRecovered: number,
  totalConfirmed: number,
  totalDeaths: number,
  totalRecovered: number,
  activeCases: number,
  closeCases: number
}
