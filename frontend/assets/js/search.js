$("#query").on('change keydown paste input', function(){
    const query = $("#query").val();
    $("#searchBtn").attr("onclick", `search('${query}')`);
});

function search(query) {
    let resultsHtml = '';
    for(let i = 0; i < 10; i++) {
        resultsHtml += `<p>${query} ${i}</p>`;
    }
    $("#results").html(`<header><h2>Results for ${query}: </h2></header>${resultsHtml}`);
}