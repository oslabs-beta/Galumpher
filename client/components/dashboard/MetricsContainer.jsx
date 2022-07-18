import React from "react";
import CPU from "./cpu";
import Memory from "./memory";
import InputOutput from "./InputOutput";
import Swap from "./swap";

const MetricsContainer = () => {
    return (
        <div>
            <h2>This is the Metrics Container</h2>
            < CPU />
            < Memory />
            < InputOutput />
            < Swap />
        </div>
    )
}

export default MetricsContainer;