dirs=`find ./db/migrations/ -type d`
for dir in $dirs; do
  folder=`basename $dir`
  if [ $folder != 'migrations' ]; then
    source ./shells/migrate.sh $folder
  fi
done
