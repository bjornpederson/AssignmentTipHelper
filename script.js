$(document).ready(function() {
    $("form").on('submit', function(e) {
        e.preventDefault();
        
        var inputText = $("#inputText").val();
        var lines = inputText.split('\n'); // Split by newline
        var html = '<div id="kl_content_block_sub_0" class="" style="background-color: #e7e8ea; color: #000000; border: 1px solid #dddfe2; padding-top: 0px;">\n<h4 style="margin-top: 23px; margin-bottom: 8px; color: #000000;">Tips For This Activity</h4>\n<ul style="list-style-type: disc;">\n';

        for(var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if(line !== '') {
                html += '<li>' + line + '</li>\n'; // No added period after line
            }
        }

        html += '</ul>\n</div>';
        $("#outputHTML").val(html);

        // Add this line to adjust the height of output field immediately after filling it
        auto_grow($("#outputHTML")[0]);
    });
    
    $("#copyButton").click(function() {
        var copyText = document.querySelector("#outputHTML");
        copyText.select();
        document.execCommand("copy");
    });

    // Event handler for text input
    $("#inputText").on('input', function() {
        auto_grow(this);
    });

    // Event handler for HTML output
    $("#outputHTML").on('input', function() {
        auto_grow(this);
    });
});

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
