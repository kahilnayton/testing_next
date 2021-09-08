import { setupServer } from "msw/node";
import { DefaultRequestBody, rest } from "msw";
import { Photo } from "../models/Photo";

const server = setupServer(
  rest.get<DefaultRequestBody, Photo[]>("/api/photos", (req, res, ctx) => {
    return res(ctx.json([]));
  })
);
