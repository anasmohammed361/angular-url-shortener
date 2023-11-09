# ANGULAR URL SHORTENER

> We highly recommend you to use Docker compose
> 

# How to Test (Docker)

> Make sure you have [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/)
> 

```bash
docker-compose up --build
```

---

# How to Test (Manually)

- Run `pnpm i` from the root directory
- Run `pnpm build` from the `www` directory
- Copy the `www/dist/www/` contents to `public/`
- Create a `.env` file in the root directory
- Obtain a mongodb uri either running locally or on atlas
- Paste the obtained uri in the `.env` file.

> There is also a `.env.sample` file included for you reference
> 

### Run your Server

```bash
#Run this from the root of the directory
pnpm dev
```

> Now your server will be running on localhost:3000.
>