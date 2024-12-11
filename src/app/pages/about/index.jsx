import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AboutPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://8aed6b7d342231b2.mokky.dev/items')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-4">About Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {data.map((item) => (
                    <div key={item.id} className="w-full p-4 bg-gray-100 rounded-lg shadow-lg text-center">
                        <h2 className="font-bold">{item.name}</h2>
                        <p><strong>ID:</strong> {item.id}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Year:</strong> {item.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;

