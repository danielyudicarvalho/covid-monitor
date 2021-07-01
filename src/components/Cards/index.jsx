import React from 'react'
import {Card, Grid, CardContent, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from  './Card.module.css'


const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}})=>{

  if(!confirmed) return 'Loading...'
  
  return(
    <div className={styles.container}>

      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected )}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infectados</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Numero de casos confirmados</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered )}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recuperados</Typography>
            <Typography variant='h5'>
            <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Numero de casos recuperados</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths )}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Mortos</Typography>
            <Typography variant='h5'>
            <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Numero de mortes</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards