// These sections will be added to the sidebar and display the element with id when clicked
var sections = [
    { name: 'Pawn', id: 'pawn' },
    { name: 'Knight', id: 'knight' },
    { name: 'Rook', id: 'rook' },
    { name: 'Bishop', id: 'bishop' },
    { name: 'Queen', id: 'queen' },
    { name: 'King', id: 'king' }
]

$(function() {
    hideAllSections();
    populateSidebar();

    $('.link').click(function(link) {
        hideAllSections();
        var sectionId = $(this).attr('section');
        if (sectionId) {
            $('#' + sectionId).show();
        }
    })
});

function hideAllSections() {
    $.each(sections, function(key, section) {
        $('#' + section.id).hide();
    });
}

function populateSidebar() {
    var sidebar = $('#sidebar');
    $.each(sections, function(key, section) {
        sidebar.append("<div class='link' section='" + section.id + "'>" + section.name + "</div>");
    });
}
