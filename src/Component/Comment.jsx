import React, { useEffect, useState } from 'react'
import { Fetch } from '../Hooks/Fetchcomment'


const Comment = (articleID) => {
    const [Comment,setcomment]=useState([])

    useEffect(()=>{
        const getComment = async () =>{
            const data = await Fetch(articleID)
            setcomment(data || [])
        }
        getComment()

    },[articleID])

  return (
    <div>
        <h3>comment</h3>
        <div>
            {Comment?.map((comment)=>(
                <ul key={comment.id}>
                    <li>{comment.content}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Comment