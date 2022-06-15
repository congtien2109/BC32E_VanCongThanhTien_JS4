// BAI TAP 1

document.getElementById("btnXuat").onclick = function () {
  // input: soThu1 => number, soThu2 => number, soThu3 => number
  var soA = Number(document.getElementById("soA").value);
  var soB = Number(document.getElementById("soB").value);
  var soC = Number(document.getElementById("soC").value);
  // output: ketQua => number
  var xuat = "";
  //xu ly
  if (soA > soB) {
    if (soB > soC) {
      xuat = soC + "<" + soB + "<" + soA;
    } else if (soA > soC) {
      xuat = soB + "<" + soC + "<" + soA;
    } else {
      xuat = soB + "<" + soA + "<" + soC;
    }
  } else if (soB > soC) {
    if (soA > soC) {
      xuat = soC + "<" + soA + "<" + soB;
    } else {
      xuat = soA + "<" + soC + "<" + soB;
    }
  } else {
    xuat = soA + "<" + soB + "<" + soC;
  }
  // in ket qua ra man hinh
  document.getElementById("xuat").innerHTML = xuat;
};

// BAI TAP 2

document.getElementById("btnGuiLoiChao").onclick = function () {
  //input
  var family = Number(document.getElementById("family").value);
  //output: string
  var ketQua = "";
  //progress
  switch (family) {
    case 1:
      {
        ketQua = "Xin chào bố";
      }
      break;
    case 2:
      {
        ketQua = "Xin chao me";
      }
      break;
    case 3:
      {
        ketQua = "Xin chao anh trai";
      }
      break;
    case 4:
      {
        ketQua = "Xin chao em gai";
      }
      break;
    default: {
      ketQua = "Vui long chon thanh vien!";
    }
  }
  document.getElementById("loiChao").innerHTML = ketQua;
};

// BAI TAP 3

document.getElementById("btnDem").onclick = function () {
    //input number?
  var soThu1 = document.getElementById("soThu1").value;
  var soThu2 = document.getElementById("soThu2").value;
  var soThu3 = document.getElementById("soThu3").value;
    //output number
    var count = 0;

    //progress
    soThu1 % 2 === 0 && count++;
   soThu2 % 2 === 0 && count++;
   soThu3 % 2 === 0 && count++;

  document.getElementById("dem").innerHTML = "có " + count + " só chẵn," + (3 - count) + " só lẻ" ;
};

// BAI TAP 4

document.getElementById("btnDuDoan").onclick = function (){
    //input number?
    var chieuDai1 = document.getElementById("chieuDai1").value;
    var chieuDai2 = document.getElementById("chieuDai2").value;
    var chieuDai3 = document.getElementById("chieuDai3").value;
    //progress
    var plan1 = Math.sqrt(Math.pow(chieuDai1, 2) + Math.pow(chieuDai2, 2))
    var plan2 = Math.sqrt(Math.pow(chieuDai1, 2) + Math.pow(chieuDai3, 2))
    var plan3 = Math.sqrt(Math.pow(chieuDai2, 2) + Math.pow(chieuDai3, 2))
    document.getElementById("duDoan").innerHTML = 
    chieuDai1 == chieuDai2 && chieuDai2 == chieuDai3 ? "Hinh tam giac deu" : chieuDai1 == chieuDai2 || chieuDai1 == chieuDai3 || chieuDai2 == chieuDai3 ? "Hinh tam giac can" : chieuDai1 == plan3 || chieuDai2 == plan2 || chieuDai3 == plan1 ? "Hinh tam giac vuong" : "Khong la tam giac nao";
}


// BAI TAP 5


