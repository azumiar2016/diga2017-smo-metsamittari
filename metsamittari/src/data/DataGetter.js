import axios from 'axios';

const url = "http://melatupa.azurewebsites.net/";
let FinalUrl = "";
function RegionLevels(){
    return new Promise((resolve, reject)=>{
        const urlAddOnn = "regionlevels";
        FinalUrl = url + urlAddOnn;
        axios.get(FinalUrl).then(response =>{
            resolve(response.data);
        })
        .catch(error=>{
            reject(error);
        });
    });
}
function Regions(RegionLevelId){
    return new Promise((resolve, reject)=>{
        let regid = parseInt(RegionLevelId,10);
        const urlAddOnn = "regionlevels/" + regid + "/regions";
        FinalUrl = url + urlAddOnn;
        axios.get(FinalUrl).then(response =>{
            resolve(response.data);
        })
        .catch(error=>{
            reject(error);
        });
    });
}
function Scenarios(RegionId, scenarioId){
    return new Promise((resolve, reject)=>{
        let RegId = parseInt(RegionId,10);
        let scenId = parseInt(scenarioId,10);
        const urlAddOnn = "scenariocollection/" + scenId + "/region/" + RegId;
        FinalUrl = url + urlAddOnn;
        axios.get(FinalUrl).then(response =>{
            resolve(response.data);
        })
        .catch(error=>{
            reject(error);
        });
    });
}

export default {
    RegionLevels,
    Regions,
    Scenarios
}