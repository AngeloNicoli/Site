function Report_txt(){
    var content = document.getElementById("result").innerText;
    var blob = new Blob([content], { type: "text/plain" });

    var a = document.createElement("a");
    a.download = "output.txt";
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    document.body.appendChild(a);

    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}