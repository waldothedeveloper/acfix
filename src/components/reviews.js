import React from "react"
import { StarIcon } from "@heroicons/react/solid"
import { classNames } from "../utils/classNames"
import { useReviews } from "../hooks/getReviews"

export const Reviews = () => {
  const reviews = useReviews()
  const stars = [
    {
      id: 1,
      rating: 5,
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    },
    {
      id: 2,
      rating: 5,
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    },
    {
      id: 3,
      rating: 4,
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    },
    {
      id: 4,
      rating: 5,
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ",
    },
  ]

  //
  return (
    <div className="bg-blueGray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="sr-only">Customer Reviews</h2>
        <p className="px-8 text-center text-base font-semibold uppercase text-blueGray-700 tracking-wider">
          See what others are talking about us.
        </p>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {reviews.map((review, revID) => (
            <div
              key={review.id.value}
              className="px-6 md:px-16 flex items-center justify-evenly text-sm text-gray-500 space-x-4"
            >
              <div className="flex-none py-10">
                <img
                  src={review.picture.medium}
                  alt=""
                  className="w-10 h-10 bg-gray-100 rounded-full"
                />
              </div>
              <div className="flex-1 py-10">
                <h3 className="font-medium text-gray-900">
                  {review.name.first}
                  {` `}
                  {review.name.last}
                </h3>

                <div className="flex items-center mt-4">
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        stars[revID].rating > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="pl-1 pt-0.5 text-medium text-gray-700 text-xs">
                  {Math.floor(Math.random() * 12) + 1} days ago
                </p>
                <p className="sr-only">{stars[revID].rating} out of 5 stars</p>

                <div className="mt-4 prose prose-sm max-w-none text-gray-500">
                  {stars[revID].msg}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
