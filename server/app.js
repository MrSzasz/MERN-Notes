import express from "express";
import {
    ApolloServer
} from "@apollo/server"
import {
    expressMiddleware
} from "@apollo/server/express4";
import http from "http";
import cors from "cors";

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start()

    app.use("/graphql", cors(), express.json(), expressMiddleware(server))

    await new Promise(resolve => httpServer.listen({
        port: 4000
    }, resolve))

    console.log("server ready on port 4000, http://localhost:4000/ or http://localhost:4000/graphql")
}

export default startApolloServer