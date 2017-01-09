const fs = require("fs");
var iconv = require('iconv-lite');
const logger = require("./log/logHelper").helper;
// const validator = require('validator');
const table_name = "tables";
const domain_name = "domains";
const table_space_name = "table_spaces";

/**
 * 读取目录下的所有文件
 * @param name 源文件目录
 * @returns {Array} 返回数组
 */
const readFile = function (name) {
    const path = 'data/source/' + name;
    logger.writeInfo('db 读取的 path:  ' + path);
    const objs = new Array();
    const files = fs.readdirSync(path);

    if (files.length > 0) {
        files.forEach(function (file) {
            const filePath = path + '/' + file;

            const statFile = fs.statSync(filePath);
            if (!statFile.isDirectory()) {
                logger.writeInfo('db 读取的文件名:  ' + filePath);
                // 如果是文件，读取文件
                const json = JSON.parse(fs.readFileSync(filePath));
                objs.push(json);
            }
        });
    }
    return objs;
};

/**
 * 向指定路径写文件
 * @param type 目标文件夹 (table、table_space)
 * @param name 文件名
 * @param data 文件内容
 */
const writeFile = function (type, name, data) {
    const outPath = 'data/target/' + type + '/';
    checkAndCreateDir(outPath);
    const outFile = outPath + name + '.sql';
    // 把中文转换成字节数组
    var arr = iconv.encode(data, 'gbk');
    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.writeFile(outFile, arr, function (err) {
        if (err)
            logger.writeErr('写入 ' + type + '  ' + name + '.sql 文件错误:  ' + err);
        else
            logger.writeInfo('写入 ' + type + '  ' + name + '.sql 文件成功');
    });

};

function checkAndCreateDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}


/**
 * 获取所有表属性对象
 */
const getAllTables = function () {
    const json = this.readFile(table_name);
    return json;
};


/**
 * 获取所有domain对象
 */
const getAllDomains = function () {
    return this.readFile(domain_name);
};

/**
 * 获取所有表空间对象
 */
const getAllTableSpaces = function () {
    return this.readFile(table_space_name);
};

/**
 * 获取默认的表空间
 */
const getDefaultTableSpace = function () {
    var defauleTableSpace;
    const allTableSpaces = this.getAllTableSpaces();
    allTableSpaces.forEach(function (tableSpace, index, array) {
        if (tableSpace.D == 'Y') {
            defauleTableSpace = tableSpace;
        }
    });
    return defauleTableSpace;
};

const Models = {
    readFile: readFile,
    writeFile: writeFile,
    getAllTables: getAllTables,
    getAllDomains: getAllDomains,
    getAllTableSpaces: getAllTableSpaces,
    getDefaultTableSpace: getDefaultTableSpace
};

module.exports = Models;