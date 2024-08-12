import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

function RatingCard() {
    const [activeTab, setActiveTab] = useState('Note globale');
    const [currentPage, setCurrentPage] = useState(1);

    const ratings = [
        { category: 'Accueil', rating: 4.5 },
        { category: 'Propreté', rating: 4.4 },
        { category: 'Cadre & Ambiance', rating: 4.0 },
        { category: 'Qualité de la prestation', rating: 4.1 },
    ];

    const reviews = [
        { name: 'John Doe', date: '2023-08-10', comment: 'Great service!', rating: 5 },
        { name: 'Jane Smith', date: '2023-08-09', comment: 'Very clean and organized.', rating: 4 },
        { name: 'Alex Johnson', date: '2023-08-08', comment: 'Good ambiance, but the service could be faster.', rating: 3 },
        { name: 'Chris Lee', date: '2023-08-07', comment: 'Excellent experience overall.', rating: 5 },
        { name: 'Patricia Brown', date: '2023-08-06', comment: 'The staff was very friendly.', rating: 4 },
        { name: 'Michael Davis', date: '2023-08-05', comment: 'Not bad, but I expected more.', rating: 3 },
        { name: 'Emma Wilson', date: '2023-08-04', comment: 'Loved it!', rating: 5 },
    ];

    const reviewsPerPage = 5;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const RatingStar = ({ rating }) => (
        <div className="flex items-center">
           
            <span className="mr-2 text-sm">{rating.toFixed(1)}</span>
                <StarIcon fontSize='small' />
        </div>
    );

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex border-b">
                <button
                    className={`flex-1 py-2 px-4 text-center ${activeTab === 'Note globale' ? 'border-b-2 border-black font-semibold' : ''
                        }`}
                    onClick={() => setActiveTab('Note globale')}
                >
                    Note globale
                </button>
                <button
                    className={`flex-1 py-2 px-4 text-center ${activeTab === 'Avis' ? 'border-b-2 border-black font-semibold' : ''
                        }`}
                    onClick={() => setActiveTab('Avis')}
                >
                    Avis
                </button>
            </div>
            {activeTab === 'Note globale' && (
                <div className="p-4 flex">
                    <div className="w-1/3 bg-black text-white flex items-center justify-center p-4 rounded-l-lg">
                        <span className="text-4xl font-bold">4,3</span>
                    </div>
                    <div className="w-2/3 pl-4 bg-gray-200 text-gray-800 p-3 rounded-r-lg">
                        {ratings.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-1">
                                <span className="text-sm">{item.category}</span>
                                <RatingStar rating={item.rating} />
                            </div>
                        ))}
                        <p className="text-sm text-black font-semibold mt-2">
                            35 clients ont donné leur avis
                        </p>
                    </div>
                </div>
            )}
            {activeTab === 'Avis' && (
                <div className="p-4">
                    {reviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage).map((review, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{review.name}</span>
                                <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                            <RatingStar rating={review.rating} />
                            <p className="text-sm mt-1">{review.comment}</p>
                        </div>
                    ))}
                    <div className="flex justify-between items-center">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`py-1 px-3 ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
                        >
                            Previous
                        </button>
                        <span className="text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`py-1 px-3 ${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RatingCard;
