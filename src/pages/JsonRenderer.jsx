import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JsonRenderer = () => {
    const [data, setData] = useState({});
    const [openBlocks, setOpenBlocks] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://51.250.27.179:4100/client/tender?id=${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        fetchData();
    }, [id]);

    const toggleBlock = (key) => {
        setOpenBlocks((prevOpenBlocks) => ({
            ...prevOpenBlocks,
            [key]: !prevOpenBlocks[key],
        }));
    };

    const renderData = (obj, depth = 0) => {
        const keys = Object.keys(obj);

        return keys.map((key) => {
            const value = obj[key];
            const isObject = typeof value === 'object';
            const isOpen = openBlocks[key] || (isObject && depth < 2); // Скрыть только блоки с 3-го уровня вложенности и выше

            const itemStyle = {
                paddingLeft: `${depth * 10}px`,
            };

            return (
                <div key={key} className={`item ${isObject ? 'nested-item' : ''}`} style={itemStyle}>
                    <div>
                        {isObject && depth >= 2 && (
                            <button
                                style={{border: 'none', background: 'none'}}
                                className="arrow-button"
                                onClick={() => toggleBlock(key)}
                            >
                                {isOpen ? '▲' : '▶'}
                            </button>
                        )}
                        <strong>{key}:</strong>
                    </div>
                    {isObject && isOpen && <div>{renderData(value, depth + 1)}</div>}
                    {!isObject && <div>{value}</div>}
                </div>
            );
        });
    };

    return <div className="json-data" style={{ marginLeft: '10%' }}>{renderData(data)}</div>;
};

export default JsonRenderer;
