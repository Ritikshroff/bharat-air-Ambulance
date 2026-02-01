// src/component/StepsToBeDone.js

import React from "react";

const StepsToBeDone = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Steps To Be Done</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Effortlessly plan a dignified farewell with our 3-step process - Quick, Reliable, and Hassle-Free.
                </p>

                <div className="relative flex items-center justify-center">
                    {/* Connectors */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full flex items-center">
                            <div className="flex-1 h-1 bg-green-300 "></div>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="relative flex items-center space-x-8">
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                            <p className="mt-2 text-sm text-gray-700">Give Us A Call</p>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                            <p className="mt-2 text-sm text-gray-700">Share Your Requirements</p>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                            <p className="mt-2 text-sm text-gray-700">Get The Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepsToBeDone;
