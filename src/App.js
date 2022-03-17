import React,{useState} from 'react'
import axios from 'axios'
import styled  from 'styled-components';
import Header from './components/header/Header';
import Midsection from './components/midsection/Midsection';
import Search from './components/search/Search';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import Boost from './components/boost/Boost';
import Showurl from './components/section/showurl/Showurl';
const App = () => {
//   const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
//   const [data ,setData]=useState("");
//   axios.get("https://api.shrtco.de/v2/shorten?url=facebook.com").then((response)=>{
//         console.log(response.data.result.short_link2)
//         setData(response.data.result.short_link2)
//   })
  return (
    <>
    <Header />
    <Midsection />
    <Search />
    
    <Section /> 
    <Boost />
    <Footer />
    </>
  )
}

export default App