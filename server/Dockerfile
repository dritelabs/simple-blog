# Build stage
FROM golang:1.19-alpine AS builder

WORKDIR /app

COPY . .

RUN go build -o /app/cmd/api/main /app/cmd/api/main.go

# Run stage
FROM alpine:3.16

WORKDIR /app

COPY --from=builder /app/cmd/api/main .

COPY app.env .

EXPOSE 8080

CMD [ "/app/main" ]