"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function MCP_Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [isModalOpen]);

    const fullText = `Sir Blessed Dashie is a young servant of God who grew up in a Christian family in Santa Maria, Accra. From an early age, he felt the urge to serve God and is humbled by every opportunity to spread the Gospel of Jesus Christ. Blessed Dashie is a man of spiritual fervency, one of the voices that God is raising in this end time to pioneer the move of the spirit. He is a young man with deep dedication and love for the things of God.

He is the Head Pastor and vision bearer of the New Breed Bible Church, an ever-growing interdenominational church based in the heart of Accra, whose vision is to gather people for greater works and to replicate the fullness of God's life on the earth. The church started as a small fellowship in Wesley Grammar Senior High School and blossomed into a full church, and by far has established another branch in Legon, and a campus fellowship in the University of Education, Winneba.

He operates in the apostolic office, and his ministrations are characterized by in-depth revelations, manifestations of healings, revivals, strange outpourings, and demonstrations of the power of the Holy Spirit. He burns with the zeal to see many souls saved and come into the light of our Lord Jesus Christ.

With a little over 10 years in ministry, he has impacted the lives of many individuals, leading them to live a more fulfilling spiritual life. Known for his love for humanity, he has embraced the role of a father at such a young age, raising sons and daughters of like passion and transforming them into agents of change.

Aside from ministry, he flourishes well in his line of work as a business entrepreneur who has obtained a Bachelor of Science Degree in Business Marketing from the esteemed University of Ghana, Legon. He is a man of deep love, Beacon of hope, and a light to many generations, and a custodian of the true word of God.`;

    const truncatedText = `${fullText.trim().substring(0, 244)}...`;

    return (
        <>
            <p className="mt-4 text-gray-700 max-w-2xl whitespace-pre-wrap leading-relaxed">
                {truncatedText}
            </p>
            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline transition duration-300"
            >
                Read Full Biography
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-blue-600 text-white p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Blessed Dashie (MCP)</h2>
                            <button
                                aria-label="Close biography modal"
                                onClick={() => setIsModalOpen(false)}
                                className="hover:bg-blue-700 p-1 rounded transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                                {fullText}
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-100 p-6 flex justify-end border-t">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
