import gql from "graphql-tag";

export const typeDefs = gql `
    type Query{
        hello: String
    }

    type Mutation{
        createUser(email: String, password: String): User
    }

    type User{
        _id: ID
        email: String
        password: String
        savedNotes: [Note]
        createdAt: String
        updatedAt: String
    }

    type Note{
        _id: ID
        date: String
        noteContent: String
        title: String
    }
`