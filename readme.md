# Music Api

### How to run the project?

1. First, clone the repository
2. Run `npm install`
3. Run `npm run dev`

### Routes

_LOGIN_: **POST** `localhost:3000/user/login`
Request:
`{
	    "username": "gabriel",
	    "password": "1234"
}`
Response: `    {
        "token": 18191787
    }`

_REGISTER_: **POST** `localhost:3000/user/register`
Request:
`{
	    "username": "gabriel",
	    "password": "1234"
}`

Response: `    {
	    "message": "user created successfully"
    }`

_ALBUMS_: **GET** `localhost:3000/albums`
header: `Authorization: Bearer ${token}`
payload:``
