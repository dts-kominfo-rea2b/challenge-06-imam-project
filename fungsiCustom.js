// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
let allFile = [file1, file2, file3];
function bacaData(fnCallback) {
  let saveFile = [];

  fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
    if (err) fnCallback(err);
    const newWord = change(data);
    saveFile.push(newWord);

    fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
      if (err) fnCallback(err);
      const newWord = change(data);
      saveFile.push(newWord);

      fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
        if (err) fnCallback(err);
        const newWord = change(data);
        saveFile.push(newWord);
        fnCallback(null, saveFile);
      });
    });
  });
}

function change(data){
  const words = JSON.parse(data);
  if (words.message != undefined){
    const useWords = words.message.split(" ");
    return useWords[useWords.length-1];

  }else if (words[0].message != undefined){
    const useWords = words[0].message.split(" ");
    return useWords[useWords.length-1];
    
  }else if (words[0].data.message != undefined);{
    const useWords = words[0].data.message.split(" ");
    return useWords[useWords.length-1];
  }
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
