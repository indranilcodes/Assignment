import React, { useContext } from 'react'

import Header from "../component/Header";

import { ThreeDots } from 'react-loader-spinner'

import { ApiContext } from '../Contex/AppContex'

import styles from './Loading_page_style.js'
import { useNavigate } from 'react-router-dom';
import Assignment from '../component/Assignment.js';


export default function Home() {

  const navigate = useNavigate()

  
  const { loading } = useContext(ApiContext);


  return (
    <>
      {
        loading ? <div style={styles.container}> <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
          <div style={styles.message} >Loading...</div>
        </div> : <div>

          <Header />


          <Assignment />

        </div>


      }

    </>
  )
}
