import React from "react"
import Layout from "../layout"
import { Wizard } from "./wizard"
import oldAir from "../../images/air-conditioner-unit-minified.jpg"
import { useMachine } from "@xstate/react"
import { stepMachine } from "../machines/stepMachine"
import { ThankYou } from "../quiz-groups/thank-you"

export const WizardWrapper = () => {
  const [current, send] = useMachine(stepMachine)

  //
  return (
    <Layout>
      {current.matches("fourteen") ? (
        <ThankYou />
      ) : (
        <div className="relative my-12">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src={oldAir}
              alt="ac fix partner"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <Wizard current={current} send={send} stepMachine={stepMachine} />
          </div>
        </div>
      )}
    </Layout>
  )
}
