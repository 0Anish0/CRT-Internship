import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-a2h1fvu-shard-00-00.e7hevqk.mongodb.net:27017,ac-a2h1fvu-shard-00-01.e7hevqk.mongodb.net:27017,ac-a2h1fvu-shard-00-02.e7hevqk.mongodb.net:27017/?ssl=true&replicaSet=atlas-uk7n7x-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;