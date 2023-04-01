import React from 'react';

const AdditionalInformation = () => {
    const datas = [
        { name: "Standing screen display size", feature: "Screen display Size 10.4" },
        { name: "Color", feature: "Gray, Dark gray, Mystic black" },
        { name: "Screen Resolution", feature: "1920 x 1200 Pixels" },
        { name: "Max Screen Resolution", feature: "2000 x 1200" },
        { name: "Processor", feature: "2.3 GHz (128 GB)" },
        { name: "Graphics Coprocessor", feature: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)" },
        { name: "Wireless Type", feature: "802.11a/b/g/n/ac, Bluetooth" },
        { name: "Average Battery Life (in hours)", feature: "	13 Hours" },
        { name: "Series", feature: "	Samsung Galaxy tab S6 Lite WiFi" },
        { name: "Item model number", feature: "SM-P6102ZAEXOR" },
        { name: "Hardware Platform", feature: "Android" },
        { name: "Operating System", feature: "Android 12" },
        { name: "Batteries", feature: "1 Lithium Polymer batteries required. (included)" },
        { name: "Product Dimensions", feature: "0.28 x 6.07 x 9.63 inches" },
    ]
    return (
        <div className='mx-20 mb-20'>
            <table className='border-2 border-black w-full'>
                {
                    datas.map(data => <tr className='border-2 border-black'>
                        <td className='border-2 border-black bg-gray-300 py-2 px-4 text-xl'>{data.name}</td>
                        <td className='border-2 border-black py-2 px-4 text-xl'>{data.feature}</td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default AdditionalInformation;