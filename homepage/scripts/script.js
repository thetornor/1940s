let grid_items = document.querySelectorAll('.grid_item');
let length = grid_items.length;

for(let i = 0; i < length; i++){
    let row_id, col_id;

    if(i != (length-1)){
        row_id = Math.floor(i/3);
        col_id = i%3;
    }else{
        row_id = 4;
        col_id = 2;
    }

    grid_items[i].classList.add(`box_${row_id}${col_id}`);
}