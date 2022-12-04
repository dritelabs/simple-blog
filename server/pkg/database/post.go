package database

import (
	"google.golang.org/protobuf/types/known/timestamppb"
	"gorm.io/gorm"

	pb "github.com/drite/simple-blog/pkg/proto"
)

// ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
// ID uuid.UUID `json:"id" gorm:"type:uuid;primarykey"`

type Post struct {
	gorm.Model
	ID          int64 `json:"id" gorm:"primaryKey"`
	Title       string
	Description string
}

// func (p *Post) BeforeCreate(tx *gorm.DB) (err error) {
// 	p.ID = uuid.New()

// 	return
// }

func (p *Post) ToPostResponse() *pb.Post {
	return &pb.Post{
		Id:          p.ID,
		Title:       p.Title,
		Description: p.Description,
		CreatedAt:   timestamppb.New(p.CreatedAt),
		UpdatedAt:   timestamppb.New(p.CreatedAt),
	}
}

func ToListPostsResponse(posts []Post) *pb.ListPostsResponse {
	var res []*pb.Post

	for _, p := range posts {
		res = append(res, p.ToPostResponse())
	}

	return &pb.ListPostsResponse{
		Posts: res,
	}
}
