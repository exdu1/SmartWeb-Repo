const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    // Replace db string with project db string
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://edu1:IVkrSBNSBJwNMh6I@cluster0.kuf5rcr.mongodb.net/Marketplace?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject' 
}

export default config
 