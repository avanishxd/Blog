import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

// Allow using process.env.MONGODB_URI for containerized / production deployments
const mongoUri = process.env.MONGODB_URI || `mongodb://user:codeforinterview@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`;

const storage = new GridFsStorage({
    url: mongoUri,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        // fix typo: file.mimetype
        const isImage = match.indexOf(file.mimetype) !== -1;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({storage});