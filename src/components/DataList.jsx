import React from "react";
import '../styles/DataList.css';

const DataList = ({ data }) => {
    if (!data || !Array.isArray(data)) return null;
    return (
        <ol className="data-list">
            {data.map((item, index) => (
                <li key={index} className="data-list-item">
                    {item.fact}
                </li>
            ))}
        </ol>
    );
};

export default DataList;