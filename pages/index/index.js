//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    introduction: 'introduce',
    list: [
      // flag的能够 保证切换当前 对象做标记
      { 'flag': null, 'title': '', 'content': ['任务1：矿冶园', '任务2：矿冶园'] },
      { 'flag': true, 'title': '第一章：矿冶园1', 'content': ['任务1-1：矿冶园', '任务1-2：矿冶园'] },
      { 'flag': true, 'title': '第二章：矿冶园2', 'content': ['任务2-1：矿冶园', '任务2-2：矿冶园'] },
      { 'flag': true, 'title': '第三章：矿冶园3', 'content': ['任务3-1：矿冶园', '任务3-2：矿冶园'] },
    ]
  },
  //事件处理函数
  onLoad: function () {

  },
  introduceChange: function (e) {
    this.setData({
      introduction: e.currentTarget.dataset.introduction
    })
  },
  chapter: function (e) {
    var chapter = e.currentTarget.dataset.chapterIndex
    var list = this.data.list
    list[parseInt(chapter)].flag = !list[parseInt(chapter)].flag
    this.setData({
      list: list
    })
  },
})
