import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api/index'
import styles from './CountryPicker.module.css'

const CountryPicker  = ({fetchPerCountry})=>{

  const [data, setData] = useState([])
  useEffect(()=>{

    const fetchApi = async ()=>{
      setData(await fetchCountries())
    }

    fetchApi()
  },[setData])

  return(
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e)=>fetchPerCountry(e.target.value)}>
        <option value='global'>
            Global
        </option>
          {data.map((country, index)=><option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker