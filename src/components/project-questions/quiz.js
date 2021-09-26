export const quiz = [
  {
    id: 0,
    templateType: "radio",
    question: "What type of project is it?",
    options: [
      { id: 0, msg: "Install a Central Air Conditioning System" },
      { id: 1, msg: "Repair or Service a Central Air Conditioning System" },
    ],
  },
  {
    id: 1,
    templateType: "zipcode",
    question: "Your project's ZIP code?",
  },
  {
    id: 2,
    templateType: "radio",
    question: "Is this an emergency?",
    options: [
      { id: 0, msg: "YES" },
      { id: 1, msg: "NO" },
    ],
  },
  {
    id: 3,
    templateType: "radio",
    question: "What best describes the nature of the problem?",
    options: [
      { id: 1, msg: "Unit not running" },
      { id: 2, msg: "No air conditioning in one location" },
      { id: 3, msg: "No air conditioning in all locations" },
      { id: 4, msg: "Not enough cooling in one location" },
      { id: 5, msg: "Not enough cooling anywhere" },
      { id: 6, msg: "Leaking" },
      { id: 7, msg: "Annual maintenance" },
      { id: 8, msg: "Inefficient HVAC" },
    ],
  },
  {
    id: 4,
    templateType: "radio",
    question: "How old is your current air conditioning system?",
    options: [
      { id: 1, msg: "Less than 5 years" },
      { id: 2, msg: "5 - 10 years" },
      { id: 3, msg: "11 - 15 years" },
      { id: 4, msg: "16 - 20 years" },
      { id: 5, msg: "More than 20 years" },
      { id: 6, msg: "Don't know" },
    ],
  },
  {
    id: 5,
    templateType: "radio",
    question: "Choose the appropiate status for your project",
    options: [
      { id: 0, msg: "Ready to hire" },
      { id: 1, msg: "Planing & Budgeting" },
      { id: 2, msg: "Looking for Parts Only" },
    ],
  },
  {
    id: 6,
    templateType: "radio",
    question: "Are you in the process of moving into or out of this home?",
    options: [
      { id: 0, msg: "YES" },
      { id: 1, msg: "NO" },
    ],
  },
  {
    id: 7,
    templateType: "radio",
    question: "When would you like this request to be completed?",
    options: [
      { id: 1, msg: "Timing is flexible" },
      { id: 2, msg: "Within 1 week" },
      { id: 3, msg: "1 - 2 weeks" },
      { id: 4, msg: "More than 2 weeks" },
      { id: 5, msg: "Immediately" },
      { id: 6, msg: "Within 24 hours" },
    ],
  },
  {
    id: 8,
    templateType: "radio",
    question: "Is this request covered by an insurance claim?",
    options: [
      { id: 0, msg: "YES" },
      { id: 1, msg: "NO" },
    ],
  },
  {
    id: 9,
    templateType: "radio",
    question: "Are you the owner or authorized to make property changes?",
    options: [
      { id: 0, msg: "YES" },
      { id: 1, msg: "NO" },
    ],
  },
  {
    id: 10,
    templateType: "info",
    question: "Please tell us a little about your project",
  },
  {
    templateType: "fullname",
    id: 11,
    question: "What is your full name?",
  },

  {
    id: 12,
    templateType: "phone_number",
    question: "What is your phone number?",
  },
]
