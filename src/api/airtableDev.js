const Airtable = require("airtable")
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

//
const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" })
    }

    const data = req.body

    if (!data) {
      return res.status(500).json({ error: "There isn't any data." })
    }

    base("ACFIX-dev").create(
      [
        {
          fields: {
            "Lead-Date": "2021-10-13T22:27:00.000Z",
            "What type of project is it?": data.type_of_project,
            "Your project's ZIP code?": `city: ${data.address.city}\n state: ${data.address.state}\n zipcode: ${data.address.postal_code}\n`,
            "Is this an emergency?": data.emergency,
            "What best describes the nature of the problem?":
              data.nature_of_problem,
            "How old is your current air conditioning system? (in years)":
              data.ac_unit_age,
            "Choose the appropriate status for this project":
              data.project_status,
            "When would you like this request to be completed?":
              data.project_deadline,
            "Is this request covered by an insurance claim?":
              data.covered_by_insurance,
            "Are you the owner or authorized to make property changes?":
              data.owner_or_authorized_person,
            "Please tell us a little about your project.": data.project_notes,
            FullName: data.fullname,
            "Phone Number": data.phone,
            "Are you in the process of moving into or out of this home?":
              data.moving,
          },
        },
      ],
      (err, records) => {
        if (err) {
          console.error(err)
          return
        }
        records.forEach(function (record) {
          console.log(record.getId())
        })
      }
    )
  } catch (err) {
    console.log(err)
    res.json({ message: "There has been a big error.", error: err })
  }
}

module.exports = handler
