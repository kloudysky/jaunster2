import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "jaunster2",
    type: "postgresql",
    debug: !__prod__,
  });
};

main().catch((err) => {
  console.log(err);
});
