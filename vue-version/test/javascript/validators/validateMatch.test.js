import validateMatch from "validators/validateMatch"

const simpleEmailValidator = validateMatch(/.+@.+/)

test('it passes with a simple email', () => {
  const email = "joe@example.com"

  expect(simpleEmailValidator(email).valid).toBe(true)
})

test('it fails with an invalid email', () => {
  const email = "joe#example.com"

  expect(simpleEmailValidator(email).valid).toBe(false)
  expect(simpleEmailValidator(email).message).toBe("joe#example.com doesn't match /.+@.+/")
})
