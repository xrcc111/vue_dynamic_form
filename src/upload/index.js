const { data } = require('./index.json')

class FileType {
  constructor(f, t) {
    this.fileType = f
    this.testType = t
  }

  getFileConfig() {
    for (let i = 0; i < data.length; i++) {
      if (this.fileType === data[i].name && this.isContained(this.testType, data[i].typeName)) {
        return { id: data[i].fileId, fileName: data[i].fileName }
      }
    }
  }

  // 判断一个数组是否包含了另一个数组的全部元素
  isContained(a, b) {
    // a和b其中一个不是数组，直接返回false
    if (!(a instanceof Array) || !(b instanceof Array)) return false
    const len = b.length
    // a的长度小于b的长度，直接返回false
    if (a.length < len) return false
    for (let i = 0; i < len; i++) {
      // 遍历b中的元素，遇到a没有包含某个元素的，直接返回false
      if (!a.includes(b[i])) return false
    }
    // 遍历结束，返回true
    return true
  }
}

const p = new FileType('发布测试', ['功能测试', '性能测试', '安全测试', '众测'])
const m = p.getFileConfig()
console.log(m)

