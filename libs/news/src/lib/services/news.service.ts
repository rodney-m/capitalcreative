import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

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
  deleteArticleCategory(id:any, articleCategory:any):any{
    return this.http.delete(`${environment.apiUrl}/v1/article-category/${id}`, articleCategory)
  }
  
}
