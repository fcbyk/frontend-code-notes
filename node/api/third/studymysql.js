// 导入mysql模块
const mysql = require('mysql')
// 建立mysql数据库的连接
const db = mysql.createPool({
    host: 'ip地址',
    user: '用户名',
    password: '密码',
    database: '数据库名称'
})

// 测试 mysql模块能否正常工作
// 调用 db.query() 方法，指定要执行的 SQL 语句，通过回调函数拿到执行的结果
db.query(
    'select "数据库连接成功"',
    (err,results)=>{
        if(err) return console.log(err.message)
        console.log(results)
    }
)

// 使用 mysql模块操作 MySQL 数据库
// 查询数据
exports.selectStudent = ()=>{
    db.query(
        'select * from Student',
        (err,results)=>{
            if(err) return console.log(err.message)
            console.log(results)
        }
    )
}

function Student(Sno,Sname,Sex,Sage,Sdep){
    this.Sno = Sno
    this.Sname = Sname
    this.Sex = Sex
    this.Sage = Sage
    this.Sdep = Sdep
}
let zhangsan = new Student(201215126,'张三','男',19,'CS')

// 插入数据
// 待执行的sql语句，其中英文的？表示占位符
exports.insertStudent= ()=>{
    db.query(
        'insert into Student values(?,?,?,?,?)',
        [zhangsan.Sno, zhangsan.Sname, zhangsan.Sex, zhangsan.Sage, zhangsan.Sdep],
        (err,results)=>{
            if(err) return console.log(err.message)
            if(results.affectedRows === 1) console.log("插入数据成功")
        }
    )
}

// 插入数据的便捷方式
// 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据
exports.insertSetStudent = ()=>{
    db.query(
        'insert into Student set ?',zhangsan,
        (err,results)=>{
            if(err) return console.log(err.message)
            if(results.affectedRows === 1) console.log("插入数据成功")
        }
    )
}

// 删除数据
exports.deleteStudent = ()=>{
    db.query(
        'delete from Student where Sno = ?',201215126,
        (err,results)=>{
            if(err) return console.log(err.message)
            if(results.affectedRows === 1) console.log("删除数据成功")
        }
    )
}

