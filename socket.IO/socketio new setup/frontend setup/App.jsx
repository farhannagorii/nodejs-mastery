import React, { useEffect } from 'react'
import socketslice, { setonlineuser, setsocket } from '../redux/socketslice'

function app() {
let {userData}=useSelector(state=>state.user)
let dispatch = useDispatch()
 useEffect(()=>{
    if(userData){

    const socketio = io("http://localhost:8000",{
        query:{
             userId : userData?._id
        }

    })
    
        dispatch(setonlineuser(socketio))


        socketio.on("getonlineuser",(user)=>{
            dispatch(setonlineuser(user))
        })

        return ()=> socketio.close()
    }
    else{
        if(socket){
            socket.close()
            dispatch(setsocket(null))
        }
    }
 
 },[userData])

  return (
    <div>
      
    </div>
  )
}

export default app



