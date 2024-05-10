

function getIntersection(a,b){
    let unionSet = new Set();
    let intersectionSet = new Set();

    for (let i = 0; i < a.length; i++){
        unionSet.add(a[i]);
    }
    console.log("Intersection");
    
    for (let i = 0; i < b.length; i++){
        if(unionSet.has(b[i])){
            intersectionSet.add(b[i]);
        }
    }

    let ans = []; 
    for (let k of intersectionSet) { 
        ans.push(k); 
    } 
    console.log(ans); 
}

function getUnion(a, n, b, m) { 
  
    let s = new Set(); 
  
    // Inserting array elements in s 
    for (let i = 0; i < n; i++) 
        s.add(a[i]); 
  
    for (let i = 0; i < m; i++) 
        s.add(b[i]); 
    let arr = []; 
  
    for (let itr of s) 
        arr.push(itr); 
    //for sorting      
    arr.sort(function (a, b) { return a - b; }) 
    console.log("union:"); 
    console.log(arr); 
  
}


let a = [1, 2, 5, 6, 2, 3, 5, 7, 3]; 
let b = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4]; 

getIntersection(a,b);
getUnion(a, a.length, b, b.length);