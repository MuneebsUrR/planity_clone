import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Scheduler = () => {
    const [openScheduler, setOpenScheduler] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [scheduleDetails, setScheduleDetails] = useState([])

    const days = [
        { name: 'jeudi', date: '17 oct.' },
        { name: 'vendredi', date: '18 oct.' },
        { name: 'samedi', date: '19 oct.' },
        { name: 'dimanche', date: '20 oct.' },
        { name: 'lundi', date: '21 oct.' },
        { name: 'mardi', date: '22 oct.' },
        { name: 'mercredi', date: '23 oct.' },
        { name: 'jeudi', date: '24 oct.' },
        { name: 'vendredi', date: '25 oct.' },
        { name: 'samedi', date: '26 oct.' },
        { name: 'dimanche', date: '27 oct.' },
        { name: 'lundi', date: '28 oct.' },
        { name: 'mardi', date: '29 oct.' },
        { name: 'mercredi', date: '30 oct.' },
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
        <>
            {openScheduler ? (
                <div className="p-4 bg-white rounded-lg shadow-md mb-10 hidden md:block">

                    <div className="flex justify-around items-start">
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="text-blue-500 disabled:text-gray-300"
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
                                            {times.map((time, index) => (

                                                <div
                                                    key={index}
                                                    onClick={() => { setScheduleDetails({ name: day.name, date: day.date, time: time }); setOpenScheduler(false) }}

                                                    className="cursor-pointer px-5 py-1 bg-gray-100 hover:bg-gray-300 rounded-md text-center text-sm"
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
                            className="text-blue-500 disabled:text-gray-300"
                            disabled={currentIndex === Math.floor(days.length / 7)}
                        >
                            <ArrowForwardIosIcon />
                        </button>
                    </div>

                </div>) : <div className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
                <div className='text-sm'>
                    <p className="font-semibold">{scheduleDetails.name}</p>
                    <p className="text-gray-500">{scheduleDetails.date} · {scheduleDetails.time}</p>
                </div>
                <div className="flex items-center">
                    <button onClick={() => { setOpenScheduler(true); setScheduleDetails(null) }} className="text-blue-600 hover:underline text-sm">
                        Modifier
                    </button>
                </div>
            </div>
            }

            {/* For the small screens */}
            {openScheduler ? (
                <div className="p-4 bg-white rounded-lg shadow-md mb-10 block md:hidden">
                    <div className="flex justify-around items-start">
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="text-blue-500 disabled:text-gray-300"
                        >
                            <ArrowBackIosIcon />
                        </button>
                        <div className="flex flex-col items-center min-w-[200px]">
                            <div className="font-medium text-gray-700">{days[currentIndex].name}</div>
                            <div className="text-sm text-gray-500">{days[currentIndex].date}</div>
                            <div className="mt-2 grid grid-cols-3 gap-3 ">
                                {times.map((time, idx) => (
                                    <div
                                        key={idx}
                                        className="px-5 py-1  bg-gray-100 hover:bg-gray-300 rounded-md text-center text-sm"
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleNext}
                            className="text-blue-500 disabled:text-gray-300"
                            disabled={currentIndex === days.length - 1}
                        >
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                </div>) :
                <div className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
                    <div className='text-sm'>
                        <p className="font-semibold">{scheduleDetails.name}</p>
                        <p className="text-gray-500">{scheduleDetails.date} · {scheduleDetails.time}</p>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => { setOpenScheduler(true); setScheduleDetails(null) }} className="text-blue-600 hover:underline text-sm">
                            Modifier
                        </button>
                    </div>
                </div>

            }

        </>
    );
};

export default Scheduler;


