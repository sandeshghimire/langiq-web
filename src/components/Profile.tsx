import React from 'react';

const ProfileCard = ({
    name = "Sandeh Ghimire",
    title = "Embedded System Engineer",
    subtitle = "Turning Ideas into Reality",
    residence = "Canada",
    city = "Toronto",
    age = "26",
    avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
    isOnline = true
}) => {
    return (
        <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl text-center shadow-2xl py-4">
            {/* Profile Image with Online Status */}
            <div className="relative inline-block ">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
                />
                {isOnline && (
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-800"></div>
                )}
            </div>

            {/* Name and Title */}
            <div className="">
                <h2 className="text-lg font-bold text-white mb-2">{name}</h2>
                <p className="text-gray-300 text-sm">{title}</p>
                <p className="text-gray-400 text-xs">{subtitle}</p>
            </div>

        </div >
    );
};

export default ProfileCard;