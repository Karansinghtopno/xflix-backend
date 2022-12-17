# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb+srv://xflix:xflix@xflix-node.jsc6gwn.mongodb.net/?retryWrites=true&w=majority" --drop --collection videos --file data/data.json
