import axios from "./index";
const BASE_HEAD = '/api';

// 图片验证 src
const PATH_GET_VERFIY_IMAGE = BASE_HEAD +`/code/get_verify_image_code.do?timestamp=${new Date().getTime()}`


