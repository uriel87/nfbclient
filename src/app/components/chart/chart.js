
import React, { memo, useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import Loading from '../loading/loading'
import './chart.css'


const Chart = (props) => {
    const [data, setData] = useState(props.data)

    useEffect(() => {
        setData(props.data)
    }, [props]);

    if(!props) {return (<Loading />)}
    return(
        <div className="chart">
            <Bar
                width={1000}
                responsive={true}
                height={250}
                data={data}/>
        </div>
    )
}

export default memo(Chart)