import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdTable = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/api/ads')
            .then(response => {
                setAds(response.data.data)
            })
            .catch(error => console.error('Error fetching ads:', error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Impressions</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>
                {ads.map(ad => (
                    <tr key={ad.id}>
                        <td>{ad.id}</td>
                        <td>{ad.title}</td>
                        <td>{ad.description}</td>
                        <td>{ad.impressions}</td>
                        <td>{ad.clicks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdTable;