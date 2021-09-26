import { createMachine, assign } from "xstate"
const zipCodeRegex = /^\d{5,6}(?:[-\s]\d{4})?$/

const submit = ctx => {
  // console.log("submit event", ctx)
  return new Promise((resolve, reject) => {
    return resolve()
  })
}

function validate(value) {
  return new Promise((resolve, reject) => {
    return resolve()
  })
}

export const wizardMachine = createMachine({
  id: "wizard",
  context: {
    type_of_project: "",
    zipcode: "",
    emergency: "",
    nature_of_problem: "",
    ac_unit_age: "",
    project_status: "",
    moving: false,
    project_deadline: "",
    covered_by_insurance: false,
    owner_or_authorized_person: true,
    project_notes: "",
    fullname: "",
    phone: "",
  },
  initial: "type_of_project",
  states: {
    type_of_project: {
      on: {
        NEXT: {
          target: "zipcode",
          cond: ctx => ctx.type_of_project !== "",
        },
        CHANGE: {
          actions: assign({
            type_of_project: (ctx, e) => e.value,
          }),
        },
      },
    },
    zipcode: {
      on: {
        NEXT: {
          target: "emergency",
          cond: ctx => zipCodeRegex.test(ctx.zipcode),
        },
        CHANGE: {
          actions: assign({
            zipcode: (ctx, e) => e.value,
          }),
        },
        PREV: "type_of_project",
      },
    },
    emergency: {
      on: {
        NEXT: {
          target: "nature_of_problem",
          cond: ctx => ctx.emergency !== "",
        },
        CHANGE: {
          actions: assign({
            emergency: (ctx, e) => e.value,
          }),
        },
        PREV: "zipcode",
      },
    },
    nature_of_problem: {
      on: {
        NEXT: {
          target: "ac_unit_age",
          cond: ctx => ctx.nature_of_problem !== "",
        },
        CHANGE: {
          actions: assign({
            nature_of_problem: (ctx, e) => e.value,
          }),
        },
        PREV: "emergency",
      },
    },
    ac_unit_age: {
      on: {
        NEXT: {
          target: "project_status",
          cond: ctx => ctx.ac_unit_age !== "",
        },
        CHANGE: {
          actions: assign({
            ac_unit_age: (ctx, e) => e.value,
          }),
        },
        PREV: "nature_of_problem",
      },
    },
    project_status: {
      on: {
        NEXT: {
          target: "moving",
          cond: ctx => ctx.project_status !== "",
        },
        CHANGE: {
          actions: assign({
            project_status: (ctx, e) => e.value,
          }),
        },
        PREV: "ac_unit_age",
      },
    },
    moving: {
      on: {
        NEXT: {
          target: "project_deadline",
          cond: ctx => ctx.moving !== "",
        },
        CHANGE: {
          actions: assign({
            moving: (ctx, e) => e.value,
          }),
        },
        PREV: "project_status",
      },
    },
    project_deadline: {
      on: {
        NEXT: {
          target: "covered_by_insurance",
          cond: ctx => ctx.project_deadline !== "",
        },
        CHANGE: {
          actions: assign({
            project_deadline: (ctx, e) => e.value,
          }),
        },
        PREV: "moving",
      },
    },
    covered_by_insurance: {
      on: {
        NEXT: {
          target: "owner_or_authorized_person",
          cond: ctx => ctx.covered_by_insurance !== "",
        },
        CHANGE: {
          actions: assign({
            covered_by_insurance: (ctx, e) => e.value,
          }),
        },
        PREV: "project_deadline",
      },
    },
    owner_or_authorized_person: {
      on: {
        NEXT: {
          target: "project_notes",
          cond: ctx => ctx.owner_or_authorized_person !== "",
        },
        CHANGE: {
          actions: assign({
            owner_or_authorized_person: (ctx, e) => e.value,
          }),
        },
        PREV: "covered_by_insurance",
      },
    },
    project_notes: {
      on: {
        NEXT: {
          target: "fullname",
          cond: ctx => ctx.project_notes !== "",
        },
        CHANGE: {
          actions: assign({
            project_notes: (ctx, e) => e.value,
          }),
        },
        PREV: "owner_or_authorized_person",
      },
    },
    fullname: {
      on: {
        NEXT: {
          target: "phone",
          cond: ctx => ctx.fullname !== "",
        },
        CHANGE: {
          actions: assign({
            fullname: (ctx, e) => e.value,
          }),
        },
        PREV: "project_notes",
      },
    },
    phone: {
      on: {
        NEXT: {
          target: "loading",
          cond: ctx => ctx.phone !== "",
        },
        CHANGE: {
          actions: assign({
            phone: (ctx, e) => e.value,
          }),
        },
        PREV: "fullname",
      },
    },
    loading: {
      invoke: {
        id: "submitting",
        src: ctx => submit(ctx),
        onDone: "success",
        onError: "failure",
      },
    },
    failure: {
      on: {
        RETRY: console.log("HOW THE HECK DOES THIS KEEPS WORKING?"),
      },
    },
    success: {
      type: "final",
    },
  },
})
