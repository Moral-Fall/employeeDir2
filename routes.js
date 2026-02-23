import express from "express"
import employees from "#db/employees"

const router = express.router()

export default router 


router.get("/", (req, res) => {
res.send(employees)
}); 

// using router over app because we are mot in the main file
router.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length)
  res.json(employees[randomIndex]);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  const foundEmployee = employees.find((employee) => employee.id === id)

  if (!employee) {
    return res.status(404).send("Employee Not Found")
  }
  res.json(foundEmployee)
})
