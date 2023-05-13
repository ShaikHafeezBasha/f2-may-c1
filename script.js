let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
//map
function StudentsWithMap(element,index,arr){
  if(element.marks>50){
    console.log(element.name);
  }
}
function PrintStudentswithMap() {
  arr.map(StudentsWithMap)

}
//forEach
function StudentsWithForEach(element,index,arr){
  if(element.marks>50){
    console.log(element.name);
  }
}
function PrintStudentsbyForEach() {
  arr.forEach(StudentsWithForEach)
}
//addData
function addData() {
  arr.push({id:4,name:"susan",age:"20",marks:45})
  console.log(arr)
}
//removeData
function removeFailedStudent() {
  let result
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i].marks<50){
      arr.splice(i,1)
    }
  }
  console.log(arr);
}
//concatenation
function concatenateArray() {
  let newArr = [
  { id: 5, name: "nikhil", age: "24", marks: 30 },
  { id: 6, name: "rahul", age: "23", marks: 55 },
  { id: 7, name: "chandu", age: "22", marks: 20 },
];
arr=arr.concat(newArr)
  console.log(arr)
}
