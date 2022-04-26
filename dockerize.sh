docker container rm -f tukki_api_container
docker container rm -f tukki_front_container

docker image rm -f tukki_api
docker image rm -f tukki_front

cd /var/www/html/tukki/api && docker build -t tukki_api .
cd /var/www/html/tukki/frontend && docker build -t tukki_front .

docker run -d -i -t -e WDS_SOCKET_PORT='0' -p 8443:8443 --name=tukki_api_container tukki_api
docker run -d -i -t -e WDS_SOCKET_PORT='0' -p 8652:3000 --name=tukki_front_container tukki_front