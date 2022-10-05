// https://mswjs.io/docs/getting-started/integrate/node

import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
