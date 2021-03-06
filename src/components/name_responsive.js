import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function NameResponsive (){
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
      query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
    let myname="";

    if(isTabletOrMobile){
      myname = "Louis Chan"
    }
    else{
      myname = "Chan Tsz Leung"
    }

    return (
       <div>{myname}</div>
    );
  };