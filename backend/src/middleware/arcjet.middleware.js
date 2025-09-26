import aj from "../lib/arcjet";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (res, req, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
    }
  } catch (error) {}
};
