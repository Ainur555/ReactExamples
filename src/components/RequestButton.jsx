import React, { useState } from "react";
import MessageBox from "./MessageBox";
import axios from "axios";
import  '../styles/RequestButton.css';

const urlAddressCorrect = "https://catfact.ninja/facts";
const urlAddressNotCorrect = "https://catfact.ninja/facts12123";

const RequestButton = () => {
    const [facts, setFacts] = useState(null); 
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);

    const requestToApi = async (urlAddress) => {
        setError(null);
        setFacts(null);       
        setIsLoading(true);

        await axios.get(urlAddress)
        .then(response => {
            setFacts(response.data.data);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false); 
        })};
        return (
            <div>
                <button
                onClick={() => requestToApi(urlAddressCorrect)}
                disabled={isLoading}
                className="request-button"
                >
                {isLoading ? "Загрузка..." : "Корректный запрос к API"}
                </button>
                <button
                onClick={() => requestToApi(urlAddressNotCorrect)}
                disabled={isLoading}
                className="request-button"
                >
                {isLoading ? "Загрузка..." : "Запрос к API c ошибкой"}
                </button>
        
                {isLoading && <div className="spinner"></div>}
                {isLoading && <p className="loading-message">Данные загружаются...</p>}
                <MessageBox err={error} data={facts} />
            </div>
            );
    };

        
    
export default RequestButton;