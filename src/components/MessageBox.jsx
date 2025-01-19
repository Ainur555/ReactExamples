import React from "react";
import ErrorBox from "./ErrorBox";
import DataList from "./DataList";

const MessageBox = ({ err, data }) => (
    <div>
        <ErrorBox message={err} />
        <DataList data={data} />
    </div>
);

export default MessageBox;