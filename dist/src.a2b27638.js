// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var URL = "https://script.google.com/macros/s/AKfycbx6ek0LquXhS3nUrmjDBkhReeaBfS5wvaAfSImkmc4ls2kXh5KtaI8VAcZT6FE60RZf/exec";
var urlquytrinh = "google.com.vn";
var btmdangky = document.getElementById("btmguidk");
var idnguoidk = document.getElementById("idngdk");
var idhotendk = document.getElementById("idhotendk");
var idbophan = document.getElementById("idbophan");
var idchucvu = document.getElementById("idchucvu");
var idnguoisd = document.getElementById("idnguoisd");
var idcongviec = document.getElementById("idcongviec");
var idlydo = document.getElementById("idlydo");
var idtungay = document.getElementById("idtungay");
var iddenngay = document.getElementById("iddenngay");
var idtuthgian = document.getElementById("idtuthgian");
var iddenthgian = document.getElementById("iddenthgian");
var idsonguoi = document.getElementById("idsonguoi");
var idsokm = document.getElementById("idsokm");
var idloaixe = document.getElementById("idloaixe");
var idthuong = document.getElementById("idthuong");
var idkhancap = document.getElementById("idkhancap");
var idnhiemvu = document.getElementById("idnhiemvu");
var idviecrieng = document.getElementById("idviecrieng");
var idtuyenduong = document.getElementById("idtuyenduong");
var idmotchieu = document.getElementById("id1chieu");
var idhaichieu = document.getElementById("id2chieu");
var idtutuyendg = document.getElementById("idtutuyendg");
var iddentuyendg = document.getElementById("iddentuyendg");
var idquanly = document.getElementById("quanly");
var modal = document.getElementById("dangchay");
var listItems = document.querySelectorAll(".menu li");
var idmatracuu = document.getElementById("matracuu");
var idngaytracuu = document.getElementById("ngaytracuu");
var idbtnkiemtra = document.getElementById("btnkiemtra");
var dsns = [];

// Gắn sự kiện 'click' cho mỗi mục <li>
listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var pgname = this.getAttribute("value");
    var pgclick = document.getElementById(pgname);
    if (pgclick !== null) {
      listItems.forEach(function (li) {
        // Xóa class 'selected' khỏi tất cả các mục <li> khác
        li.classList.remove("active");
        var pgname = li.getAttribute("value");
        var pg = document.getElementById(pgname);
        try {
          pg.classList.add("hidden");
        } catch (_unused) {}
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
    var submitData = {
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
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dsns = _toConsumableArray(data);
      modal.classList.remove("display");
    }).catch(function (error) {
      console.error("Error:", error);
      modal.classList.remove("display");
      alert("Không tìm thấy cơ sở dữ liệu nhân sự, vui lòng kiểm tra lại");
    });
  }
}
idnguoidk.addEventListener("input", function (e) {
  idnguoidk.value = idnguoidk.value.toUpperCase();
  // idquanly.value = "";
  if (idnguoidk.value.length >= 7) {
    var nv = dsns.find(function (nv) {
      return nv.MaNV.toLowerCase() === idnguoidk.value.toLowerCase();
    });
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
      dsql = dsns.filter(function (rs) {
        return (
          // rs.BoPhan.toLowerCase() === idbophan.value.toLowerCase() &&
          rs.CapDuyet.toLowerCase() === "trưởng bộ phận" || rs.CapDuyet.toLowerCase() === "phó phòng"
        );
      });
      if (dsql.length > 0) {
        // var innerSelect = `<label>Quản lý xác nhận:</label>
        // <select id="quanly" style="font-size:16px; height: 25px;">`;
        var innerSelect = "<option value=\"\">- Ch\u1ECDn qu\u1EA3n l\xFD x\xE1c nh\u1EADn -</option>";
        dsql.forEach(function (rs) {
          return innerSelect += "<option value =\"".concat(rs.HoTen, "|").concat(rs.BoPhan, "\">[").concat(rs.BoPhan, "] ").concat(rs.HoTen, "</option>");
        });
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
btmdangky.addEventListener("click", function (e) {
  e.preventDefault();
  // modal.style.display = "flex";
  fnguidangky();
});
function fnguidangky() {
  var MaNV = idnguoidk.value;
  var HoTen = idhotendk.value;
  var BoPhan = idbophan.value;
  // const chucvu = idchucvu.value;
  var YeuCauCho = idnguoisd.value;
  var NoiDungCV = idcongviec.value;
  var LyDo = idlydo.value;
  var TuNgay = idtungay.value;
  var DenNgay = iddenngay.value;
  var TuGio = idtuthgian.value;
  var DenGio = iddenthgian.value;
  var SoNguoiSD = idsonguoi.value;
  var SoKm = idsokm.value;
  var LoaiXe = idloaixe.value;
  var Thg = idthuong.checked ? "X" : "";
  var Khan = idkhancap.checked ? "X" : "";
  var NVu = idnhiemvu.checked ? "X" : "";
  var Rieng = idviecrieng.checked ? "X" : "";
  var TuyenDuong = idtuyenduong.value;
  var MotChieu = idmotchieu.checked ? "X" : "";
  var HaiChieu = idhaichieu.checked ? "X" : "";
  var Tudd = idtutuyendg.value;
  var Dendd = iddentuyendg.value;
  var QuanLy = idquanly.value;
  var type = "dangkyxe";
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
    alert("Ngày tháng không hợp lệ! Ngày 'Từ ngày' không thể lớn hơn 'Đến ngày'");
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
  var data = {
    MaNV: MaNV,
    HoTen: HoTen,
    BoPhan: BoPhan,
    YeuCauCho: YeuCauCho,
    NoiDungCV: NoiDungCV,
    LyDo: LyDo,
    TuNgay: TuNgay,
    DenNgay: DenNgay,
    TuGio: TuGio,
    DenGio: DenGio,
    SoNguoiSD: SoNguoiSD,
    SoKm: SoKm,
    LoaiXe: LoaiXe,
    Thg: Thg,
    Khan: Khan,
    NVu: NVu,
    Rieng: Rieng,
    TuyenDuong: TuyenDuong,
    MotChieu: MotChieu,
    HaiChieu: HaiChieu,
    Tudd: Tudd,
    Dendd: Dendd,
    QuanLy: QuanLy
  };
  console.log(data);
  var ngaythang = TuNgay.split("-");
  var qs = confirm("X\xC1C NH\u1EACN! \nG\u1EEDi \u0111\u0103ng k\xFD s\u1EED d\u1EE5ng xe ng\xE0y ".concat(ngaythang[2], "/").concat(ngaythang[1], "/").concat(ngaythang[0]));
  if (qs === true) {
    modal.style.display = "flex";
    var submitData = {
      type: type,
      data: data
    };
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(submitData) // p data type must match "Content-Type" header
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      if (data === true) {
        alert("✅ Đăng ký thành công! Vui lòng liên hệ với quản lý để được xác nhận");
      } else {
        alert("❌ Đăng ký không thành công ⚠ Vui lòng thử lại");
      }
    }).catch(function (error) {
      console.error("Error:", error);
      alert("❌ Đăng ký không thành công ⚠ Vui lòng thử lại");
    });
    modal.style.display = "none";
  }
}

//Tra cứu kết quả
idmatracuu.addEventListener("input", function (e) {
  idmatracuu.value = idmatracuu.value.toUpperCase();
});
idbtnkiemtra.addEventListener("click", function (e) {
  e.preventDefault();
  var resultEle = document.getElementById("result");
  var name = idmatracuu.value;
  var date = idngaytracuu.value;
  var idate = parseInt(date.split("-").join(""));
  if (name === "") {
    alert("Vui lòng nhập mã nhân viên tra cứu");
    return;
  }
  var submitData = {
    type: "check",
    data: {
      name: name,
      idate: idate
    }
  };
  modal.classList.add("display");
  console.log(submitData);
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(submitData) // p data type must match "Content-Type" header
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    modal.classList.remove("display");
    render(data);
  }).catch(function (error) {
    console.error("Error:", error);
    modal.classList.remove("display");
    resultEle.innerHTML = "\n      <div class=\"koduyet\" style=\"color:red\">\n      <p>Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 n\xE0o ph\xF9 h\u1EE3p!</p>\n      </div>\n      ";
    // alert("không có kết quả nào, hãy kiểm tra thông tin tra cứu và thử lại");
  });
});

function render(listdata) {
  var resultEle = document.getElementById("result");
  var innerHtml = "";
  for (var i = 0; i < listdata.length; i++) {
    var data = listdata[i];
    data.TuNgay = new Date(data.TuNgay);
    data.DenNgay = new Date(data.DenNgay);
    data.TuGio = new Date(data.TuGio);
    data.DenGio = new Date(data.DenGio);
    if (data.ChonXeSD !== "") {
      var XeCap = "<p style=\"color:blue; margin:8px\">\u2705 Xe: ".concat(data.ChonXeSD, "</p>");
    } else {
      XeCap = "";
    }
    innerHtml += "<div id=\"formketqua\" class=\"".concat(data.KetQua === 1 ? "dcduyet" : data.KetQua === -1 ? "koduyet" : "", "\">\n    <div>\n      <h2 style=\"margin:0;text-align:center\" class=\"").concat(data.KetQua === 1 ? "done" : data.KetQua === -1 ? "fal" : "wait", "\">").concat(data.KetQua === 1 ? "ĐƯỢC DUYỆT" : data.KetQua === -1 ? "KHÔNG ĐƯỢC DUYỆT" : "ĐANG CHỜ", "</h2>\n      ").concat(XeCap, "\n      <label>Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD:</label><br>\n        <input type=\"text\" style=\"width:133px\" readonly value=\"M\xE3 NV: ").concat(data.MaNV, "\"></input>\n        <input type=\"text\" style=\"width:235px\" readonly value=\"H\u1ECD t\xEAn: ").concat(data.HoTen, "\"></input>\n    </div>\n    <div>\n      <input type=\"text\" style=\"width:133px;text-align:right\" readonly value=\"\"></input>\n      <input type=\"text\" style=\"width:235px\" readonly value=\"B\u1ED9 ph\u1EADn: ").concat(data.BoPhan, "\"></input>\n    </div>\n    <div style=\"padding-top:10px\">\n      <label>Y\xEAu c\u1EA7u cho:</label><br>\n      <textarea type=\"text\" style=\"width:380px; readonly\">").concat(data.YeuCauCho, "</textarea >\n      <br>\n      <input type=\"text\" style=\"width:380px; margin-bottom:2px\" readonly value=\"").concat(data.NoiDungCV, "\"></input>\n      <br>\n      <input type=\"text\" style=\"width:380px\" readonly value=\"").concat(data.LyDo, "\"></input>\n    </div>\n    <div style=\"display:flex;padding-top:10px\">\n      <div style=\"text-align:right\">\n        <label>T\u1EEB ng\xE0y:</label>\n        <input type=\"text\" style=\"width:90px\" readonly value=\"").concat(data.TuNgay.getDate(), "/").concat(data.TuNgay.getMonth(), "/").concat(data.TuNgay.getFullYear(), "\"></input>\n        <br><label>\u0110\u1EBFn ng\xE0y:</label>\n        <input type=\"text\" style=\"width:90px\" readonly value=\"").concat(data.DenNgay.getDate(), "/").concat(data.DenNgay.getMonth(), "/").concat(data.DenNgay.getFullYear(), "\"></input>\n      </div>\n      <div style=\"padding-left:15px;text-align:right\">\n        <label>Gi\u1EDD \u0111i:</label>\n        <input type=\"text\" style=\"width:50px\" readonly value=\"").concat(data.TuGio.getHours() > 9 ? "" + data.TuGio.getHours() : "0" + data.TuGio.getHours(), ":").concat(data.TuGio.getMinutes() > 9 ? "" + data.TuGio.getMinutes() : "0" + data.TuGio.getMinutes(), "\"></input>\n        <br><label>Gi\u1EDD v\u1EC1:</label>\n        <input type=\"text\" style=\"width:50px\" readonly value=\"").concat(data.DenGio.getHours() > 9 ? "" + data.DenGio.getHours() : "0" + data.DenGio.getHours(), ":").concat(data.DenGio.getMinutes() > 9 ? "" + data.DenGio.getMinutes() : "0" + data.DenGio.getMinutes(), "\"></input>\n      </div>\n    </div>\n    <div style=\"padding-top:10px\">\n      <label>S\u1ED1 ng\u01B0\u1EDDi s\u1EED d\u1EE5ng:</label>\n      <input type=\"number\" style=\"width: 50px;margin-left: 2px\" value=\"").concat(data.SoNguoiSD, "\"></input>\n      <label style=\"margin-left:20px\">S\u1ED1 Km d\u1EF1 ki\u1EBFn:</label>\n      <input type=\"number\" style=\"width: 65px;margin-left: 2px\" value=\"").concat(data.SoKm, "\"></input>\n    </div>\n    <div class=\"mucdich\" style=\"padding-top:10px; display: flex\">\n      <div class=\"option_mucdich\">\n        <label>Lo\u1EA1i xe:</label><br>\n        <input type=\"text\" style=\"width:95%;\" readonly value=\"").concat(data.LoaiXe, "\"></input>\n      </div>\n      <div class=\"option_mucdich\">\n        <input type=\"radio\" ").concat(data.Thg.toUpperCase() === "X" ? "checked" : "", ">Th\u01B0\u1EDDng</input>\n        <br>\n        <input type=\"radio\" ").concat(data.Khan.toUpperCase() === "X" ? "checked" : "", ">Kh\u1EA9n c\u1EA5p</input>\n      </div>\n      <div class=\"option_mucdich\">\n        <input type=\"radio\" ").concat(data.NVu.toUpperCase() === "X" ? "checked" : "", ">Nhi\u1EC7m v\u1EE5</input>\n        <br>\n        <input type=\"radio\" ").concat(data.Rieng.toUpperCase() === "X" ? "checked" : "", ">Vi\u1EC7c ri\xEAng</input>\n      </div>\n    </div>\n    <div style=\"padding-top:10px\">\n      <label>Tuy\u1EBFn \u0111\u01B0\u1EDDng:</label>\n      <input type=\"radio\" readonly ").concat(data.MotChieu === "X" ? "checked" : "", ">1 chi\u1EC1u</input>\n      <input type=\"radio\" readonly ").concat(data.HaiChieu === "X" ? "checked" : "", ">2 chi\u1EC1u</input>\n      <br>\n      <input type=\"text\" style=\"width:380px\" readonly value=\"").concat(data.TuyenDuong, "\"></input>\n    </div>\n    <div style=\"display:flex;padding-top:0\">\n      <input style=\"width:186px\" type=\"text\" readonly value=\"").concat(data.Tudd, "\"></input>\n      <input style=\"width:186px\" type=\"text\" readonly value=\"\u2023").concat(data.Dendd, "\"></input>\n    </div>\n    <div>\n      <label>Tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn:</label>\n      <input style=\"width:68%\" type=\"text\" readonly class=\"").concat(data.TruongBPDuyet === "Duyệt" ? "done" : data.TruongBPDuyet === "Không" ? "fal" : "wait", "\" Value=\"").concat(data.TruongBP, " [").concat(data.TruongBPDuyet, "]\"></input>\n      <br><label>Ph\xF2ng HCNS:</label>\n      <input style=\"width:72%\" type=\"text\" readonly class=\"").concat(data.PhNSDuyet === "Duyệt" ? "done" : data.PhNSDuyet === "Không" ? "fal" : "wait", "\" Value=\"").concat(data.PhChucNang, " [").concat(data.PhNSDuyet, "]\"></input>\n    </div>\n  </div>");
  }
  resultEle.innerHTML = innerHtml;
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33395" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map