import { createMachine, assign } from "xstate"

function validate(value) {
  return new Promise((resolve, reject) => {
    return resolve()
  })
}

export const stepMachine = createMachine({
  initial: "editing",
  context: {
    value: "",
  },
  states: {
    editing: {
      on: {
        CHANGE: {
          target: ".idle",
          actions: assign({
            value: (ctx, e) => e.value,
          }),
        },
        SUBMIT: "validating",
      },
      initial: "idle",
      states: {
        idle: {},
        invalid: {},
      },
    },
    validating: {
      invoke: {
        id: "validating",
        src: ctx => validate(ctx.value),
        onDone: "validated",
        onError: "editing.invalid",
      },
    },
    validated: {
      entry: "submit",
      type: "final",
    },
  },
})
