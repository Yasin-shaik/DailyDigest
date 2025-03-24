import React from 'react'
import NewsContainer from '../Components/NewsContainer'
export default function AdminNewsPage(props) {
  return (
    <div className='d-flex align-items-center justify-content-center m-5 p-2'>
        <div className="container text-center">
          <div className="row row-cols-3">
            {
            props.news.map(news=>{
              <NewsContainer news={news} />
            })
          }
          </div>
        </div>
    </div>
  )
}
