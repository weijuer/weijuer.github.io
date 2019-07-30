import { Service, Inject } from "typedi";
import * as articleService from '../api/article';

@Service()
export class ArticleRepository {

    findAll() {
        return articleService.get_articles();
    }

    findOne(id: number) {
        return articleService.get_article(id);
    }

    save(article: W.IArticle) {
        return articleService.add_article(article);
    }

    bulk(articles: W.IArticle[]) {
        return articleService.bulk_add_article(articles);
    }

    remove(id: number) {
        return articleService.delete_article(id);
    }

}