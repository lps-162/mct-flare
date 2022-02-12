import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore
import * as build from "../build";

const handleRequest = createPagesFunctionHandler({
  build
});

export function onRequestGet(context) {
  return handleRequest(context);
}
