import React, { useState } from 'react';

const faqData = [
    { question: "Qu'est-ce que Planity ?", answer: "Planity est une plateforme..." },
    { question: "Comment prendre un rendez-vous sur Planity ?", answer: "Vous pouvez prendre un rendez-vous en..." },
    { question: "Dois-je payer en ligne sur Planity ?", answer: "Le paiement peut être effectué..." },
    { question: "Comment gérer mes rendez-vous sur Planity ?", answer: "Vous pouvez gérer vos rendez-vous en..." },
    { question: "Comment faire apparaître mon salon ou institut sur Planity ?", answer: "Pour répertorier votre salon ou institut..." },
];

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium">{question}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isOpen ? 'max-h-96 delay-75' : 'max-h-0'
                    }`}
            >
                <div className="p-4 text-gray-600">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div className='bg-gray-100 mt-32 p-12'>

            <div className="max-w-2xl mx-auto p-4 ">
            <p className='text-sm text-center mb-5 text-gray-600 font-semibold underline' style={{ textDecorationColor: '#625DF5', textDecorationThickness: '2px', textUnderlineOffset: '10px' }}>FAQ</p>
                <h2 className="text-3xl font-semibold text-center mb-6">Les questions fréquentes</h2>
                {faqData.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
