const { TextEncoder, TextDecoder } = require("util");
const { ReadableStream } = require("stream/web");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;

global.Request = class Request {
  constructor(url, options = {}) {
    this.url = url;
    this.method = options.method || "GET";
    this.headers = options.headers || {};
    this.signal = options.signal;
  }
};

global.Response = class Response {};
global.Headers = class Headers {};

import "@testing-library/jest-dom";
