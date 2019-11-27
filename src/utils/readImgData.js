//获取项目工程里的图片
var fs = require('fs');//引用文件系统模块
var image = require("imageinfo"); //引用imageinfo模块

function readFileList(path, filesList) {
  var files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
    var stat = fs.statSync(path + itm);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + itm + "/", filesList)
    } else {
      var obj = {};//定义一个对象存放文件的路径和名字
      obj.path = path;//路径
      obj.filename = itm//名字
      filesList.push(obj);
    }
  })
}
var getFiles = {
  //获取文件夹下的所有文件
  getFileList: function (path) {
    var filesList = [];
    readFileList(path, filesList);
    return filesList;
  },
  //获取文件夹下的所有图片
  getImageFiles: function (path) {
    var imageList = [];
    this.getFileList(path).forEach((item) => {
      var ms = image(fs.readFileSync(item.path + item.filename))//获取img对象
      let obj = ms
      obj.name = item.filename//获取文件名
      obj.path = item.path.substring(5)+item.filename
      ms.mimeType && (imageList.push(obj))
    });
    return imageList;
  }
};
//获取文件夹下的所有图片
var imglist=getFiles.getImageFiles("../../static/img/life/");



//清空文件数据
fs.writeFile('../js/imgData.json', '', function(){console.log('清空成功')})
//把得到的图片对象抛到imgData.json文件中
fs.appendFile('../js/imgData.json', JSON.stringify(imglist), (err) => {
  if (err) throw err;
  console.log('数据已追加到文件');
});
