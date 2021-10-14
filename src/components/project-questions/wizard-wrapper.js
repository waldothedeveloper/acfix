import React, { useCallback } from "react"
import { Wizard } from "./wizard"
import { useMachine } from "@xstate/react"
import { stepMachine } from "../machines/stepMachine"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

export const WizardWrapper = () => {
  const [current, send] = useMachine(stepMachine)

  const handleFetchToDB = useCallback(() => {
    fetch(`/api/airtableDev`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(current.context),
    })
      .then(res => {
        res.json()
      })
      .then(() => navigate("/thank-you"))
      .catch(err => {
        navigate("/submission-error")
        // handle error
      })
  }, [current])

  //
  return (
    <div className="relative my-12 lg:min-h-screen">
      <div className="absolute inset-0">
        <StaticImage
          className="w-full h-full object-cover"
          src="../../images/air-conditioner-unit-minified.jpg"
          alt="ac fix partner"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <Wizard
          current={current}
          send={send}
          stepMachine={stepMachine}
          handleFetchToDB={handleFetchToDB}
        />
      </div>
    </div>
  )
}
