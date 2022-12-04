package service

import (
	"context"
	"errors"

	"github.com/drite/simple-blog/pkg/database"
	pb "github.com/drite/simple-blog/pkg/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

func (s *Server) GetPost(ctx context.Context, in *pb.GetPostRequest) (*pb.PostResponse, error) {
	p := database.Post{ID: in.GetId()}

	if result := s.DB.First(&p); result.Error != nil {

		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "post not found")
		}

		return nil, status.Errorf(codes.Internal, "failed to get post")
	}

	return &pb.PostResponse{
		Post: p.ToPostResponse(),
	}, nil
}
