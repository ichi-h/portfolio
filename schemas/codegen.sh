project=''
out=''
lang=''

if [ ! -e ./$1 ]; then
  echo 'ERR: Enter a project name for the first argument'
  exit 1
fi

project=$1

if [ "$2" = 'ts' ]; then
  out='typescript-fetch'
fi

if [ "$2" = 'fs' ]; then
  out='fsharp-functions'
fi

if [ "$out" = '' ]; then
  echo 'ERR: Enter ts or fs for the second argument'
  exit 1
fi

lang=$2

docker run --rm \
    -v `pwd`/$project:/local/packages \
    -v `pwd`/out/:/local/out \
    openapitools/openapi-generator-cli generate \
    -i /local/packages/openapi.yaml \
    -g $out \
    -o /local/out/$project/$lang

echo "sudo chmod -R 777 out/$project/$lang"
sudo sudo chmod -R 777 out/$project/$lang
