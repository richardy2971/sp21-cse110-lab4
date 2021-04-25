let stats = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(let property in stats){
    if(stats[property]%2==1){
    console.log(stats[property]);
    }
}