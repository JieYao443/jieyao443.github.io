/*
 * @Author: your name
 * @Date: 2020-12-26 14:21:02
 * @LastEditTime: 2021-02-08 09:13:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \烟花表白(可自定义文字)\talk.js
 */
$(function () {
  // 开始放烟花
  initAnimate();
  $("#yes").click(function (event) {
    modal("哼，就知道你会想的！(^_^)", function () {
      $(".page_one").addClass("hide");
      $(".page_two").removeClass("hide");
      typeWrite();
        fireworks();
    });
  });
  $("#no").click(function (event) {
    modal("啊啊啊你点错了喂！！", A);
  });
});

function A() {
  modal("哇！！有毒啊", B);
}

function B() {
  modal("你要跟我打了是不是", C);
}

function C() {
  modal("好吧~那我真的打你了哦", D);
}

function D() {
  modal("想拒绝我，必不可能", E);
}

function E() {
  modal("我机智的一批，贼聪明", F);
}

function F() {
  modal("跟我走吧", G);
}

function G() {
  modal("带你到处流浪", H);
}

function H() {
  modal("带你看帅哥", I);
}

function I() {
  modal("带你看小姐姐", J);
}

function J() {
  modal("带你踏足万里", function () {
    fireworks();
  });
}

function fireworks() {
  $(".page_one").addClass("hide");
  initAnimate();
}

function modal(content, callback) {
  var tpl =
    '<div class="container">' +
    '<div class="mask"></div>' +
    '<div class="modal">' +
    "<p>" +
    content +
    "</p>" +
    '<button type="button" id="confirm" class="confirm">确定</button>' +
    "</div>" +
    "</div>";
  $("body").append(tpl);
  $(document).on("click", ".confirm", function () {
    $(".container").remove();
    callback();
  });
}
