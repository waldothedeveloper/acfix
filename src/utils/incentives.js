import React from "react"
import { classNames } from "./classNames"

const gradient1 = "bg-gradient-to-tr from-teal-200 to-cyan-50"
const gradient2 = "bg-gradient-to-r from-yellow-200 to-amber-50"
const gradient3 = "bg-gradient-to-br from-rose-200 to-pink-50"

export const incentives = [
  {
    id: 1,
    container: classNames(
      gradient1,
      "relative rounded-lg px-6 py-5 flex items-center space-x-3"
    ),
    title: (
      <p className={classNames("text-cyan-800", "ml-3 text-base font-bold")}>
        Tell us about your HVAC needs
      </p>
    ),
    description: (
      <p
        className={classNames("text-cyan-800", "mt-2 mr-2 text-sm font-medium")}
      >
        We will ask you a few questions to determine your current HVAC status.
      </p>
    ),
    imageSrc: (
      <div className="flex items-center justify-center h-12 w-12 bg-blueGray-50 rounded-full ring-2 ring-gray-50">
        <lord-icon
          src="https://cdn.lordicon.com/fbmlrfcd.json"
          trigger="loop"
          delay="3000"
          stroke="100"
          colors="primary:#2DD4BF,secondary:#2DD4BF"
          style={{ width: 35, height: 35, text: "center" }}
        />
      </div>
    ),
  },
  {
    id: 2,
    container: classNames(
      gradient2,
      "relative rounded-lg px-6 py-5 flex items-center space-x-3"
    ),
    title: (
      <p className={classNames("text-yellow-800", "ml-3 text-base font-bold")}>
        We'll match you with a solution that fits your needs
      </p>
    ),
    description: (
      <p
        className={classNames(
          "text-yellow-800",
          "mt-2 mr-2 text-sm font-medium"
        )}
      >
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
          stroke="100"
          colors="primary:#FACC15,secondary:#FACC15"
          style={{ width: 35, height: 35, text: "center" }}
        />
      </div>
    ),
  },
  {
    id: 3,
    container: classNames(
      gradient3,
      "relative rounded-lg  px-6 py-5 flex items-center space-x-3"
    ),
    title: (
      <p className={classNames("text-rose-800", "ml-3 text-base font-bold")}>
        The experts will handle everything for you.
      </p>
    ),
    description: (
      <p
        className={classNames("text-rose-800", "mt-2 mr-2 text-sm font-medium")}
      >
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
          stroke="100"
          colors="primary:#F43F5E,secondary:#F43F5E"
          style={{ width: 35, height: 35, text: "center" }}
        />
      </div>
    ),
  },
]
