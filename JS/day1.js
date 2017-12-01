/**
 * Created by Lang on 2017/12/1.
 */

// 获取 data.json 的数据
fetch('../Data/data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.table( data);
    })
    .catch(function(error){
        console.log('Fetch Error:', error);
    });

async function demo() {
    try {
        const response = await fetch('../Data/data.js');
        const data = response.json();
        console.table(data);
    } catch (error) {
        console.log('Fetch Error: ', error);
    }
}