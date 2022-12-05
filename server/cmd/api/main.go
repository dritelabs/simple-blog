package main

import (
	"net"
	"os"

	"github.com/drite/simple-blog/pkg/config"
	"github.com/drite/simple-blog/pkg/database"
	"github.com/drite/simple-blog/pkg/logger"
	pb "github.com/drite/simple-blog/pkg/proto"
	"github.com/drite/simple-blog/pkg/service"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	conf, err := config.LoadConfig(".")

	if err != nil {
		log.Fatal().Err(err).Msg("Failed to load config")
	}

	if conf.Environment == "development" {
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}

	grpcLogger := grpc.UnaryInterceptor(logger.GrpcLogger)

	s := grpc.NewServer(grpcLogger)

	db, err := database.Init(conf)

	if err != nil {
		log.Fatal().Err(err).Msg("Failed to connect database")
	}

	pb.RegisterBlogServer(s, &service.Server{
		DB:     db,
		Config: conf,
	})

	reflection.Register(s)

	listener, err := net.Listen("tcp", conf.GRPCServerAddress)

	if err != nil {
		log.Fatal().Err(err).Msg("Failed to create listener")
	}

	log.Info().Msgf("Server listening on %s", listener.Addr().String())

	err = s.Serve(listener)

	if err != nil {
		log.Fatal().Err(err).Msg("failed to start server")
	}
}
