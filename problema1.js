
/*CASO: Elaborar el código de la multiplicación de una matriz bidimensional, utilizar 
funciones para realizar la operación multiplicación. Asimismo, el resultado ordenar de 
manera descendente. Finalmente, realizar una función de búsqueda para revisar si la matriz 
resultado tiene el valor 9, en caso fuese afirmativo, indicar por pantalla " La matriz tiene 
el valor 9 y se encuentra en la posición i (fila) y j (columna).*/
let A=[[1,2],[3,4],[5,6]];   
let B=[[1,2,3],[4,5,6],[7,8,9]];
let C=[[1,1],[1,1],[1,1]];
function AXB(a,b,c){
    C[0][0]=A[0][0]*B[0][0]+A[0][1]*B[1][0]+A[0][2]*B[2][0]
    C[0][1]=A[0][0]*B[0][1]+A[0][1]*B[1][1]+A[0][2]*B[2][1]
    C[0][2]=A[0][0]*B[0][2]+A[0][1]*B[1][2]+A[0][2]*B[2][2]
    C[1][0]=A[1][0]*B[0][0]+A[1][1]*B[1][0]+A[1][2]*B[2][0]
    C[1][1]=A[1][0]*B[0][1]+A[1][1]*B[1][1]+A[1][2]*B[2][1]
    C[1][2]=A[1][0]*B[0][2]+A[1][1]*B[1][2]+A[1][2]*B[2][2]
}  
AXB(A,B,C);
console.log(C);
let i;
let j;
let num=9;
for(i=0;i<3;i++){
    for(j=0;j<2;j++){
        if(C[i][j]==num){
            console.log('El numero 9 esta en fila '+i+' y la columna '+j)
        }
        else{
            console.log('El numero 9 no esta en el arreglo')
        }

    }
}