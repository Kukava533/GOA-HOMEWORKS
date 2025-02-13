const matrix = [[1 , 2 , 3], [4 , 5 , 6], [7 , 8 , 9] ['*', 0, '#']];


matrix[0][0] = 'x';
matrix[0][1] = 'o';
matrix[0][2] = 'x';

matrix[1][0] = 'o'
matrix[1][1] = 'x'
matrix[1][2] = 'o'
 
for(let row of matrix){
    const rowstring = row.join('');
    console.log(rowstring);

}