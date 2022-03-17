import React,{useEffect, useState} from 'react'
import './showurl.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Showurl = (props) => {
    const [copied,setCpoid]=useState(false);
    const [copydata,setCopydata]=useState('Copy');
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setCpoid(false);
        },9000);
        return ()=>clearTimeout(timer)
    },[copied,copydata])
  return (
    <div className='show-url'>
        {props.short && (<div className="url">
            <div className="item extra2">
                {props.orignal}
            </div>
            <div className="item extra1">
                {props.short}
            </div>
                <CopyToClipboard text={props.short}
                onCopy={() => setCpoid(true)
                }
                >
                    <button className='btn' id={copied ? 'btn':''}>{copydata}</button>
                </CopyToClipboard>
                 </div>)}
        { props.errors && ( <div className='error'>
                    {props.errors}
        </div>)
         }
    </div>
  )
}

export default Showurl