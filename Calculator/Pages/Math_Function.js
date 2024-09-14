function Euclidean_dist(x1,x2,y1,y2){

    var content = document.getElementById("result").innerText;
    var blob = new Blob([content], { type: "text/plain" });

    dist_x = x2 - x1;
    dist_y = y2 - y1;

    return(Math.sqrt(dist_x**2 +dist_y**2))



}