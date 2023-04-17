var btnClick = document.getElementById("btnClick");
//bấm vô nút #btnClick
btnClick.onclick = function () {
  //lấy giá trị từ thẻ input#txtUser
  var user = document.getElementById("txtUser").value;
  console.log(user);}
/**
 * Tinh luong
 */
var  btnTinhLuong = document.getElementById("btnTinhLuong");

// Tạo hàm tính lương
btnTinhLuong = function tongLuong() {
  var luongNgay = 100000;
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  
  var tongLuong = luongNgay * soNgayLam;

  // kết quả
  document.getElementById("tongLuong").innerHTML = "Tổng lương của bạn là: " + tongLuong.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

// Tính giá trị trung bình 
function average() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var num5 = parseFloat(document.getElementById("num5").value);
  var result = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById("result").innerHTML = "Giá trị trung bình là: " + result;
}

// Quy đổi tiền tệ
function convert() {
  var usd = parseFloat(document.getElementById("usd").value);
  var vnd = usd * 23500;
  document.getElementById("vnd").innerHTML = "Số tiền VND là: " + vnd.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

// Tính diện tích và chu vi hình chữ nhật
function Tinh() {
  var chieuDai = parseFloat(document.getElementById("chieuDai").value);
  var chieuRong = parseFloat(document.getElementById("chieuRong").value);
  var dienTich = chieuDai * chieuRong;
  var chuVi = 2 * (chieuDai + chieuRong);
  document.getElementById("dienTich").innerHTML = "Diện tích là: " + dienTich;
  document.getElementById("chuVi").innerHTML = "Chu vi là: " + chuVi;
}

// Tính tổng 2 ký số 
function calc() {
  var number = parseInt(document.getElementById("number").value);
  var soHangDonVi = number % 10;
  var soHangChuc = Math.floor(number / 10);
  var sum = soHangDonVi + soHangChuc;
  document.getElementById("sum").innerHTML = "Tổng 2 ký số là: " + sum;
}
