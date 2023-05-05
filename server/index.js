import startApolloServer from "./app.js";
import { connectMongoDB } from "./db.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

connectMongoDB()

startApolloServer(typeDefs, resolvers)