# Weero Task Backend

### start server

git clone

```
npm i
```

- setup .env variables name in config file

```
npm start
or
npm run dev

```
- Local Server
    - http://localhost:5000

## API Routes

### Task routes
- /api/v1/task (GET)
- /api/v1/task/create (POST)
- /api/v1/task/:id (DELETE)
- /api/v1/task/update/:id (PATCH)



## Demo data
- /api/v1/task/create (POST)
{
    "category":"Demo 2",
    "subCategoriy": "Sub Demo 2",
    "image":"demo2.jpg",
    "price": 600,
    "discountPrice": 200
  }
