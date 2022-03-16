$(function() {
    $('th').on('click', function() {
        var column = $(this).data('column');
        var order = $(this).data('order');
        console.log('clicked!', column, order);

        if (order == 'desc') {
            $(this).data('order', 'asc');
            newArray =  newArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
        } else {
            $(this).data('order', 'desc');
            newArray =  newArray.sort((a,b) => a[column] < b[column] ? 1 : -1)

        }
        buildTable(newArray);
    });
});