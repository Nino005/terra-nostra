const SHEET_NAME="Prenotazioni";

function doPost(e){
  const lock=LockService.getScriptLock();
  lock.waitLock(5000);
  try{
    const p=e&&e.parameter?e.parameter:{};
    if(String(p.website||"").trim()!=="") return json({ok:false,error:"spam"});
    const name=clean(p.name,100), phone=clean(p.phone,25);
    const date=clean(p.date,10), time=clean(p.time,5);
    const people=Number(p.people), notes=clean(p.notes,500);
    if(name.length<2||phone.length<5||!/^\d{4}-\d{2}-\d{2}$/.test(date)||!/^\d{2}:\d{2}$/.test(time)||!Number.isInteger(people)||people<1||people>12)
      return json({ok:false,error:"Dati non validi"});
    const sh=getSheet_();
    sh.appendRow([new Date(),date,time,people,name,phone,notes,"Da confermare"]);
    return json({ok:true});
  }finally{lock.releaseLock();}
}
function getSheet_(){
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  let sh=ss.getSheetByName(SHEET_NAME);
  if(!sh){
    sh=ss.insertSheet(SHEET_NAME);
    sh.appendRow(["Ricevuta il","Data","Ora","Persone","Nome e cognome","Telefono","Note","Stato"]);
    sh.setFrozenRows(1);sh.getRange("A1:H1").setFontWeight("bold");sh.autoResizeColumns(1,8);
  }
  return sh;
}
function clean(v,n){return String(v||"").trim().slice(0,n)}
function json(x){return ContentService.createTextOutput(JSON.stringify(x)).setMimeType(ContentService.MimeType.JSON)}
