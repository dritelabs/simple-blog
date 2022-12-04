package service

import (
	"context"

	"github.com/drite/simple-blog/pkg/database"
	pb "github.com/drite/simple-blog/pkg/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *Server) ListPosts(ctx context.Context, in *pb.ListPostsRequest) (*pb.ListPostsResponse, error) {
	var posts []database.Post

	if result := s.DB.Find(&posts); result.Error != nil {
		return nil, status.Errorf(codes.Internal, "failed to get posts")
	}

	postsResponse := database.ToListPostsResponse(posts)

	return postsResponse, nil
}
