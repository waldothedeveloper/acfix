import { useState, useEffect, useCallback } from "react"
import { quiz } from "../components/project-questions-2/quiz"

export const useControlQuizSteps = quizValidate => {
  const [activeStep, setActiveStep] = useState(0)
  const [responses, setResponses] = useState({})
  const [errors, setErrors] = useState({})

  const [waitForZipcodeValidation, setWaitForZipcodeValidation] =
    useState(false)

  //
  const verifyIfErrors = useCallback(() => {
    return setErrors(quizValidate(responses))
  }, [quizValidate, responses])

  useEffect(() => {
    verifyIfErrors()

    return () => {
      //
    }
  }, [responses, verifyIfErrors])

  // verify zipcode
  useEffect(() => {
    const verifyZIPcode = async () => {
      await window
        .fetch(`/api/verify-zipcode?query=${responses.zipcode_from_user}`)
        .then(res => res.json())
        .then(data => {
          

          if (data?.results[`${responses.zipcode_from_user}`]?.length > 0) {
            setWaitForZipcodeValidation(false)
            const { city, postal_code, state } =
              data?.results[`${responses.zipcode_from_user}`][0]

            // ! I AM UPDATING VALID ZIPCODE HERE
            setResponses(prevState => ({
              ...prevState,
              verifiedZipcode: {
                city,
                postal_code,
                state,
              },
            }))
          }
        })
        .catch(err => {
          // console.log("err trying to verify zip code", err)
          setWaitForZipcodeValidation(false)
        })
    }

    if (
      !Object.keys(errors).includes("zipcode_from_user") &&
      waitForZipcodeValidation
    ) {
      verifyZIPcode()
    }
  }, [responses, errors, waitForZipcodeValidation])

  // optional steps
  const isStepOptional = step => {
    return step === 1
  }

  // next step
  const handleNext = () => {
    if (activeStep < 12) {
      if (
        activeStep === 0 &&
        !Object.keys(errors).includes("type_of_project")
      ) {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
      }
      if (
        quiz[activeStep].templateType === "zipcode" &&
        !Object.keys(errors).includes("zipcode_from_user") &&
        responses.verifiedZipcode
      ) {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
      }
    }
  }

  // previous step
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  // skip step
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("you cannot skip a step that is NOT optional")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  // start from zero
  const handleReset = () => {
    setActiveStep(0)
  }

  // answers
  const handleAnswers = event => {
    if (quiz[activeStep].templateType === "zipcode") {
      setWaitForZipcodeValidation(true)
      let value = event.target.value
      let name = event.target.name

      //
      setResponses(prevRes => ({
        ...prevRes,
        [name]: value,
      }))
    }

    if (quiz[activeStep].templateType === "info") {
      let value = event.target.value
      let name = event.target.name
      setResponses(prevRes => ({
        ...prevRes,
        [name]: value,
      }))
    }

    if (quiz[activeStep].templateType === "fullname") {
      let value = event.target.value
      let name = event.target.name
      setResponses(prevRes => ({
        ...prevRes,
        [name]: value,
      }))
    }

    if (quiz[activeStep].templateType === "phone_number") {
      let value = event.target.value
      let name = event.target.name
      setResponses(prevRes => ({
        ...prevRes,
        [name]: value,
      }))
    }

    if (quiz[activeStep].templateType === "radio") {
      if (activeStep === 0) {
        setResponses(prevRes => ({
          ...prevRes,
          type_of_project: event.msg,
        }))
      } else if (activeStep === 2) {
        setResponses(prevRes => ({
          ...prevRes,
          is_this_an_emergency: event.msg,
        }))
      } else if (activeStep === 3) {
        setResponses(prevRes => ({
          ...prevRes,
          problem_nature: event.msg,
        }))
      } else if (activeStep === 4) {
        setResponses(prevRes => ({
          ...prevRes,
          ac_unit_age: event.msg,
        }))
      } else if (activeStep === 5) {
        setResponses(prevRes => ({
          ...prevRes,
          project_status: event.msg,
        }))
      } else if (activeStep === 6) {
        setResponses(prevRes => ({
          ...prevRes,
          moving_in_or_out: event.msg,
        }))
      } else if (activeStep === 7) {
        setResponses(prevRes => ({
          ...prevRes,
          project_deadline: event.msg,
        }))
      } else if (activeStep === 8) {
        setResponses(prevRes => ({
          ...prevRes,
          covered_by_insurance_claim: event.msg,
        }))
      } else if (activeStep === 9) {
        setResponses(prevRes => ({
          ...prevRes,
          owner_of_property: event.msg,
        }))
      }
    }
  }

  const handleSubmit = event => {
    if (event) event.preventDefault()

    verifyIfErrors()
  }

  return {
    errors,
    responses,
    activeStep,
    handleAnswers,
    handleSubmit,
    handleNext,
    handleBack,
    handleSkip,
    handleReset,
    waitForZipcodeValidation,
  }
}
