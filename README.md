# JavaScript算法函数集合

这个项目包含了各种JavaScript算法实现，按功能分类整理。每个功能都提供了多种实现方式，用于展示不同的编程方法。

## 项目结构

```
/src
  /array - 数组操作相关函数
    - maps.js - 数组元素乘以2
    - highAndLow.js - 查找数组最大值和最小值
    - smallEnough.js - 检查数组元素是否小于限制值
    - countSheeps.js - 计数数组中的true元素

  /math - 数学计算相关函数
    - nbYear.js - 人口增长计算
    - solution.js - 3和5的倍数之和
    - summation.js - 累加和计算
    - makeNegative.js - 转换为负数

  - index.js - 程序入口文件
```

## 使用方法

1. 克隆仓库
2. 安装依赖：`npm install`
3. 运行示例：`npm start`

## 函数说明

### 数组操作

- **maps**: 将数组中的每个元素乘以2
    - maps: for...in循环实现
    - maps2: map方法实现

- **highAndLow**: 找出数字字符串中的最大值和最小值

- **smallEnough**: 检查数组中的所有值是否小于或等于限制值
    - smallEnough: for循环实现
    - smallEnough2: every方法实现

- **countSheeps**: 计算数组中为true的元素数量
    - countSheeps: for循环实现
    - countSheeps2: filter方法实现

### 数学计算

- **nbYear**: 计算人口达到目标数量所需的年数
- **solution**: 计算小于给定数字的所有3或5的倍数之和
- **summation**: 计算从1到给定数字的累加和
- **makeNegative**: 返回一个数字的负数形式
    - makeNegative: 条件语句实现
    - makeNegative2: 三元运算符实现
