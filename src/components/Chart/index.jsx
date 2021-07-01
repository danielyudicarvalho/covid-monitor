import React, {useEffect, useState} from 'react'
import {fetchDailyData} from '../../api/index'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({data:{confirmed,recovered,deaths}, country})=>{

  const [data, setData] = useState([])

  useEffect(()=>{

    const fetchApi = async ()=>{
      const dailyData = await fetchDailyData()
      setData(dailyData)
    }

    fetchApi()
  },[])

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );


  const lineChart = (

    data.length ? (
      <Line
      data={{
        labels:data.map(({date})=>date),
        datasets:[{ 
          data: data.map(({confirmed})=>confirmed),
          label:'infectados',
          borderColor: '#3333ff',
          fill:true
        },{
          data: data.map(({deaths})=>deaths),
          label:'mortes',
          borderColor: 'red',
          backgroundColor:'rgba(255,0,0,0.5)',
          fill:true
        }
      ]
      }}
    />
    ): null
    
  )

  return(
    <div className={styles.container}>
      {country? barChart : lineChart}
      {console.log(confirmed.value, country)}
    </div>
  )



}

export default Chart