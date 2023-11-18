import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const JsonRenderer = () => {

    const [data, setData] = useState({})
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        // Определите функцию для выполнения запроса
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://84.201.129.132:4100/client/tender?id=${id}`);
                setData(response.data); // Обновите состояние данными из ответа
                console.log(response.data)
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };
        // Вызовите функцию для выполнения запроса
        fetchData();


    },[]);

    const renderData = (obj, depth = 0) => {
        const keys = Object.keys(obj);
        return keys.map((key) => {
            const value = obj[key];
            const isObject = typeof value === 'object';

            const itemStyle = {
                paddingLeft: `${depth * 10}px`, // Пример: увеличение отступа на 20 пикселей за каждый уровень вложенности
            };

            return (
                <div key={key} className={`item ${isObject ? 'nested-item' : ''}`} style={itemStyle}>
                    {isObject ? (
                        <div>
                            <strong>{key}:</strong>
                            {renderData(value, depth + 1)}
                        </div>
                    ) : (
                        <div>
                            <strong>{key}:</strong> {value}
                        </div>
                    )}
                </div>
            );
        });
    };

    return <div className="json-data" style={{marginLeft: '10%'}}>{renderData(data)}</div>;
};

export default JsonRenderer;