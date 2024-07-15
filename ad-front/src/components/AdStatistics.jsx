import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AdStatistics = () => {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/api/ads/statistics')
            .then(response => setStatistics(response.data))
            .catch(error => console.error('Error fetching statistics:', error));
    }, []);

    return (
        <LineChart width={1000} height={300} data={statistics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total_impressions" stroke="#8884d8" />
            <Line type="monotone" dataKey="total_clicks" stroke="#82ca9d" />
        </LineChart>
    );
};

export default AdStatistics;