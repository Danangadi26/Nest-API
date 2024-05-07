# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```JSON
{
  "username" : "danang",
  "password" : "123",
  "name" : "Danang Adi"
}
```

Response Body (Success):

```JSON
{
  "data" : {
    "username" : "danang",
    "name" : "Danang Adi"
  }
}
```

Response Body (Failed):

```JSON
{
  "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```JSON
{
  "username" : "danang",
  "password" : "123"
}
```

Response Body (Success):

```JSON
{
  "data" : {
    "username" : "danang",
    "name" : "Danang Adi",
    "token" : "session_id_generated"
  }
}
```

Response Body (Failed):

```JSON
{
  "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body (Success):

```JSON
{
  "data" : {
    "username" : "danang",
    "name" : "Danang Adi"
  }
}
```

Response Body (Failed):

```JSON
{
  "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```JSON
{
  "password" : "123", // optional, if want to change password
  "name" : "Danang Adi" // optional, if want to change name
}
```

Response Body (Success):

```JSON
{
  "data" : {
    "username" : "danang",
    "name" : "Danang Adi"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :

- Authorization : token

Response Body (Success):

```JSON
{
  "data" : true
}
```
