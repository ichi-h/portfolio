# proto

## Haskell

```
protoc --plugin=protoc-gen-haskell=`which proto-lens-protoc` \
  --haskell_out=gen/haskell \
  --proto_path=haskell \
  haskell/*.proto
```
