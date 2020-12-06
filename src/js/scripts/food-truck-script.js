//import { openDB, deleteDB, wrap, unwrap } from 'idb/build/iife/index-min';
import * as datas from '../data/foodTruckData';

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
    request.onsuccess = () => {
        db = request.result;
    }

    // If some other tab is laoded with database, need to be closed
    request.onblocked = () => {
        alert('Please close all other tabs with this site open');
    }
}

export function actionconfig(config, action, CallBack, failCallBack)
{

    $.ajax("/php/fichiers/Config.php", {
        type: "POST",
        data: {
            Config: config,
            Action: action
        },
        dataType: "json",

        success: function (data) {
            if(CallBack != null)
                CallBack(data);
        },
        error: function () {
            console.log("request failed");
            if(failCallBack != null)
                failCallBack("request failed");
        }
    })
}