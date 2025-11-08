# Docker Setup for Gaby's Map

## Build the imagen

```bash
docker build -t gabys-map .
```

## Execute the container

```bash
docker run -p 3000:3000 gabys-map
```

App should be available on `http://localhost:3000`

## Use Docker Compose (recomended)

```bash
# Build and execute
docker-compose up -d

# See logs
docker-compose logs -f

# Stop
docker-compose down
```

## Comandos útiles

```bash
# See Images
docker images

# Containers on execution
docker ps

# Stop a container
docker stop <container-id>

# Delete an imagen
docker rmi gabys-map

# Start on Interactive mode (for debugging)
docker run -it -p 3000:3000 gabys-map sh
```

## Enviroments variables

If you need to configure enviroments variables, you can do it like this:

```bash
docker run -p 3000:3000 -e NODE_ENV=production gabys-map
```

Or in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

