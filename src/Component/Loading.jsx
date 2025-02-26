import React from 'react'
import {motion} from 'framer-motion';



const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2 ">
        {[0,1,2,3].map((i)=>(
              <motion.div
              key={i}
         className='flex items-center justify-center shadow-lg  w-3 h-3 bg-blue-500 rounded-full'
         animate={{
          y: [0, -10, 0], // Move up and down
          opacity: [0.5, 1, 0.5], // Fade in and out
        }}
         transition={{duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay:i*0.2}}
         >
          ...
         </motion.div>
        ))}
       
     
    </div>
    
  )
}

export default Loading