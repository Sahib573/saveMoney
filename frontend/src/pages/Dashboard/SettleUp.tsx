import React from 'react';

const SettleUpSection: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md" style={{ backgroundColor: '#5B39CF' }}>
            <h2 className="text-2xl font-semibold mb-4 text-white">Settle Up</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow" style={{ backgroundColor: 'white' }}>
                    <h3 className="text-lg font-semibold mb-2 text-black">You Owe</h3>
                    <ul>
                        {/* Sample list of amounts you owe */}
                        <li className="flex justify-between items-center mb-2 text-black">
                            <span>Friend 1</span>
                            <span className="text-red-500 font-semibold">-$50.00</span>
                        </li>
                        <li className="flex justify-between items-center mb-2 text-black">
                            <span>Friend 2</span>
                            <span className="text-red-500 font-semibold">-$30.00</span>
                        </li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow" style={{ backgroundColor: 'white' }}>
                    <h3 className="text-lg font-semibold mb-2 text-black">You Are Owed</h3>
                    <ul>
                        {/* Sample list of amounts you are owed */}
                        <li className="flex justify-between items-center mb-2 text-black">
                            <span>Friend 3</span>
                            <span className="text-green-500 font-semibold">$20.00</span>
                        </li>
                        <li className="flex justify-between items-center mb-2 text-black">
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
