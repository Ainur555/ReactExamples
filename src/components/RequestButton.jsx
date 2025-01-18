import React, { useState } from "react";
import MessageBox from "./MessageBox";

const urlAddressCorrect = "https://catfact.ninja/facts";
const urlAddressNotCorrect = "https://catfact.ninja/facts12123";

const RequestButton = () => {
    const [facts, setFacts] = useState(null); // список фактов
    const [error, setError] = useState(null); // error message

    const requestToApi = async (urlAddress) => {
        setError(null);
        setFacts(null);
        try{
            const response = await fetch( urlAddress, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            const data = await response.json();
            setFacts(data.data); // сохраняем список фактов
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
             <button onClick={() => requestToApi('https://catfact.ninja/facts')}  style={{marginRight: '20px', fontSize: '18px'}}>Корректный запрос к API</button> 
             <button onClick={() => requestToApi(urlAddressNotCorrect)} style={{marginLeft:  '20px', fontSize: '18px'}}>Запрос к API с ошибкой</button> 
             <MessageBox err={error} data = {facts}/> 
        </div>
    );
};

export default RequestButton;