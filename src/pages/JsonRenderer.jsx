import React from 'react';

const JsonRenderer = ({ data }) => {
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

    return <div className="json-data">{renderData(data)}</div>;
};

export default JsonRenderer;