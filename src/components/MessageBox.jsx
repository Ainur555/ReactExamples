import React from "react";

const MessageBox = ({ err, data }) => (
    <div>
        {/* Отображение ошибки */}
        {err && (
            <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginTop: '10px' }}>
                {err}
            </div>
        )}

        {/* Отображение данных (списка или строки) */}
        {data && Array.isArray(data) ? (
        <ol 
            style={{
                backgroundColor: 'green', 
                color: 'white', 
                padding: '10px', 
                marginTop: '10px', 
                listStyleType: 'decimal',  
                paddingLeft: '20px',  
            }}
            >
        {data.map((item, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>
                        {item.fact}
                    </li>
                ))}
            </ol>
        ) : (
            data && (
                <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginTop: '10px' }}>
                    {data}
                </div>
            )
        )}
    </div>
);

export default MessageBox;