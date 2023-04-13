import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { myContext } from "../contextApi/Authcontext";
import axios from "axios";

const UserReview = () => {
  const products = useLoaderData();
  const { user } = useContext(myContext);

  const [reviews, setReviews] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const review = form.review.value;
    const name = form.name.value;
    const email = form.email.value;

    const productrReview = {
      productID: products?._id,
      review: review,
      userName: name,
      userEmail: email,
      userProfilePicture: user?.profilePic,
    };

    axios
      .post("http://localhost:5000/review/product_review", productrReview)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/review/multiple_review/${products?._id}`
        );
        setReviews(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [reviews]);

  return (
    <div className="mx-10 sm:mx-20 mb-20">
      <div className="flex flex-row gap-4 text-xl font-semibold">
        <i className="ri-star-fill"></i>
        <p> {reviews.length} Review & Rating</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <div className="lg:col-span-1 gap-16 mt-8">
            {reviews &&
              reviews.map((review) => (
                <div key={review._id}>
                  <div className="flex mt-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={review?.userProfilePicture}
                        className="h-10 w-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <div className="flex items-center space-x-3">
                          <p className="font-semibold text-sm text-gray-400">
                            {review?.userName}
                          </p>
                          <div className="flex gap-1 ">
                            <i className="ri-star-fill text-orange-500"></i>
                            <i className="ri-star-fill text-orange-500"></i>
                            <i className="ri-star-fill text-orange-500"></i>
                            <i className="ri-star-fill text-orange-500"></i>
                            <i className="ri-star-fill text-orange-500"></i>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {review && review?.date.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 ml-14">{review?.review}</p>
                </div>
              ))}
          </div>
          <button className="mt-16 border-2 py-3 px-6 rounded-full hover:bg-orange-600 hover:text-white">
            Show me all reviews
          </button>
        </div>
        <div className="lg:col-span-1">
          <div>
            <h2 className="text-xl font-semibold my-2">Review this product</h2>
            <p className="text-sm">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <p className="flex gap-2 mb-4 text-base font-semibold">
              Your Rating :
              <span className="flex gap-2 ">
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              className="border-2 p-2 w-full"
              placeholder="Write your review here..."
              name="review"
              id=""
              cols="70"
              rows="5"
              type="text"
            ></textarea>
            <span>
              <label htmlFor="">Your name</label>
              <input
                className="p-2 border-2 w-full"
                placeholder={user?.name}
                type="text"
                name="name"
                defaultValue={user?.name}
                disabled
              />
            </span>
            <span>
              <label htmlFor="email">Your email</label>
              <input
                className="p-2 border-2 w-full"
                name="email"
                placeholder={user?.email}
                defaultValue={user?.email}
                disabled
                type="email"
              />
            </span>
            <button
              type="submit"
              className="border-2 px-8 py-2 bg-green-600 text-white mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
