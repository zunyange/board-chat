## 빌드 단계
#FROM node:alpine as build
#WORKDIR /app
#COPY package.json .
#RUN npm install
#COPY . .
#RUN npm run build

# 실행 단계
FROM nginx
# 프로젝트의 public 폴더에서 컨테이너의 /usr/share/nginx/html로 파일 복사
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]