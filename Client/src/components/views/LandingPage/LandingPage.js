import React, {useEffect} from 'react';
import axios from 'axios';

function LandingPage() {


    useEffect(()=>{
        axios.get('/api/test/CORP')
        .then(res=>{
            console.log('LandingPage' , res.data)
        })
    },[])
    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
