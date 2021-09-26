import React from "react"
import { useMachine } from "@xstate/react"
import { wizardMachine } from "../machines/wizardMachine"
import Layout from "../layout"
import { RadioQuizGroup } from "../quiz-groups/radio-group"
import { InputGroup } from "../quiz-groups/input-group"
import { Card } from "./card"
import { Notes } from "../quiz-groups/notes"

export const Wizard = () => {
  const [current, send] = useMachine(wizardMachine)

  const wizardCtx = current.context
  console.log("wizardCtx: ", wizardCtx)

  return (
    <Layout>
      {current.matches("type_of_project") ? (
        <Card
          title="What type of project is it?"
          onChange={value => send("CHANGE", { value })}
          submit={value => send("NEXT")}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={0} />
        </Card>
      ) : current.matches("zipcode") ? (
        <Card
          title="Your project's ZIP code?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <InputGroup
            id={1}
            type="text"
            name="zipcode"
            input_id="zipcode"
            maxLength={9}
            placeholder="33015"
          />
        </Card>
      ) : current.matches("emergency") ? (
        <Card
          title="Is this an emergency?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={2} />
        </Card>
      ) : current.matches("nature_of_problem") ? (
        <Card
          title="What best describes the nature of the problem?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={3} />
        </Card>
      ) : current.matches("ac_unit_age") ? (
        <Card
          title="How old is your current air conditioning system?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={4} />
        </Card>
      ) : current.matches("project_status") ? (
        <Card
          title="Choose the appropiate status for your project"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={5} />
        </Card>
      ) : current.matches("moving") ? (
        <Card
          title="Are you in the process of moving into or out of this home?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={6} />
        </Card>
      ) : current.matches("project_deadline") ? (
        <Card
          title="When would you like this request to be completed?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={7} />
        </Card>
      ) : current.matches("covered_by_insurance") ? (
        <Card
          title="Is this request covered by an insurance claim?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={8} />
        </Card>
      ) : current.matches("owner_or_authorized_person") ? (
        <Card
          title="Are you the owner or authorized to make property changes?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <RadioQuizGroup id={9} />
        </Card>
      ) : current.matches("project_notes") ? (
        <Card
          title="Please tell us a little about your project"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <Notes id={10} />
        </Card>
      ) : current.matches("fullname") ? (
        <Card
          title="What is your full name?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <InputGroup
            id={11}
            type="text"
            name="fullname"
            input_id="fullname"
            maxLength={100}
            placeholder="John Apple"
          />
        </Card>
      ) : current.matches("phone") ? (
        <Card
          title="What is your phone number?"
          submit={value => send("NEXT", { value })}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          wizardCtx={wizardCtx}
        >
          <InputGroup
            id={12}
            type="tel"
            name="tel"
            input_id="tel"
            maxLength={10}
            placeholder="555-555-5555"
          />
        </Card>
      ) : current.matches("loading") ? (
        <strong>Loading...</strong>
      ) : current.matches("failure") ? (
        <strong>FAILURE...</strong>
      ) : current.matches("error") ? (
        <strong>Error...</strong>
      ) : current.matches("success") ? (
        <div>THANK YOU PAGE! </div>
      ) : null}
    </Layout>
  )
}
