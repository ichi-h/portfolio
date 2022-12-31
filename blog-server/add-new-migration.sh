dir_name=./db/migrations/`date "+%Y_%m_%d"`_$1/
mkdir $dir_name

touch $dir_name"up.sql"
touch $dir_name"down.sql"
