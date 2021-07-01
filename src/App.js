import React,{useEffect, useState, Component} from 'react'
import Card from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'
import {fetchData} from './api/index'
import styles from './App.module.css'


 class App extends Component{

  state = {
    data: {},
    country: '',
  }
  

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

   fetchPerCountry = async(country)=>{
    const data = await fetchData(country);

    this.setState({ data, country });
   }

  render(){
    const{data, country} = this.state;
    return(
      <div className={styles.container}>
      <Card data={data}/>
      <CountryPicker fetchPerCountry={this.fetchPerCountry}/>
      <Chart data={data} country={country}/>
    </div>
    )
    
  }
}


export default App