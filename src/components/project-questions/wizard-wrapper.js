import React, { useEffect, useState } from "react"
import Layout from "../layout"
import { Wizard } from "./wizard"
import { useMachine } from "@xstate/react"
import { stepMachine } from "../machines/stepMachine"
import { ThankYou } from "../quiz-groups/thank-you"
import { StaticImage } from "gatsby-plugin-image"

export const WizardWrapper = () => {
  const [serverResponse, setServerResponse] = React.useState(``)
  console.log("serverResponse: ", serverResponse)
  const [current, send] = useMachine(stepMachine)

  const handleSubmit = async event => {
    console.warn("is this shit submitting!????")
    const response = await window
      .fetch(`/api/airtableDev`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(current.context),
      })
      .then(res => res.json())
    setServerResponse(response)
  }

  // this clean the values after form is submitted
  useEffect(() => {
    if (serverResponse?.message === "Successfully submitted message") {
      console.log("All data sent successfully to AirTable")
    }
    return () => {
      setServerResponse(``)
    }
  }, [serverResponse])

  //
  return (
    <Layout>
      {current.matches("fourteen") ? (
        <ThankYou />
      ) : (
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
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </Layout>
  )
}
