import React from 'react'

function msgarea() {

    useEffect(() => {
        socket?.on("newMessage", (mess) => {
            dispatch(setMessages([...messages, mess]))
        })
        return () => socket?.off("newMessage")
    }, [messages, setMessages])
    return (
        <div>
        {messages}
        </div>
    )
}

export default msgarea
