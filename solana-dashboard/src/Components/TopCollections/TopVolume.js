import React from "react";
import {
    LineChart,
    Line
} from "recharts";
import { ImageView } from "../BaseComponents/BaseTable";

const CustomLineChart = ({ data, dataKey }) => {
    return (
        <div atyle={{ backgroundColor: "transparent" }}>
            <LineChart
                width={200}
                height={100}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke="#4D4AE8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    )
}

const TopVolume = ({ data, dataKey, VolumeData, title }) => {
    return (
        <div style={{display : "flex", flexDirection : "column", width : "50%",backgroundColor: "rgb(62,67,76)", borderRadius : "8px", padding : "16px"}}>
        <span style={{marginBottom : "8px", fontFamily: "'Cabin', sans-serif", fontSize: "18px", color : "#DBD8E3" }}>{title}</span>
            {VolumeData.map((volumeData) => {
                return <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-between", color : "#DBD8E3", padding : "8px", gap : "16px" }}>
                    <ImageView image={volumeData.image} />
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{volumeData.name}</span>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{volumeData.volume}</span>
                    <CustomLineChart data={data} dataKey={dataKey} />
                </div>
            })}
        </div>
    )
}

export default TopVolume;