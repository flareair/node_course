# 1

Modify cli_args.js to accept two named parameters (flags),
so the command could look like this:

node cli_args.js --path ./path/to/entity --output-entity-type

`--path` is required parameter
`--entity-type` is optional parameter

By defaut script only outputs entity stats

if `--entity-type` is supplied, the type(file or folder etc.) of entity should be in the output as well as it's stats.

# 2

Write the api server using pure node.js which has two endpoints:

- GET /stats - returns requesters ip address and current GMT time
- POST /users - returns the message "User creation will be available soon"

All other request paths should return "404 Not found" error.
Make sure your app can handle unexpected errors properly.

Please do not use express.js or similar framework for #2
