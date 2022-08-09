// bài 1
// function sum(a,b){
//     var c = a+b;
//     return c ;
// }
// let a = parseInt(prompt("nhập số a"));
// let b = parseInt(prompt("nhập số b"));
// let vip = sum(a,b);
// alert(vip);

// bài 2
// let vip =[1,2,3,4,5,6];
// function sum(vip) {
//     var vip1 = 0;
//     for (let i = 0; i < vip.length; i++) {
//         if (vip[i] % 2 === 1) {
//             vip1=vip1+vip[i];
//         }
//     }
//     return vip1;
// }
// alert(sum(vip));

// bài 3
// let x = prompt('Nhập số');
// function tinhBinhPhuong(x){
//     return x*x;
// }
// alert("Bình phương của số bạn vừa nhập vào là : "+ tinhBinhPhuong(x));

// bài 4
// let radius =prompt('Nhập bán kính');
// function tinhDienTich(r){
//     return r*r*Math.PI;
// }alert("Diện tích hình tròn bán kính R là : "+ tinhDienTich(radius));
//
// function tinhChuVi(r){
//     return 2*r*Math.PI;
// }alert("Chu vi hình tròn có bán kính R là : "+ tinhChuVi(radius));

// bài 5
// let a = prompt("Nhập số");
// let s = 1;
// function tinhGiaithua(s){
//     for (let i = 1;i<=a;i++){
//         s=s*i;
//     }return s;
// }
// alert("Giai thừa của bạn vừa nhập vào là : "+ tinhGiaithua(s));

// bài 6
// let a = prompt("Nhập giá trị");
// function kiemTra(){
//     if (isNaN(a) === false){
//         return "là số";
//     }else {
//         return "Là chữ";
//     }
// }
// alert("Giá trị bạn vừa nhập vào là : "+ kiemTra(a));

// bài 7
// let sum1 = prompt("Nhập số thứ nhất");
// let sum2 = prompt("Nhập số thứ hai");
// let sum3 = prompt("Nhập số thứ ba");
// let arr = [];
// function timSoNhoNhat(){
//     arr.push(sum1,sum2,sum3);
//     let min = arr[0];
//     for (let i = 0 ; i<arr.length;i++){
//         if (arr[i]<min){
//             min=arr[i];
//         }
//     }return min
// }
// alert("Số nhỏ nhất là : "+timSoNhoNhat());

// bài 8
// let number = prompt("Nhập số");
// function soNguyenDuong(number){
//     if (number>0) {
//         return number = true;
//     }if (number<0){
//         return number = false;
//
//     }else {
//         return 'Nhập sai rồi cu'
//     }
// }
//
// console.log(soNguyenDuong(number))

// bài 9
// let a = 1;
// let b = 9;
// function doiCho(a,b){
//     let c = a;
//     a= b;
//     b = c;
//     console.log(a,b)
// }doiCho(a,b);

// bài 10
// let a = [2,4,6,8,9];
// function daoNguoc(mang){
//     let b = [];
//     for (let i = 0 ; i< a.length;i++){
//         b.unshift(mang[i]);
//     }
//     for (let i = 0;i< a.length;i++){
//         mang[i] = b[i];
//     }
//
// }daoNguoc(a);
// alert("Mảng sau khi đảo ngược là : "+ a);

// bài 11
// function timKiem(chuoi,kytu){
//     count = 0;
//     for (let i = 0;i<chuoi.length;i++){
//         if (chuoi[i] == kytu){
//             count ++;
//         }
//
//     }return count == 0 ?-1 :count;
// }
// document.write("số ký tự trong chuỗi là : "+ timKiem('nguyễn văn khánh','n'))







