import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService{
    constructor(private http: HttpClient) {}

    getFoods() {
        // httpOptions.headers.append(, "GET, POST, DELETE, PUT");
        return this.http.get('http://localhost:4300/bro', httpOptions);
    }
}
