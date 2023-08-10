import * as React from "react"
import { Link } from "gatsby"
import { Button } from "@mui/material"
import "../styles/banner.css"
import CountUp from 'react-countup';

const NumbersBanner = () => (
    <div id="banner">
        <div class="row aln-center">
            <div class="numbers">
                <h2><CountUp start={0} end={263} duration={3.5} useEasing={true} enableScrollSpy={true} /></h2>   
                <h3>Singers</h3> 
            </div>
            <div class="numbers">
                <h2><CountUp start={0} end={25} duration={3.5} useEasing={true} enableScrollSpy={true}/></h2>   
                <h3>Groups</h3> 
            </div>
            <div class="numbers">
                <h2><CountUp start={0} end={1} duration={3.5} useEasing={true} enableScrollSpy={true}/></h2>   
                <h3>God</h3> 
            </div>
        </div>
    </div>
)

export default NumbersBanner