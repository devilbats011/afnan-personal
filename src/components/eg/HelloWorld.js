import React, { useEffect } from 'react'

function HelloWorld(props) {
    let {item} = {...props}
    useEffect(()=>{
        console.log( item)
    })
    return (
        <div className="border-check" >
            <h3>{HelloWorld.name}</h3>
            {props.children}
                {item}
        </div>
    )
}

export default HelloWorld

export const Sidebar = props => {
    return <aside>{props.children}</aside>
  }
