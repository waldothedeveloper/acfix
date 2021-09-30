import React from "react"
import Layout from "../layout"
import { useMachine } from "@xstate/react"
import { stepMachine } from "../machines/stepMachine"
import { RadioQuizGroup } from "../quiz-groups/radio-group"
import { InputGroup } from "../quiz-groups/input-group"
import { Card } from "./card"
import { Notes } from "../quiz-groups/notes"
import { ThankYou } from "../quiz-groups/thank-you"

export const Wizard = () => {
  const [current, send] = useMachine(stepMachine)
  const stepContext = current.context

  return (
    <Layout>
      {current.matches("one") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="What type of project is it?"
          onChange={value => send("CONFIRM_TYPE_OF_PROJECT", { value })}
          submit={value => send("NEXT")}
          onPrev={value => send("PREV")}
          context={stepContext}
          state={current}
        >
          <RadioQuizGroup id={0} />
        </Card>
      ) : current.matches("two") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Let's get you the closest HVAC tech."
          subtitle="Your project's Zipcode?"
          onChange={value => send("EDIT_ZIPCODE", { value })}
          submit={value => send("NEXT")}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <InputGroup
            id={1}
            type="text"
            name="zipcode"
            input_id="zipcode"
            maxLength={5}
            placeholder="33015"
          />
        </Card>
      ) : current.matches("three") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Is this an emergency?"
          onChange={value => send("CONFIRM_EMERGENCY", { value })}
          submit={value => send("NEXT")}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={2} />
        </Card>
      ) : current.matches("four") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="What best describes the nature of the problem?"
          submit={value => send("NEXT")}
          onChange={value => send("CONFIRM_PROBLEM_NATURE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={3} />
        </Card>
      ) : current.matches("five") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="How old is your current air conditioning system?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={4} />
        </Card>
      ) : current.matches("six") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Choose the appropiate status for your project"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={5} />
        </Card>
      ) : current.matches("seven") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Are you in the process of moving into or out of this home?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={6} />
        </Card>
      ) : current.matches("eight") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="When would you like this request to be completed?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={7} />
        </Card>
      ) : current.matches("nine") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Is this request covered by an insurance claim?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={8} />
        </Card>
      ) : current.matches("ten") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Are you the owner or authorized to make property changes?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <RadioQuizGroup id={9} />
        </Card>
      ) : current.matches("eleven") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="Please tell us a little about your project"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <Notes id={10} />
        </Card>
      ) : current.matches("twelve") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="What is your full name?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
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
      ) : current.matches("thirteen") ? (
        <Card
          dataMachine={stepMachine.id}
          dataState={current.toStrings().join(" ")}
          title="How may we contact you?"
          subtitle="What is your phone number?"
          submit={value => send("NEXT")}
          onChange={value => send("CHANGE", { value })}
          onPrev={value => send("PREV")}
          state={current}
          context={stepContext}
        >
          <InputGroup
            id={12}
            type="tel"
            name="tel"
            input_id="tel"
            maxLength={12}
            placeholder="555-555-5555"
          />
        </Card>
      ) : (
        current.matches("fourteen") && <ThankYou />
      )}
    </Layout>
  )
}
