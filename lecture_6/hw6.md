# HW6 Testing

## 1

Take app lecture_5/simple from Lecture 5

Cover it with unit and e2e tests.

#### Unit tests

- Make sure tests are isolated from database and follow FIRST best practices
- Cover all edge cases you think make sense
- Make sure tests are properly organized usind `describe` and it `statements`
- Change Jest configuration if needed in order to run tests under lecture_5/ folder
- Feel free to refacto the code, so it's easier to unit test it
- (OPTIONAL) implement new endpoints to create items and delete single item by id and cover unit test them as well

#### e2e tests (API)

- Make sure database is in expected state before tests are run. Best approach is to wipe and recreate the data before tests are run
- Cover only a few most common scenarios, it's better to cover edge cases using Unit tests
- Feel free to change cypress configuration so that it can pick up tests from lecture_5 folder

## 2 (Optional)

Pick you favorite app (google, vk, facebook etc). You can also use your lab project.
Automate some UI e2e scenarios using Cypress. Take lecture_6/cypress/integration/client/e2e-client-example.spec.ts as example
