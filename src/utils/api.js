import config from "./config";

async function api(method, path, body) {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZGU2NzA1OTlhNGQzNzU2Nzk4MTFhMTA0NDdjNzQ4OWMxZTJjMjIyMzhiZjA0YTFhM2RmYzBmODQ2ZjYzM2MyZDZhYmY5ZDNjY2IwOGZmZWUiLCJpYXQiOjE2MjIyMDU4ODkuMjc0MDM2LCJuYmYiOjE2MjIyMDU4ODkuMjc0MDQsImV4cCI6MTY1Mzc0MTg4OS4yNzEzODMsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.YlREXNN88mbz1ZI3OCCLqHeMYICi_TcD7U_o_1MJag7FBg4jyr7OAjAA8SnW1g4lo2JcpQzIXliV9Ql9ezCZl-25mxesVGPUaKEC3LX234x2UZ84gl86d-xbd_I-EDyzdr8COiidyJNkzzIWaV5Zll5pbO4CpWdzBCgDxb0cCjsxPonfW7tlry9R1nkBs6XZIwRdvyR1BzTJe7OHuUGrsnNL5EP5xFNQuiaQtMJBRp2zpJlUoIr4tAuKp445wbvH6r5peDOYBPUFErP2rkmXuM1vvx6tflm88GHsmRoFPaebm_PS4tkN1xMk_Z6UVbafwA3TUa16GddFz-c4l8ocaQ2YZ2GqpILUJGz84szXP1FvrdYkPlRGNJMW0NSdvvXl_XZII1Evr8XHcduNq5YOSRQzoLnxzDo3SpUyNxH-j5JBJDYV_F7ihFDGpFbk8uKUvxPcAcMXTyy6hHNppfJ_ZtVGIJGytSO_2mTXAO2l21-z2gZqHM4yoAOmkGMi4JqyEHQtWa3m2k6E7nKy0H208LRGJHp87XcRZIF6Oe8lM6NZbWce2-Z0daet2-dHODDagYU9BPTvBSI3HGt76P4v13uE2HKMw2vCdp8e9yYkiUr8dzR-k1AJ44hZMv9Ae9I8Z5Hif4bJL7Sdkc5cg0xfiHBLg-2lp5UEGUeafm7PlNE";
  const url = new URL(config.domain + path);
  let params = {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  };

  if (method === "GET" && body) {
    url.search = new URLSearchParams(body).toString();
  }

  if ((method === "POST" || method === "PUT") && body) {
    params.body = body;
  }

  const response = await fetch(url.toString(), params);

  const data = await response.json();

  if (data.success) {
    return data.data;
  } else {
    let error = data.message;
    let errorKeys = Object.keys(data.errors);

    if (data.errors && errorKeys.length > 0) {
      error = data.errors[errorKeys[0]];
    }

    throw new Error(error);
  }
}

export default api;