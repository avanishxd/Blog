import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // Allow overriding the full MongoDB URI via env var for flexibility in deployment
    const envUri = process.env.MONGODB_URI;
    const builtUrl = `mongodb://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = envUri || builtUrl;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to the database ', error);
    }
};

export default Connection;