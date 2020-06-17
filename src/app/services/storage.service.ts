import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@Injectable()
export class StorageService {
    public data: any = []

    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

    setStorage(key, val): void {
        this.storage.set(key, val);
        this.data[key] = this.storage.get(key);
    }

    getStorage(key) {
        if (this.storage.get(key)) {
            return this.data[key] = this.storage.get(key);
        } else {
            return [];
        }
    }
}