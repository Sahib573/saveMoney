import React from 'react';

const SettleUpSection: React.FC = () => {
    return (
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Settle Up</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">You Owe</h3>
                    <ul>
                        {/* Sample list of amounts you owe */}
                        <li className="flex justify-between items-center mb-2">
                            <span>Friend 1</span>
                            <span className="text-red-500 font-semibold">-$50.00</span>
                        </li>
                        <li className="flex justify-between items-center mb-2">
                            <span>Friend 2</span>
                            <span className="text-red-500 font-semibold">-$30.00</span>
                        </li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">You Are Owed</h3>
                    <ul>
                        {/* Sample list of amounts you are owed */}
                        <li className="flex justify-between items-center mb-2">
                            <span>Friend 3</span>
                            <span className="text-green-500 font-semibold">$20.00</span>
                        </li>
                        <li className="flex justify-between items-center mb-2">
                            <span>Friend 4</span>
                            <span className="text-green-500 font-semibold">$40.00</span>
                        </li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SettleUpSection;
