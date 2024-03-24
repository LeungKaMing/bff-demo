# bff-demo
Docker + Nestjs + MongoDB

# steps
- Use「pnpx prisma generate」 in bff/
- Use 「docker build -t my-bff .」to build image which marked in Root Directory
- Use 「docker-compose up -d」 to create all containers in Root Directory
- Use 「curl localhost: 3001/demo」