const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),      //번들을 내보낼 위치
        filename: "bundle.js",                      //번들의 이름
        publicPath: "/",                            // 브라우저가 참조될때 출력 디렉터리의 공용url
        clean: true                                 //내보내기 전 output 디렉터리 정리
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,            //해당 파일명으로 끝나면 babel-loader가 처리
                exclude: /node_modules/,               //node_modules는 제외
                loader: "babel-loader",                //바벨 로더 사용
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", "..."],   //확장자 명칭 생략 설정
        alias: {
            "@src": path.resolve(__dirname, "src"),     //절대경로 지정 tsconfig도 추가해줘야함
            "@assets": path.resolve(__dirname, "src/assets"),
            "@config": path.resolve(__dirname, "config.js"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",   //index.html 위치 설정
        }),
        new CleanWebpackPlugin({     // 삭제할 폴더나 파일 패턴을 배열로 설정
            cleanOnceBeforeBuildPatterns: ["dist", "build"],
        }),                     //웹팩 실행시 dist폴더 정리
        new ReactRefreshWebpackPlugin(),    //빠른 개발 환경 제공
    ],
};