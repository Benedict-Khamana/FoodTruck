//import { openDB, deleteDB, wrap, unwrap } from 'idb/build/iife/index-min';
import * as datas from '../data/foodTruckData.js';

export function InitDatabase(){
    const request = indexedDB.open('food_truck_db', 1);
    let db;

    // Handle db upgrade
    request.onupgradeneeded = () => {
        db = request.result;

        // Init Collection
        const boxStore = db.createObjectStore('boxes', {keyPath: 'id'});

        datas.boxData.forEach(box => {
            boxStore.add(box);
        });
    }

    // When request succeed
    request.onsuccess = () => {''
        db = request.result;
        console.log(datas);
        db.deleteObjectStore('boxes');
        
    }

    // If some other tab is laoded with database, need to be closed
    request.onblocked = () => {
        alert('Please close all other tabs with this site open');
    }
}
