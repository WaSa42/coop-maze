import { cleanEnv, num, port, str } from "envalid";

export const env = cleanEnv(process.env, {
  WS_PORT: port({ default: 3001 }),
  PYTHON_CMD: str({ default: "python3" }),
  MAP_WIDTH: num({ default: 100 }),
  MAP_HEIGHT: num({ default: 75 }),
  DELETE_GAME_TIMEOUT: num({ default: 10 }),
  START_GAME_TIMEOUT: num({ default: 5 }),
  MAX_MOVE_DISTANCE_ALLOWED: num({ default: 25 }),
  TILE_SIZE: num({ default: 64 })
});
