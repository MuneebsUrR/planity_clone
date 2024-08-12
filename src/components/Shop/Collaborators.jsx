import React from 'react'

const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const Collaborator = ({ name, image, title }) => (
    <div className="flex flex-col items-center shadow-sm border rounded-lg p-2">
        <div className="w-32 h-32 rounded-lg overflow-hidden mb-2 flex items-center justify-center bg-black text-white">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <span className="text-2xl font-bold">{getInitials(name)}</span>
            )}
        </div>
        <span className="text-sm font-medium text-center truncate w-full">{name}</span>
        {title && (
            <span className="text-xs text-gray-500 text-center truncate w-full">{title}</span>
        )}
    </div>
);


export default function Collaborators({ collaborators }) {

    return (
        <div className="bg-white shadow-md rounded-lg p-6  mx-auto mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
                {collaborators.map((collaborator, index) => (
                    <Collaborator key={index} {...collaborator} />
                ))}
            </div>
        </div>
    );
}
