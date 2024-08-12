import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Scheduler = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const days = [
        { name: 'jeudi', date: '17 oct.' },
        { name: 'vendredi', date: '18 oct.' },
        { name: 'samedi', date: '19 oct.' },
        { name: 'dimanche', date: '20 oct.' },
        { name: 'lundi', date: '21 oct.' },
        { name: 'mardi', date: '22 oct.' },
        { name: 'mercredi', date: '23 oct.' },
    ];

    const times = [
        '10:00', '10:30', '11:00', '11:30', '12:00',
        '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00',
        '17:30', '18:00', '18:30', '19:00',
    ];

    const handleNext = () => {
        if (currentIndex < days.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-around items-start">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="text-purple-500 disabled:text-gray-300"
                >
                    <ArrowBackIosIcon />
                </button>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {days.map((day, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[100px]">
                                <div className="font-medium text-gray-700">{day.name}</div>
                                <div className="text-sm text-gray-500">{day.date}</div>
                                <div className="mt-2 space-y-1">
                                    {times.map((time, idx) => (
                                        <div
                                            key={idx}
                                            className="px-5 py-1 bg-gray-100 hover:bg-gray-300 rounded-md text-center text-sm"
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="text-purple-500 disabled:text-gray-300"
                >
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default Scheduler;