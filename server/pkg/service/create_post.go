package service

import (
	"context"

	"github.com/drite/simple-blog/pkg/database"
	pb "github.com/drite/simple-blog/pkg/proto"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *Server) CreatePost(ctx context.Context, in *pb.CreatePostRequest) (*pb.PostResponse, error) {
	p := database.Post{
		Title:       in.GetTitle(),
		Description: in.GetDescription(),
	}

	if result := s.DB.Create(&p); result.Error != nil {
		return nil, status.Errorf(codes.Internal, "failed to create user: %s", result.Error)
	}

	log.Printf("Current post id %v", p.ID)

	return &pb.PostResponse{
		Post: p.ToPostResponse(),
	}, nil
}
