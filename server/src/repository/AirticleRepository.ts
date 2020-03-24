import { Service } from "typedi";
import { ArticleModel, ArticleDocument } from '../models/Article';

@Service()
export class ArticleRepository {

    findAll() {
        return ArticleModel.find();
    }

    findOne(id: string) {
        return ArticleModel.findById(id);
    }

    save(article: any) {
        let model = new ArticleModel({ ...article })
        return model.save();
    }

    bulk(articles: any[]) {
        let model = new ArticleModel({ ...articles })
        return model.save()
    }

    remove(id: string) {
        return ArticleModel.remove({ _id: id });
    }
}