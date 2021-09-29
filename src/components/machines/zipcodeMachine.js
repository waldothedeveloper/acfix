import { createMachine, assign } from "xstate"
const zipCodeRegex = /^\d{5,6}(?:[-\s]\d{4})?$/

export const createZipCodeMachine = zipcode => {
  return createMachine({
    id: "zipcode-machine",
    initial: "verifying",
    context: {
      zipcode: "",
      address: {},
      errorMessage: "",
    },
    states: {
      verifying: {
        invoke: {
          id: "verifyZipcode",
          src: () => {
            if (zipCodeRegex.test(zipcode)) {
              return verifyZipcode(zipcode)
            }
          },
          onDone: {
            target: "verified",
            actions: assign({
              address: (ctx, event) => {
                console.log("event.data", event.data)
              },
            }),
          },
          onError: "failure",
        },
      },
      verified: "editing",
      failure: {
        on: {
          RETRY: "editing",
        },
      },
    },
  })
}
