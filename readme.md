# Music Api

### How to run the project?

1. First, clone the repository
2. Run `npm install`
3. Run `npm run dev`

### Routes

_LOGIN_: **POST** `localhost:3000/user/login`
Request:
```
{
	    "username": "gabriel",
	    "password": "1234"
}
```
Response: 
```   
{
        "token": 18191787
    }
```

_REGISTER_: **POST** `localhost:3000/user/register`
Request:
```
{
	    "username": "gabriel",
	    "password": "1234"
}
```

Response: 
```   
{
	    "message": "user created successfully"
    }
```

_ALBUMS_: **GET** `localhost:3000/albums`
header: `Authorization: Bearer ${token}`
Request:
Response: 
```
[
	{
		"id": "1",
		"album": "Angra",
		"img": "https://m.media-amazon.com/images/I/51Yee8dkecL._UF1000,1000_QL80_.jpg"
	},
	{
		"id": "2",
		"album": "Legiao",
		"img": "https://www.vagalume.com.br/legiao-urbana/discografia/legiao-urbana.jpg"
	},
	{
		"id": "3",
		"album": "Iron maden",
		"img": "https://pbs.twimg.com/media/F9c7D_vX0AAkl7C?format=jpg&name=large"
	},
	{
		"id": "4",
		"album": "Guns",
		"img": "https://www12.senado.leg.br/radio/1/capitulo-rock/2020/01/31/guns-n2019-roses/guns_n_roses.jpg/@@images/24c8f793-0823-4756-b0e7-3c1f1b71fb1e.jpeg"
	}
]
```
