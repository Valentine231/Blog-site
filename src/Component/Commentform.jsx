import React, { useState } from 'react'
import { Addcomment } from '../Hooks/Fetchcomment'

const Commentform = ({articleId, userId, refreshComments}) => {
    const [content,setcontent] = useState('')

    const handlesubmit = async (e) =>{
        e.preventDefault()
        if(!content.trim())

      await Addcomment(articleId,userId,content)
      setcontent('')
      refreshComments()
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <textarea placeholder='add comment' value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Commentform