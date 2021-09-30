import { createMachine, assign } from "xstate"
import {
  zipCodeRegex,
  verifyZipcode,
  formatPhoneNumber,
  validatePhoneNumber,
} from "../../utils/quiz_form_validation"

//
export const stepMachine = createMachine(
  {
    id: "stepMachine",
    initial: "one",
    context: {
      errorMessage: "",
      type_of_project: "",
      zipcode: "",
      verifiedAddress: undefined,
      address: undefined,
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
      phoneRegex: undefined,
      completed: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
      },
    },
    states: {
      //! # 1 type of project
      one: {
        on: {
          NEXT: {
            target: "two",
            cond: ctx => {
              const typeOfProject = ctx.type_of_project
              return (
                typeOfProject === "Install a Central Air Conditioning System" ||
                typeOfProject ===
                  "Repair or Service a Central Air Conditioning System"
              )
            },
          },
          CONFIRM_TYPE_OF_PROJECT: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CONFIRM_TYPE_OF_PROJECT") return {}
                return {
                  type_of_project: event.value,
                  completed: {
                    ...context.completed,
                    one: true,
                  },
                }
              }),
            ],
          },
        },
      },
      //! # 2 zipcode
      two: {
        on: {
          NEXT: "three",
          PREV: "one",
          //! User can always change zip code in this state
          EDIT_ZIPCODE: {
            actions: ["assignZipCodeToContext"],
          },
        },
        // Different states for pending/valid/invalid/validating
        initial: "pending",
        states: {
          pending: {
            always: {
              cond: "regexZipCode",
              target: "validating",
            },
          },
          validating: {
            invoke: {
              src: (ctx, e) => verifyZipcode(ctx.zipcode),
              onDone: [
                {
                  cond: (ctx, event) =>
                    Object.keys(event.data).length > 0 ?? false,
                  actions: "validateZipCodeAndSaveToContext",
                  target: "valid",
                },
                { target: "invalid" },
              ],
              onError: [{ target: "retry" }],
            },
          },
          retry: {
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
          },
          valid: {
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
          },
          invalid: {
            entry: assign({ errorMessage: "Please enter a valid zipcode" }),
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
            exit: ["clearErrorMessage"],
          },
        },
      },
      // ! # 3 emergency
      three: {
        on: {
          NEXT: {
            target: "four",
            cond: ctx => {
              const emergency = ctx.emergency
              return emergency === "YES" || emergency === "NO"
            },
          },
          PREV: "two",
          CONFIRM_EMERGENCY: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CONFIRM_EMERGENCY") return {}
                return {
                  emergency: event.value,
                  completed: {
                    ...context.completed,
                    three: true,
                  },
                }
              }),
            ],
          },
        },
      },
      //! # 4. problem nature
      four: {
        on: {
          CONFIRM_PROBLEM_NATURE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CONFIRM_PROBLEM_NATURE") return {}
                return {
                  nature_of_problem: event.value,
                  completed: {
                    ...context.completed,
                    four: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "five",
            cond: ctx => {
              return ctx.nature_of_problem !== ""
            },
          },
          PREV: "three",
        },
      },
      //! # 5 ac unit age
      five: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  ac_unit_age: event.value,
                  completed: {
                    ...context.completed,
                    five: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "six",
            cond: ctx => {
              return ctx.ac_unit_age !== ""
            },
          },
          PREV: "four",
        },
      },
      //! # 6. project status
      six: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  project_status: event.value,
                  completed: {
                    ...context.completed,
                    six: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "seven",
            cond: ctx => {
              return ctx.project_status !== ""
            },
          },
          PREV: "five",
        },
      },
      //! # 7. moving into or out
      seven: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  moving: event.value,
                  completed: {
                    ...context.completed,
                    seven: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "eight",
            cond: ctx => {
              return ctx.moving !== ""
            },
          },
          PREV: "six",
        },
      },
      //! # 8  project_deadline
      eight: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  project_deadline: event.value,
                  completed: {
                    ...context.completed,
                    eight: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "nine",
            cond: ctx => {
              return ctx.project_deadline !== ""
            },
          },
          PREV: "seven",
        },
      },
      //! # 9  covered by insurance
      nine: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  covered_by_insurance: event.value,
                  completed: {
                    ...context.completed,
                    nine: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "ten",
            cond: ctx => {
              return (
                ctx.covered_by_insurance === "YES" ||
                ctx.covered_by_insurance === "NO"
              )
            },
          },
          PREV: "eight",
        },
      },
      //! # 10. owner_or_authorized_person
      ten: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  owner_or_authorized_person: event.value,
                  completed: {
                    ...context.completed,
                    ten: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "eleven",
            cond: ctx => {
              return (
                ctx.owner_or_authorized_person === "YES" ||
                ctx.owner_or_authorized_person === "NO"
              )
            },
          },
          PREV: "nine",
        },
      },
      //! # 11. project_notes
      eleven: {
        on: {
          CHANGE: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  project_notes: event.value,
                  completed: {
                    ...context.completed,
                    eleven: true,
                  },
                }
              }),
            ],
          },
          NEXT: {
            target: "twelve",
            cond: ctx => {
              return ctx.project_notes !== ""
            },
          },
          PREV: "ten",
        },
      },
      //! # 12. fullname
      twelve: {
        initial: "pending",
        states: {
          pending: {
            always: [
              {
                target: "completeTask",
                cond: (ctx, event) => ctx.fullname.length > 0,
              },
              {
                target: "incompleteTask",
                cond: (ctx, event) => ctx.fullname === "",
              },
            ],
          },
          completeTask: {
            entry: ["makeItTrue"],
            on: {
              CHANGE: {
                actions: ["editFullname"],
                target: "pending",
              },
            },
          },
          incompleteTask: {
            entry: ["makeItFalse"],
            on: {
              CHANGE: {
                actions: ["editFullname"],
                target: "pending",
              },
            },
          },
        },
        on: {
          CHANGE: {
            actions: ["editFullname"],
          },
          NEXT: {
            target: "thirteen",
            cond: ctx => {
              return ctx.fullname !== ""
            },
          },
          PREV: "eleven",
        },
      },
      //! # 13. phone number
      thirteen: {
        on: {
          CHANGE: {
            actions: ["editPhoneNumber", "showInvalidPhoneNumberErrorMessage"],
          },
          NEXT: "fourteen",
          PREV: "twelve",
        },
        initial: "idle",
        states: {
          idle: {
            always: {
              target: "validating",
              cond: (ctx, event) => ctx.phone.length > 2,
            },
          },
          validating: {
            entry: ["makePhoneFalse"],
            always: {
              target: "valid",
              cond: (ctx, event) => validatePhoneNumber(ctx.phone),
            },
          },
          valid: {
            entry: [
              "makePhoneTrue",
              "clearErrorMessage",
              assign({ phoneRegex: true }),
            ],
            on: {
              CHANGE: {
                target: "idle",
                actions: [
                  "editPhoneNumber",
                  "showInvalidPhoneNumberErrorMessage",
                ],
              },
            },
          },
        },
      },
      fourteen: { type: "final" },
    },
  },
  {
    actions: {
      showInvalidPhoneNumberErrorMessage: assign((ctx, event) => {
        return ctx.phone.length > 0
          ? {
              phoneRegex: undefined,
              errorMessage: "Please enter a valid phone number",
            }
          : {
              phoneRegex: undefined,
              errorMessage: "",
            }
      }),
      editPhoneNumber: assign((context, event) => {
        if (event.type !== "CHANGE") return {}

        return {
          phone: formatPhoneNumber(event.value),
        }
      }),
      editFullname: assign((context, event) => {
        if (event.type !== "CHANGE") return {}

        return {
          fullname: event.value,
        }
      }),
      makePhoneTrue: assign((context, event) => {
        return {
          completed: {
            ...context.completed,
            thirteen: true,
          },
        }
      }),
      makePhoneFalse: assign((context, event) => {
        return {
          completed: {
            ...context.completed,
            thirteen: false,
          },
        }
      }),
      makeItTrue: assign((context, event) => {
        return {
          completed: {
            ...context.completed,
            twelve: true,
          },
        }
      }),
      makeItFalse: assign((context, event) => {
        return {
          completed: {
            ...context.completed,
            twelve: false,
          },
        }
      }),
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
      assignErrorMessageToContext: assign((context, event) => {
        let _a
        _a = event.data
        console.log("error Message: ", _a)

        if (_a === null || _a === void 0) {
          return {
            errorMessage: void 0,
          }
        }

        if (_a.message) {
          return {
            errorMessage: _a.message,
          }
        }

        return {
          errorMessage: "An unknown error occurred",
        }
      }),
      assignZipCodeToContext: assign((ctx, event) => {
        return {
          zipcode: event.value,
          verifiedAddress: "pending",
          address: undefined,
          completed: {
            ...ctx.completed,
            two: false,
          },
        }
      }),
      validateZipCodeAndSaveToContext: assign((ctx, event) => {
        if (Object.keys(event.data).length > 0) {
          const { city, state, postal_code } = event.data[ctx.zipcode][0]
          return {
            address: {
              city,
              state,
              postal_code,
            },
            completed: {
              ...ctx.completed,
              two: true,
            },
          }
        }
      }),
    },

    guards: {
      regexZipCode: (ctx, event) =>
        ctx.verifiedAddress !== void 0 && zipCodeRegex.test(ctx.zipcode),
    },

    // activities, guards, delays, etc.
  }
)
