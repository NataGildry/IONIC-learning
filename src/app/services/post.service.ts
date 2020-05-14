import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) {

}
getAllPosts() {
  return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
};
}
