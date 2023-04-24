# sws

step 1 : npm i

step 2: npm run start or npm run dev


curl exammple :-

```

curl --location 'localhost:8000/user/userdetails' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImRpdnlhIiwiaWF0IjoxNTE2MjM5MDIyfQ.336blejzlkd-5SL_wCoZ7CIf6yZEmDXXihITNL4buXE' \
--data ''

curl --location 'localhost:8000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "emailOrUserName":"divyaNigam132",
    "password":"divya@123"
}'


curl --location 'localhost:8000/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Divya Nigam",
    "username":"divyaNigam132",
    "email":"divyanigam132@gmail.com",
    "password":"divya@123"
}'


```
