import React from "react"
import { classNames } from "./classNames"

const gradient1 =
  "bg-gradient-to-r from-teal-600 to-cyan-900 bg-clip-text text-transparent"
const gradient2 =
  "bg-gradient-to-r from-yellow-500 to-amber-800 bg-clip-text text-transparent"
const gradient3 =
  "bg-gradient-to-r from-rose-500 to-pink-800 bg-clip-text text-transparent"

export const incentives = [
  {
    id: 1,
    container:
      "relative rounded-lg bg-teal-100 px-6 py-5 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500",
    title: (
      <p className={classNames(gradient1, "ml-3 text-base font-bold")}>
        Tell us about your HVAC needs
      </p>
    ),
    description: (
      <p className={classNames(gradient1, "mt-2 mr-2 text-sm font-medium")}>
        We will ask you a few questions to determine your current HVAC status.
      </p>
    ),
    imageSrc: (
      <div className="flex items-center justify-center h-12 w-12 bg-blueGray-50 rounded-full ring-2 ring-gray-50">
        <lord-icon
          src="https://cdn.lordicon.com/fbmlrfcd.json"
          trigger="loop"
          delay="3000"
          stroke="75"
          colors="primary:#2DD4BF,secondary:#2DD4BF"
          style={{ width: 35, height: 35, text: "center" }}
        />
      </div>
    ),
  },
  {
    id: 2,
    container:
      "relative rounded-lg bg-yellow-100 px-6 py-5 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500",
    title: (
      <p className={classNames(gradient2, "ml-3 text-base font-bold")}>
        We'll match you with a solution that fits your needs
      </p>
    ),
    description: (
      <p className={classNames(gradient2, "mt-2 mr-2 text-sm font-medium")}>
        A real-time match is made based on your answers with one of our
        partners.
      </p>
    ),
    imageSrc: (
      <div className="flex items-center justify-center h-12 w-12 bg-blueGray-50 rounded-full ring-2 ring-gray-50">
        <lord-icon
          src="https://cdn.lordicon.com/lntygiyb.json"
          trigger="loop"
          delay="3000"
          stroke="75"
          colors="primary:#FACC15,secondary:#FACC15"
          style={{ width: 35, height: 35, text: "center" }}
        />
      </div>
    ),
  },
  {
    id: 3,
    container:
      "relative rounded-lg bg-rose-100 px-6 py-5 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rose-500",
    title: (
      <p className={classNames(gradient3, "ml-3 text-base font-bold")}>
        The experts will handle everything for you.
      </p>
    ),
    description: (
      <p className={classNames(gradient3, "mt-2 mr-2 text-sm font-medium")}>
        Since every partner we work with is rigorously vetted, your satisfaction
        is 100% guaranteed.
      </p>
    ),
    imageSrc: (
      <div className="flex items-center justify-center h-12 w-12 bg-blueGray-50 rounded-full ring-2 ring-gray-50">
        <lord-icon
          src="https://cdn.lordicon.com/jpromtvn.json"
          trigger="loop"
          delay="3000"
          stroke="75"
          colors="primary:#F43F5E,secondary:#F43F5E"
          style={{ width: 35, height: 35, text: "center" }}
        />
      </div>
    ),
  },
]
