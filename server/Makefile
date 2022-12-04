protoc:
	protoc --proto_path=../protos --go_out=pkg/proto --go_opt=paths=source_relative \
    --go-grpc_out=pkg/proto --go-grpc_opt=paths=source_relative \
    ../protos/*.proto

.PHONY: protoc