import storage from 'local-storage-fallback';
import {forEach} from "lodash";

class LocalStorage {

    private keys: LocalStorageKey[] = [
        'projects',
        'testimonials'
    ];

    getItem(key: LocalStorageKey, defaultValue: any) {
        return storage.getItem(key) !== null
            ? JSON.parse(storage.getItem(key)!) : defaultValue;
    }

    setItem(key: LocalStorageKey, data: any) {
        try {
            storage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error(e);
            console.error(`Could not set localStorage item for key ${key}`);
            console.error('data:', data);
        }
    }

    clear() {
        forEach(this.keys, (key: LocalStorageKey) => {
            storage.removeItem(key);
        });
    }
}

export const localStorage = new LocalStorage();
