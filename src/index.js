const URL =
  "https://script.google.com/macros/s/AKfycbx6ek0LquXhS3nUrmjDBkhReeaBfS5wvaAfSImkmc4ls2kXh5KtaI8VAcZT6FE60RZf/exec";
const urlquytrinh = "google.com.vn";
const btmdangky = document.getElementById("btmguidk");
const idnguoidk = document.getElementById("idngdk");
const idhotendk = document.getElementById("idhotendk");
const idbophan = document.getElementById("idbophan");
const idchucvu = document.getElementById("idchucvu");
const idnguoisd = document.getElementById("idnguoisd");
const idcongviec = document.getElementById("idcongviec");
const idlydo = document.getElementById("idlydo");
const idtungay = document.getElementById("idtungay");
const iddenngay = document.getElementById("iddenngay");
const idtuthgian = document.getElementById("idtuthgian");
const iddenthgian = document.getElementById("iddenthgian");
const idsonguoi = document.getElementById("idsonguoi");
const idsokm = document.getElementById("idsokm");
const idloaixe = document.getElementById("idloaixe");
const idthuong = document.getElementById("idthuong");
const idkhancap = document.getElementById("idkhancap");
const idnhiemvu = document.getElementById("idnhiemvu");
const idviecrieng = document.getElementById("idviecrieng");
const idtuyenduong = document.getElementById("idtuyenduong");
const idmotchieu = document.getElementById("id1chieu");
const idhaichieu = document.getElementById("id2chieu");
const idtutuyendg = document.getElementById("idtutuyendg");
const iddentuyendg = document.getElementById("iddentuyendg");
const idquanly = document.getElementById("quanly");
const modal = document.getElementById("dangchay");
const listItems = document.querySelectorAll(".menu li");
const idmatracuu = document.getElementById("matracuu");
const idngaytracuu = document.getElementById("ngaytracuu");
const idbtnkiemtra = document.getElementById("btnkiemtra");
var dsns = [];

// Gắn sự kiện 'click' cho mỗi mục <li>
listItems.forEach((item) => {
  item.addEventListener("click", function () {
    var pgname = this.getAttribute("value");
    var pgclick = document.getElementById(pgname);
    if (pgclick !== null) {
      listItems.forEach((li) => {
        // Xóa class 'selected' khỏi tất cả các mục <li> khác
        li.classList.remove("active");
        var pgname = li.getAttribute("value");
        var pg = document.getElementById(pgname);
        try {
          pg.classList.add("hidden");
        } catch {}
      });
      // Thêm class 'selected' cho mục <li> vừa nhấp vào
      pgclick.classList.remove("hidden");
      this.classList.add("active");
      if (pgname === "pgdangky") {
        fetchDs();
      }
    }
  });
});

function fetchDs() {
  if (dsns.length === 0) {
    let submitData = {
      type: "dangky"
    };
    console.log("đang lấy danh sách nhân sự");
    modal.classList.add("display");
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(submitData) // p data type must match "Content-Type" header
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dsns = [...data];
        modal.classList.remove("display");
      })
      .catch((error) => {
        console.error("Error:", error);
        modal.classList.remove("display");
        alert("Không tìm thấy cơ sở dữ liệu nhân sự, vui lòng kiểm tra lại");
      });
  }
}

idnguoidk.addEventListener("input", (e) => {
  idnguoidk.value = idnguoidk.value.toUpperCase();
  // idquanly.value = "";
  if (idnguoidk.value.length >= 7) {
    const nv = dsns.find(
      (nv) => nv.MaNV.toLowerCase() === idnguoidk.value.toLowerCase()
    );
    if (!nv) {
      idhotendk.value = "không tìm thấy";
      idhotendk.classList.add("fal");
      idhotendk.classList.remove("done");
      idbophan.value = "";
      idchucvu.value = "";
    } else {
      idhotendk.classList.remove("fal");
      idhotendk.classList.add("done");
      idhotendk.value = nv.HoTen;
      idbophan.value = nv.BoPhan;
      idchucvu.value = nv.ChucVu;
      var dsql = [];
      dsql = dsns.filter(
        (rs) =>
          // rs.BoPhan.toLowerCase() === idbophan.value.toLowerCase() &&
          rs.CapDuyet.toLowerCase() === "trưởng bộ phận" ||
          rs.CapDuyet.toLowerCase() === "phó phòng"
      );

      if (dsql.length > 0) {
        // var innerSelect = `<label>Quản lý xác nhận:</label>
        // <select id="quanly" style="font-size:16px; height: 25px;">`;
        var innerSelect = `<option value="">- Chọn quản lý xác nhận -</option>`;
        dsql.forEach(
          (rs) =>
            (innerSelect += `<option value ="${rs.HoTen}|${rs.BoPhan}">[${rs.BoPhan}] ${rs.HoTen}</option>`)
        );
        // innerSelect += `</select>`;
        idquanly.innerHTML = innerSelect;
      } else {
        idquanly.innerHTML = "";
      }
    }
  } else {
    idhotendk.value = "";
    idbophan.value = "";
    idchucvu.value = "";
  }
});

btmdangky.addEventListener("click", (e) => {
  e.preventDefault();
  // modal.style.display = "flex";
  fnguidangky();
});

function fnguidangky() {
  const MaNV = idnguoidk.value;
  const HoTen = idhotendk.value;
  const BoPhan = idbophan.value;
  // const chucvu = idchucvu.value;
  const YeuCauCho = idnguoisd.value;
  const NoiDungCV = idcongviec.value;
  const LyDo = idlydo.value;
  const TuNgay = idtungay.value;
  const DenNgay = iddenngay.value;
  const TuGio = idtuthgian.value;
  const DenGio = iddenthgian.value;
  const SoNguoiSD = idsonguoi.value;
  const SoKm = idsokm.value;
  const LoaiXe = idloaixe.value;
  const Thg = idthuong.checked ? "X" : "";
  const Khan = idkhancap.checked ? "X" : "";
  const NVu = idnhiemvu.checked ? "X" : "";
  const Rieng = idviecrieng.checked ? "X" : "";
  const TuyenDuong = idtuyenduong.value;
  const MotChieu = idmotchieu.checked ? "X" : "";
  const HaiChieu = idhaichieu.checked ? "X" : "";
  const Tudd = idtutuyendg.value;
  const Dendd = iddentuyendg.value;
  const QuanLy = idquanly.value;
  const type = "dangkyxe";
  if (MaNV === "") {
    alert("Vui lòng nhập mã nhân viên");
    return;
  }
  if (HoTen === "" || HoTen === "không tìm thấy") {
    alert("Mã nhân viên chưa đúng, vui lòng kiểm tra lại");
    return;
  }
  if (YeuCauCho === "") {
    alert("Vui lòng nhập người sử dụng xe");
    return;
  }
  if (NoiDungCV === "") {
    alert("Vui lòng nhập nội dung công việc, lý do");
    return;
  }
  if (TuNgay === "" || DenNgay === "" || TuGio === "" || DenGio === "") {
    alert("Vui lòng nhập đầy đủ ngày tháng, thời gian dự kiến đi - về");
    return;
  }
  if (TuNgay > DenNgay) {
    alert(
      "Ngày tháng không hợp lệ! Ngày 'Từ ngày' không thể lớn hơn 'Đến ngày'"
    );
    return;
  }
  if (SoNguoiSD <= 0) {
    alert("Vui lòng nhập Số người sử dụng");
    return;
  }
  if (SoKm <= 0) {
    alert("Vui lòng nhập số Km dự kiến");
    return;
  }
  if (LoaiXe === "") {
    alert("Vui lòng nhập loại xe yêu cầu");
    return;
  }
  if (TuyenDuong === "" || Tudd === "" || Dendd === "") {
    alert("Vui lòng nhập tuyến đường, điểm đi, điểm đến");
    return;
  }
  if (QuanLy === "") {
    alert("Vui lòng chọn quản lý xác nhận");
    return;
  }
  const data = {
    MaNV,
    HoTen,
    BoPhan,
    YeuCauCho,
    NoiDungCV,
    LyDo,
    TuNgay,
    DenNgay,
    TuGio,
    DenGio,
    SoNguoiSD,
    SoKm,
    LoaiXe,
    Thg,
    Khan,
    NVu,
    Rieng,
    TuyenDuong,
    MotChieu,
    HaiChieu,
    Tudd,
    Dendd,
    QuanLy
  };
  console.log(data);
  let ngaythang = TuNgay.split("-");
  let qs = confirm(
    `XÁC NHẬN! \nGửi đăng ký sử dụng xe ngày ${ngaythang[2]}/${ngaythang[1]}/${ngaythang[0]}`
  );
  if (qs === true) {
    modal.style.display = "flex";
    const submitData = { type, data };
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(submitData) // p data type must match "Content-Type" header
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data === true) {
          alert(
            "✅ Đăng ký thành công! Vui lòng liên hệ với quản lý để được xác nhận"
          );
        } else {
          alert("❌ Đăng ký không thành công ⚠ Vui lòng thử lại");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("❌ Đăng ký không thành công ⚠ Vui lòng thử lại");
      });
    modal.style.display = "none";
  }
}

//Tra cứu kết quả
idmatracuu.addEventListener("input", (e) => {
  idmatracuu.value = idmatracuu.value.toUpperCase();
});
idbtnkiemtra.addEventListener("click", (e) => {
  e.preventDefault();
  var resultEle = document.getElementById("result");
  var name = idmatracuu.value;
  var date = idngaytracuu.value;
  var idate = parseInt(date.split("-").join(""));
  if (name === "") {
    alert("Vui lòng nhập mã nhân viên tra cứu");
    return;
  }

  let submitData = {
    type: "check",
    data: { name, idate }
  };
  modal.classList.add("display");
  console.log(submitData);
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(submitData) // p data type must match "Content-Type" header
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      modal.classList.remove("display");
      render(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      modal.classList.remove("display");
      resultEle.innerHTML = `
      <div class="koduyet" style="color:red">
      <p>Không có kết quả nào phù hợp!</p>
      </div>
      `;
      // alert("không có kết quả nào, hãy kiểm tra thông tin tra cứu và thử lại");
    });
});

function render(listdata) {
  var resultEle = document.getElementById("result");
  var innerHtml = "";
  for (var i = 0; i < listdata.length; i++) {
    var data = listdata[i];
    if (data.ChonXeSD !== "") {
      var XeCap = `<p style="color:blue; margin:8px">✅ Xe: ${data.ChonXeSD}</p>`;
    } else {
      XeCap = "";
    }
    innerHtml += `<div id="formketqua" class="${
      data.KetQua === 1 ? "dcduyet" : data.KetQua === -1 ? "koduyet" : ""
    }">
    <div>
      <h2 style="margin:0;text-align:center" class="${
        data.KetQua === 1 ? "done" : data.KetQua === -1 ? "fal" : "wait"
      }">${
      data.KetQua === 1
        ? "ĐƯỢC DUYỆT"
        : data.KetQua === -1
        ? "KHÔNG ĐƯỢC DUYỆT"
        : "ĐANG CHỜ"
    }</h2>
      ${XeCap}
      <label>Người đăng ký:</label><br>
        <input type="text" style="width:133px" readonly value="Mã NV: ${
          data.MaNV
        }"></input>
        <input type="text" style="width:235px" readonly value="Họ tên: ${
          data.HoTen
        }"></input>
    </div>
    <div>
      <input type="text" style="width:133px;text-align:right" readonly value=""></input>
      <input type="text" style="width:235px" readonly value="Bộ phận: ${
        data.BoPhan
      }"></input>
    </div>
    <div style="padding-top:10px">
      <label>Yêu cầu cho:</label><br>
      <textarea type="text" style="width:380px; readonly">${
        data.YeuCauCho
      }</textarea >
      <br>
      <input type="text" style="width:380px; margin-bottom:2px" readonly value="${
        data.NoiDungCV
      }"></input>
      <br>
      <input type="text" style="width:380px" readonly value="${
        data.LyDo
      }"></input>
    </div>
    <div style="display:flex;padding-top:10px">
      <div style="text-align:right">
        <label>Từ ngày:</label>
        <input type="text" style="width:90px" readonly value="${
          data.TuNgay
        }"></input>
        <br><label>Đến ngày:</label>
        <input type="text" style="width:90px" readonly value="${
          data.DenNgay
        }"></input>
      </div>
      <div style="padding-left:15px;text-align:right">
        <label>Giờ đi:</label>
        <input type="text" style="width:50px" readonly value="${
          data.TuGio
        }"></input>
        <br><label>Giờ về:</label>
        <input type="text" style="width:50px" readonly value="${
          data.DenGio
        }"></input>
      </div>
    </div>
    <div style="padding-top:10px">
      <label>Số người sử dụng:</label>
      <input type="number" style="width: 50px;margin-left: 2px" value="${
        data.SoNguoiSD
      }"></input>
      <label style="margin-left:20px">Số Km dự kiến:</label>
      <input type="number" style="width: 65px;margin-left: 2px" value="${
        data.SoKm
      }"></input>
    </div>
    <div class="mucdich" style="padding-top:10px; display: flex">
      <div class="option_mucdich">
        <label>Loại xe:</label><br>
        <input type="text" style="width:95%;" readonly value="${
          data.LoaiXe
        }"></input>
      </div>
      <div class="option_mucdich">
        <input type="radio" ${
          data.Thg.toUpperCase() === "X" ? "checked" : ""
        }>Thường</input>
        <br>
        <input type="radio" ${
          data.Khan.toUpperCase() === "X" ? "checked" : ""
        }>Khẩn cấp</input>
      </div>
      <div class="option_mucdich">
        <input type="radio" ${
          data.NVu.toUpperCase() === "X" ? "checked" : ""
        }>Nhiệm vụ</input>
        <br>
        <input type="radio" ${
          data.Rieng.toUpperCase() === "X" ? "checked" : ""
        }>Việc riêng</input>
      </div>
    </div>
    <div style="padding-top:10px">
      <label>Tuyến đường:</label>
      <input type="radio" readonly ${
        data.MotChieu === "X" ? "checked" : ""
      }>1 chiều</input>
      <input type="radio" readonly ${
        data.HaiChieu === "X" ? "checked" : ""
      }>2 chiều</input>
      <br>
      <input type="text" style="width:380px" readonly value="${
        data.TuyenDuong
      }"></input>
    </div>
    <div style="display:flex;padding-top:0">
      <input style="width:186px" type="text" readonly value="‣${
        data.Tudd
      }"></input>
      <input style="width:186px" type="text" readonly value="‣${
        data.Dendd
      }"></input>
    </div>
    <div>
      <label>Trưởng bộ phận:</label>
      <input style="width:68%" type="text" readonly class="${
        data.TruongBPDuyet === "Duyệt"
          ? "done"
          : data.TruongBPDuyet === "Không"
          ? "fal"
          : "wait"
      }" Value="${data.TruongBP} [${data.TruongBPDuyet}]"></input>
      <br><label>Phòng HCNS:</label>
      <input style="width:72%" type="text" readonly class="${
        data.PhNSDuyet === "Duyệt"
          ? "done"
          : data.PhNSDuyet === "Không"
          ? "fal"
          : "wait"
      }" Value="${data.PhChucNang} [${data.PhNSDuyet}]"></input>
    </div>
  </div>`;
  }
  resultEle.innerHTML = innerHtml;
}
