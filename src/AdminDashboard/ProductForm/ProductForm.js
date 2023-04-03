import React, { useState } from 'react';

const ProductForm = () => {
    const [product, setProduct] = useState([])

    const onSubmit = (event) => {
        event.preventDefault();
        const name = event.target.productName.value;
        const price = event.target.price.value;
        const brand = event.target.brand.value;
        const type = event.target.type.value;
        const image = event.target.image.files[0];
        const formData = new FormData()
        formData.append('image', image);
        const details = {
            name,
            formData,
            price,
            brand,
            type
        }
        setProduct(details)
    }
    console.log(product);


    return (
        <div>
            <div className="flex justify-center border border-red-500 md:w-[1000px]">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
                        Post your products
                    </h1>
                    <form onSubmit={onSubmit} className="mt-6 md:grid md:grid-cols-2 gap-6">
                        <div className="mb-2 col-span-1">
                            <label>
                                <span className="text-gray-700">Product name</span>
                                <input
                                    type="text"
                                    name="productName"
                                    className="w-full border block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <div className="mb-2 col-span-1">
                            <label>
                                <span className="text-gray-700">Product image</span>
                                <input
                                    type="file"
                                    name="image"
                                    className="w-full border block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <div className="mb-2 col-span-1">
                            <label>
                                <span className="text-gray-700">Effective price</span>
                                <input
                                    name="price"
                                    type="text"
                                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Brand</span>
                                <input
                                    name="brand"
                                    type="text"
                                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Type</span>
                                <input
                                    name="type"
                                    type="text"
                                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Availability</span>
                                <input
                                    name="availability"
                                    type="text"
                                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <div className="mb-2 col-span-2">
                            <label>
                                <span class="text-gray-700">Description</span>
                                <textarea
                                    name="description"
                                    className="block border w-full mt-2 px-4 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    rows="5"
                                ></textarea>
                            </label>
                        </div>

                        <div class="mb-6">
                            <button
                                type="submit"
                                className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default ProductForm;

