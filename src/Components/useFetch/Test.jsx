import React from 'react'
import useFetch from './useFetch'

function Test() {
    const {data , loading , errorMsg} = useFetch('https://dummyjson.com/products',{})
    console.log(data , loading , errorMsg)
  return (
    <div>
      {
        loading ? <h2>Please wait.Loading data</h2> : null
      }
      {
        data && data.products && data.products.length ? data.products.map((dataItem)=><p key={dataItem.key}>{dataItem.title}</p>):null
      }
    </div>
  )
}

export default Test
