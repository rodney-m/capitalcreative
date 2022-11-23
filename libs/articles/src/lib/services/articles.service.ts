import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  postArticleCategory(category:any):any{
    return this.http.post(`${environment.apiUrl}/v1/article-category`, category)
  }
  getAllArticleCategories():any{
    return this.http.get(`${environment.apiUrl}/v1/article-category/all`)
  }
  getArticleCategoryById(id:any):any{
    return this.http.get(`${environment.apiUrl}/v1/article-category/${id}`)
  }
  updateArticleCategory(id:any, articleCategory:any):any{
    return this.http.put(`${environment.apiUrl}/v1/article-category/${id}`, articleCategory)
  }
  deleteArticleCategory(id:any):any{
    return this.http.delete(`${environment.apiUrl}/v1/article-category/${id}`)
  }
  
  uploadFile(file:FormData):any{
    return this.http.post(`https://nyax-file-storage.herokuapp.com/v1/files/upload-file`, file)
  }
  
  
  
  postArticles(article:any):any{
    return this.http.post(`${environment.apiUrl}/v1/article`, article)
  }
  editArticles(article:any, id:any):any{
    return this.http.put(`${environment.apiUrl}/v1/article/${id}`, article)
  }
  
  getAllArticles():any{
    return this.http.get(`${environment.apiUrl}/v1/article/all`)
  }

  getAllArticleById(id:any):any{
    return this.http.get(`${environment.apiUrl}/v1/article/${id}`)
  }

  deleteArticle(id:any) {
    return this.http.delete(`${environment.apiUrl}/v1/article/${id}`)
  }
}
