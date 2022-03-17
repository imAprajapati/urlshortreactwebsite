import React,{useState} from 'react'
import './search.css'
import axios from 'axios'
import styled from 'styled-components'
import Showurl from '../section/showurl/Showurl'


const Search = () => {
  const [data ,setData]=useState('');
  const [short,setShort]=useState('');
  const [orignal,setOrignal]=useState('');
  const [error,setError]=useState('');

  const URL_REGEX=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;


    const getData=(e)=>{
      setData(e.target.value)
    }

    const validation=(string)=>{
      return string.match(URL_REGEX)
    }

    const landlesubmit=(e)=>{
      if(validation(data)){
      axios.get(`https://api.shrtco.de/v2/shorten?url=${data}`).then((response)=>{
        // console.log(response.data)
        setShort(response.data.result.short_link2)
        setOrignal(response.data.result.original_link)
        // console.log(short)
        setData('');
        setError('');
      

      })
    }
    else{
      setError('Please enter valid URL')
      setShort('')
    }
    }
   
  return (
    <>
    <div className='search-container'>
        <div className="search">
        <input placeholder='Shorten a link here...' value={data} onChange={getData} />
        <button onClick={landlesubmit}>Shorten it!</button>
        </div>
    </div>
    {short && (<Showurl orignal={orignal} short={short} error={error}/>)}
    {error && (<Showurl errors={error} />)}
    </>
  )
}

export default Search