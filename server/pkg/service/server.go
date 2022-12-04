package service

import (
	"github.com/drite/simple-blog/pkg/config"
	pb "github.com/drite/simple-blog/pkg/proto"
	"gorm.io/gorm"
)

type Server struct {
	pb.UnimplementedBlogServer
	Config config.Config
	DB     *gorm.DB
}
