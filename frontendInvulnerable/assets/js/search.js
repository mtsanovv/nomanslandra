function search() {
    const escapedQuery = escapeHtml($("#query").val());
    let resultsHtml = '';
    for(let i = 0; i < 10; i++) {
        resultsHtml += `<p>${escapedQuery} ${i}</p>`;
    }
    $("#results").html(`<header><h2>Results for ${escapedQuery}: </h2></header>${resultsHtml}`);
}

function escapeHtml(text) {
    return text.replace(/[\"&<>]/g, function (a) {
        return { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' }[a];
    });
}