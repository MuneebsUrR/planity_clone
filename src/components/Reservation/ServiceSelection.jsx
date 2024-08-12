import React, { useState } from 'react';
import ServiceChoice from '../Shop/ServiceChoice'; // Adjust the path based on your file structure
import { selected_services } from '../../lib/data';

const allServices = [
    { id: 1, name: 'Highlights or Balayage - Short Hair', duration: '1h 5min', price: '64 €' },
    { id: 2, name: 'Highlights or Balayage - Mid-length Hair', duration: '1h 5min', price: '79 €' },
    { id: 3, name: 'Highlights or Balayage - Long Hair', duration: '1h 5min', price: '110 €' },
    { id: 4, name: 'Highlights or Balayage - Very Long Hair', duration: '1h 5min', price: 'Sur Devis' },
    { id: 5, name: 'Bleaching - Short Hair', duration: '1h 5min', price: '100 €' },
    { id: 6, name: 'Bleaching - Mid-length Hair', duration: '1h 5min', price: '120 €' },
    { id: 7, name: 'Bleaching - Long Hair', duration: '1h 5min', price: '140 €' },
];

function ServiceSelection() {
    const [services, setServices] = useState(selected_services || []); // Initial service selection
    const [isServiceChoiceVisible, setIsServiceChoiceVisible] = useState(false); // Control visibility

    const addService = (selectedService) => {
        setServices([...services, selectedService]);
        setIsServiceChoiceVisible(false); // Hide ServiceChoice component after adding
    };

    const removeService = (id) => {
        setServices(services.filter(service => service.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-lg font-semibold mb-4">1. Prestation sélectionnée</h1>
            {services.map((service) => (
                <div key={service.id} className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <p className="font-semibold">{service.name}</p>
                        <p className="text-gray-500">{service.duration} · {service.price}</p>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => removeService(service.id)} className="text-blue-600 hover:underline text-sm">
                            Supprimer
                        </button>
                    </div>
                </div>
            ))}

            <button
                onClick={() => setIsServiceChoiceVisible(true)}
                className="flex items-center text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
                <span className="mr-2">+</span> Ajouter une prestation à la suite
            </button>

            {isServiceChoiceVisible && (
                <div className="mt-6">
                    <ServiceChoice allServices={allServices} onServiceSelect={addService} />
                </div>
            )}
        </div>
    );
}

export default ServiceSelection;
