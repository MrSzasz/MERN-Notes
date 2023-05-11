import User from "../models/user.js"

export const resolvers = {
    Query: {
        hello: () => "Hello, world!"
    },
    
    Mutation: {
        createUser: async (_, {
            email,
            password
        }) => {
            try {
                const user = new User({
                    email: email,
                    password: password
                })
                const savedUser = user.save()
                return savedUser
            } catch (error) {
                console.log(error)
            }
        }
    }
}