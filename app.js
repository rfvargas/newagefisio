var inputTextSelecionado = null;

atualizaAgenda();


function capturaID(Element) {
    // alert(Element.id);
    inputTextSelecionado = Element.id;
} 

function tirarCor() {
    if (inputTextSelecionado != null) {        
        var inputText = inputTextSelecionado;
        // alert("inputText: " + inputText);    
        document.getElementById(inputText).style.backgroundColor = ''; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }  
}

function pintarAmarelo() {
    if (inputTextSelecionado != null) {
        var inputText = inputTextSelecionado;       
        document.getElementById(inputText).style.backgroundColor = 'rgb(251, 255, 0)'; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "rgb(251, 255, 0)";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }
}

function pintarLaranja() {
    if (inputTextSelecionado != null) {
        var inputText = inputTextSelecionado;       
        document.getElementById(inputText).style.backgroundColor = 'rgb(255, 160, 35)'; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "rgb(255, 160, 35)";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }
}

function pintarAzul() {    
    if (inputTextSelecionado != null) {
        var inputText = inputTextSelecionado;       
        document.getElementById(inputText).style.backgroundColor = 'blue'; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "blue";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }
}

function salvarRegistro() {
    if (inputTextSelecionado != null) {    
        var inputText = inputTextSelecionado;    
        var registro = document.getElementById(inputText).value;
        // alert("paciente: " + paciente + " (" + inputText + ")");
        var setLsRegistro = inputText;
        localStorage.setItem(setLsRegistro, registro);
        var getLsRegistro = localStorage.getItem(setLsRegistro)
        alert("Registro salvo!\ngetLsRegistro (" + inputText + "): " + getLsRegistro);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }    
}

function atualizaAgenda() {
    var setLsRegistroAno = "input-ano";
    var setLsRegistroMes = "input-mes";
    var setLsRegistroDiaIni = "input-dia-ini";
    var setLsRegistroDiaFin = "input-dia-fin";
    
    var setLsRegistro0 = "text-seg0";
    var setLsRegistro1 = "text-seg1";
    var setLsRegistro2 = "text-seg2";
    var setLsRegistro3 = "text-seg3";
    var setLsRegistro4 = "text-seg4";
    var setLsRegistro5 = "text-seg5";
    var setLsRegistro6 = "text-seg6";
    var setLsRegistro7 = "text-seg7";
    var setLsRegistro8 = "text-seg8";    
    
    var setLsRegistro9 = "text-ter0";
    var setLsRegistro10 = "text-ter1";
    var setLsRegistro11 = "text-ter2";
    var setLsRegistro12 = "text-ter3";
    var setLsRegistro13 = "text-ter4";
    var setLsRegistro14 = "text-ter5";
    var setLsRegistro15 = "text-ter6";
    var setLsRegistro16 = "text-ter7";
    var setLsRegistro17 = "text-ter8";
    
    var setLsRegistro18 = "text-qua0";
    var setLsRegistro19 = "text-qua1";
    var setLsRegistro20 = "text-qua2";
    var setLsRegistro21 = "text-qua3";
    var setLsRegistro22 = "text-qua4";
    var setLsRegistro23 = "text-qua5";
    var setLsRegistro24 = "text-qua6";
    var setLsRegistro25 = "text-qua7";
    var setLsRegistro26 = "text-qua8";
    
    var setLsRegistro27 = "text-qui0";
    var setLsRegistro28 = "text-qui1";
    var setLsRegistro29 = "text-qui2";
    var setLsRegistro30 = "text-qui3";
    var setLsRegistro31 = "text-qui4";
    var setLsRegistro32 = "text-qui5";
    var setLsRegistro33 = "text-qui6";
    var setLsRegistro34 = "text-qui7";
    var setLsRegistro35 = "text-qui8";
    
    var setLsRegistro36 = "text-sex0";
    var setLsRegistro37 = "text-sex1";
    var setLsRegistro38 = "text-sex2";
    var setLsRegistro39 = "text-sex3";
    var setLsRegistro40 = "text-sex4";    
    var setLsRegistro41 = "text-sex5";
    var setLsRegistro42 = "text-sex6";
    var setLsRegistro43 = "text-sex7";
    var setLsRegistro44 = "text-sex8";
    
    var setLsCorInputTextAno = "input-cor-ano";
    var setLsCorInputTextMes = "input-cor-mes";
    var setLsCorInputTextDiaIni = "input-cor-dia-ini";
    var setLsCorInputTextDiaFin = "input-cor-dia-fin";

    var setLsCorInputText0 = "cor-seg0";
    var setLsCorInputText1 = "cor-seg1";
    var setLsCorInputText2 = "cor-seg2";
    var setLsCorInputText3 = "cor-seg3";
    var setLsCorInputText4 = "cor-seg4";
    var setLsCorInputText5 = "cor-seg5";
    var setLsCorInputText6 = "cor-seg6";
    var setLsCorInputText7 = "cor-seg7";
    var setLsCorInputText8 = "cor-seg8";
    
    var setLsCorInputText9 = "cor-ter0";
    var setLsCorInputText10 = "cor-ter1";
    var setLsCorInputText11 = "cor-ter2";
    var setLsCorInputText12 = "cor-ter3";
    var setLsCorInputText13 = "cor-ter4";
    var setLsCorInputText14 = "cor-ter5";
    var setLsCorInputText15 = "cor-ter6";
    var setLsCorInputText16 = "cor-ter7";
    var setLsCorInputText17 = "cor-ter8";
    
    var setLsCorInputText18 = "cor-qua0";
    var setLsCorInputText19 = "cor-qua1";
    var setLsCorInputText20 = "cor-qua2";
    var setLsCorInputText21 = "cor-qua3";
    var setLsCorInputText22 = "cor-qua4";
    var setLsCorInputText23 = "cor-qua5";
    var setLsCorInputText24 = "cor-qua6";
    var setLsCorInputText25 = "cor-qua7";
    var setLsCorInputText26 = "cor-qua8";
    
    var setLsCorInputText27 = "cor-qui0";
    var setLsCorInputText28 = "cor-qui1";
    var setLsCorInputText29 = "cor-qui2";
    var setLsCorInputText30 = "cor-qui3";
    var setLsCorInputText31 = "cor-qui4";
    var setLsCorInputText32 = "cor-qui5";
    var setLsCorInputText33 = "cor-qui6";
    var setLsCorInputText34 = "cor-qui7";
    var setLsCorInputText35 = "cor-qui8";
    
    var setLsCorInputText36 = "cor-sex0";
    var setLsCorInputText37 = "cor-sex1";
    var setLsCorInputText38 = "cor-sex2";
    var setLsCorInputText39 = "cor-sex3";
    var setLsCorInputText40 = "cor-sex4";
    var setLsCorInputText41 = "cor-sex5";
    var setLsCorInputText42 = "cor-sex6";
    var setLsCorInputText43 = "cor-sex7";
    var setLsCorInputText44 = "cor-sex8";
    
    var getLsRegistroAno = localStorage.getItem(setLsRegistroAno);
    var getLsRegistroMes = localStorage.getItem(setLsRegistroMes);
    var getLsRegistroDiaIni = localStorage.getItem(setLsRegistroDiaIni);
    var getLsRegistroDiaFin = localStorage.getItem(setLsRegistroDiaFin);

    var getLsRegistro0 = localStorage.getItem(setLsRegistro0);
    var getLsRegistro1 = localStorage.getItem(setLsRegistro1);
    var getLsRegistro2 = localStorage.getItem(setLsRegistro2);
    var getLsRegistro3 = localStorage.getItem(setLsRegistro3);
    var getLsRegistro4 = localStorage.getItem(setLsRegistro4);
    var getLsRegistro5 = localStorage.getItem(setLsRegistro5);    
    var getLsRegistro6 = localStorage.getItem(setLsRegistro6);
    var getLsRegistro7 = localStorage.getItem(setLsRegistro7);
    var getLsRegistro8 = localStorage.getItem(setLsRegistro8);
    var getLsRegistro9 = localStorage.getItem(setLsRegistro9);
    var getLsRegistro10 = localStorage.getItem(setLsRegistro10);
    var getLsRegistro11 = localStorage.getItem(setLsRegistro11);
    var getLsRegistro12 = localStorage.getItem(setLsRegistro12);
    var getLsRegistro13 = localStorage.getItem(setLsRegistro13);
    var getLsRegistro14 = localStorage.getItem(setLsRegistro14);
    var getLsRegistro15 = localStorage.getItem(setLsRegistro15);
    var getLsRegistro16 = localStorage.getItem(setLsRegistro16);
    var getLsRegistro17 = localStorage.getItem(setLsRegistro17);
    var getLsRegistro18 = localStorage.getItem(setLsRegistro18);
    var getLsRegistro19 = localStorage.getItem(setLsRegistro19);
    var getLsRegistro20 = localStorage.getItem(setLsRegistro20);
    var getLsRegistro21 = localStorage.getItem(setLsRegistro21);
    var getLsRegistro22 = localStorage.getItem(setLsRegistro22);
    var getLsRegistro23 = localStorage.getItem(setLsRegistro23);
    var getLsRegistro24 = localStorage.getItem(setLsRegistro24);
    var getLsRegistro25 = localStorage.getItem(setLsRegistro25);
    var getLsRegistro26 = localStorage.getItem(setLsRegistro26);
    var getLsRegistro27 = localStorage.getItem(setLsRegistro27);
    var getLsRegistro28 = localStorage.getItem(setLsRegistro28);
    var getLsRegistro29 = localStorage.getItem(setLsRegistro29);
    var getLsRegistro30 = localStorage.getItem(setLsRegistro30);
    var getLsRegistro31 = localStorage.getItem(setLsRegistro31);
    var getLsRegistro32 = localStorage.getItem(setLsRegistro32);
    var getLsRegistro33 = localStorage.getItem(setLsRegistro33);
    var getLsRegistro34 = localStorage.getItem(setLsRegistro34);
    var getLsRegistro35 = localStorage.getItem(setLsRegistro35);
    var getLsRegistro36 = localStorage.getItem(setLsRegistro36);
    var getLsRegistro37 = localStorage.getItem(setLsRegistro37);
    var getLsRegistro38 = localStorage.getItem(setLsRegistro38);
    var getLsRegistro39 = localStorage.getItem(setLsRegistro39);
    var getLsRegistro40 = localStorage.getItem(setLsRegistro40);
    var getLsRegistro41 = localStorage.getItem(setLsRegistro41);
    var getLsRegistro42 = localStorage.getItem(setLsRegistro42);
    var getLsRegistro43 = localStorage.getItem(setLsRegistro43);
    var getLsRegistro44 = localStorage.getItem(setLsRegistro44);

    var getLsCorInputTextAno = localStorage.getItem(setLsCorInputTextAno);
    var getLsCorInputTextMes = localStorage.getItem(setLsCorInputTextMes);
    var getLsCorInputTextDiaIni = localStorage.getItem(setLsCorInputTextDiaIni);
    var getLsCorInputTextDiaFin = localStorage.getItem(setLsCorInputTextDiaFin);

    var getLsCorInputText0 = localStorage.getItem(setLsCorInputText0);
    var getLsCorInputText1 = localStorage.getItem(setLsCorInputText1);
    var getLsCorInputText2 = localStorage.getItem(setLsCorInputText2);
    var getLsCorInputText3 = localStorage.getItem(setLsCorInputText3);    
    var getLsCorInputText4 = localStorage.getItem(setLsCorInputText4);
    var getLsCorInputText5 = localStorage.getItem(setLsCorInputText5);    
    var getLsCorInputText6 = localStorage.getItem(setLsCorInputText6);
    var getLsCorInputText7 = localStorage.getItem(setLsCorInputText7);
    var getLsCorInputText8 = localStorage.getItem(setLsCorInputText8);
    var getLsCorInputText9 = localStorage.getItem(setLsCorInputText9);
    var getLsCorInputText10 = localStorage.getItem(setLsCorInputText10);
    var getLsCorInputText11 = localStorage.getItem(setLsCorInputText11);
    var getLsCorInputText12 = localStorage.getItem(setLsCorInputText12);
    var getLsCorInputText13 = localStorage.getItem(setLsCorInputText13);
    var getLsCorInputText14 = localStorage.getItem(setLsCorInputText14);
    var getLsCorInputText15 = localStorage.getItem(setLsCorInputText15);
    var getLsCorInputText16 = localStorage.getItem(setLsCorInputText16);
    var getLsCorInputText17 = localStorage.getItem(setLsCorInputText17);
    var getLsCorInputText18 = localStorage.getItem(setLsCorInputText18);
    var getLsCorInputText19 = localStorage.getItem(setLsCorInputText19);
    var getLsCorInputText20 = localStorage.getItem(setLsCorInputText20);
    var getLsCorInputText21 = localStorage.getItem(setLsCorInputText21);
    var getLsCorInputText22 = localStorage.getItem(setLsCorInputText22);
    var getLsCorInputText23 = localStorage.getItem(setLsCorInputText23);
    var getLsCorInputText24 = localStorage.getItem(setLsCorInputText24);
    var getLsCorInputText25 = localStorage.getItem(setLsCorInputText25);
    var getLsCorInputText26 = localStorage.getItem(setLsCorInputText26);
    var getLsCorInputText27 = localStorage.getItem(setLsCorInputText27);
    var getLsCorInputText28 = localStorage.getItem(setLsCorInputText28);
    var getLsCorInputText29 = localStorage.getItem(setLsCorInputText29);
    var getLsCorInputText30 = localStorage.getItem(setLsCorInputText30);
    var getLsCorInputText31 = localStorage.getItem(setLsCorInputText31);
    var getLsCorInputText32 = localStorage.getItem(setLsCorInputText32);
    var getLsCorInputText33 = localStorage.getItem(setLsCorInputText33);
    var getLsCorInputText34 = localStorage.getItem(setLsCorInputText34);
    var getLsCorInputText35 = localStorage.getItem(setLsCorInputText35);
    var getLsCorInputText36 = localStorage.getItem(setLsCorInputText36);
    var getLsCorInputText37 = localStorage.getItem(setLsCorInputText37);
    var getLsCorInputText38 = localStorage.getItem(setLsCorInputText38);
    var getLsCorInputText39 = localStorage.getItem(setLsCorInputText39);
    var getLsCorInputText40 = localStorage.getItem(setLsCorInputText40);
    var getLsCorInputText41 = localStorage.getItem(setLsCorInputText41);
    var getLsCorInputText42 = localStorage.getItem(setLsCorInputText42);
    var getLsCorInputText43 = localStorage.getItem(setLsCorInputText43);
    var getLsCorInputText44 = localStorage.getItem(setLsCorInputText44);

    
    // alert("getLsRegistro (" + setLsRegistro + "): " + getLsRegistro);   

    document.getElementById(setLsRegistroAno).value = getLsRegistroAno;
    document.getElementById(setLsRegistroMes).value = getLsRegistroMes;
    document.getElementById(setLsRegistroDiaIni).value = getLsRegistroDiaIni;
    document.getElementById(setLsRegistroDiaFin).value = getLsRegistroDiaFin;
    
    document.getElementById(setLsRegistro0).value = getLsRegistro0;
    document.getElementById(setLsRegistro1).value = getLsRegistro1;
    document.getElementById(setLsRegistro2).value = getLsRegistro2;
    document.getElementById(setLsRegistro3).value = getLsRegistro3;
    document.getElementById(setLsRegistro4).value = getLsRegistro4;
    document.getElementById(setLsRegistro5).value = getLsRegistro5;
    document.getElementById(setLsRegistro6).value = getLsRegistro6;
    document.getElementById(setLsRegistro7).value = getLsRegistro7;
    document.getElementById(setLsRegistro8).value = getLsRegistro8;
    document.getElementById(setLsRegistro9).value = getLsRegistro9;
    document.getElementById(setLsRegistro10).value = getLsRegistro10;
    document.getElementById(setLsRegistro11).value = getLsRegistro11;
    document.getElementById(setLsRegistro12).value = getLsRegistro12;
    document.getElementById(setLsRegistro13).value = getLsRegistro13;
    document.getElementById(setLsRegistro14).value = getLsRegistro14;
    document.getElementById(setLsRegistro15).value = getLsRegistro15;
    document.getElementById(setLsRegistro16).value = getLsRegistro16;
    document.getElementById(setLsRegistro17).value = getLsRegistro17;
    document.getElementById(setLsRegistro18).value = getLsRegistro18;
    document.getElementById(setLsRegistro19).value = getLsRegistro19;
    document.getElementById(setLsRegistro20).value = getLsRegistro20;
    document.getElementById(setLsRegistro21).value = getLsRegistro21;
    document.getElementById(setLsRegistro22).value = getLsRegistro22;
    document.getElementById(setLsRegistro23).value = getLsRegistro23;
    document.getElementById(setLsRegistro24).value = getLsRegistro24;
    document.getElementById(setLsRegistro25).value = getLsRegistro25;
    document.getElementById(setLsRegistro26).value = getLsRegistro26;
    document.getElementById(setLsRegistro27).value = getLsRegistro27;
    document.getElementById(setLsRegistro28).value = getLsRegistro28;
    document.getElementById(setLsRegistro29).value = getLsRegistro29;
    document.getElementById(setLsRegistro30).value = getLsRegistro30;
    document.getElementById(setLsRegistro31).value = getLsRegistro31;
    document.getElementById(setLsRegistro32).value = getLsRegistro32;
    document.getElementById(setLsRegistro33).value = getLsRegistro33;
    document.getElementById(setLsRegistro34).value = getLsRegistro34;
    document.getElementById(setLsRegistro35).value = getLsRegistro35;
    document.getElementById(setLsRegistro36).value = getLsRegistro36;
    document.getElementById(setLsRegistro37).value = getLsRegistro37;
    document.getElementById(setLsRegistro38).value = getLsRegistro38;
    document.getElementById(setLsRegistro39).value = getLsRegistro39;
    document.getElementById(setLsRegistro40).value = getLsRegistro40;
    document.getElementById(setLsRegistro41).value = getLsRegistro41;
    document.getElementById(setLsRegistro42).value = getLsRegistro42;
    document.getElementById(setLsRegistro43).value = getLsRegistro43;
    document.getElementById(setLsRegistro44).value = getLsRegistro44;
    
    document.getElementById(setLsRegistroAno).style.backgroundColor = getLsCorInputTextAno;
    document.getElementById(setLsRegistroMes).style.backgroundColor = getLsCorInputTextMes;
    document.getElementById(setLsRegistroDiaIni).style.backgroundColor = getLsCorInputTextDiaIni;
    document.getElementById(setLsRegistroDiaFin).style.backgroundColor = getLsCorInputTextDiaFin;
    
    document.getElementById(setLsRegistro0).style.backgroundColor = getLsCorInputText0;
    document.getElementById(setLsRegistro1).style.backgroundColor = getLsCorInputText1;
    document.getElementById(setLsRegistro2).style.backgroundColor = getLsCorInputText2;
    document.getElementById(setLsRegistro3).style.backgroundColor = getLsCorInputText3;
    document.getElementById(setLsRegistro4).style.backgroundColor = getLsCorInputText4;
    document.getElementById(setLsRegistro5).style.backgroundColor = getLsCorInputText5;
    document.getElementById(setLsRegistro6).style.backgroundColor = getLsCorInputText6;
    document.getElementById(setLsRegistro7).style.backgroundColor = getLsCorInputText7;
    document.getElementById(setLsRegistro8).style.backgroundColor = getLsCorInputText8;
    document.getElementById(setLsRegistro9).style.backgroundColor = getLsCorInputText9;
    document.getElementById(setLsRegistro10).style.backgroundColor = getLsCorInputText10;
    document.getElementById(setLsRegistro11).style.backgroundColor = getLsCorInputText11;
    document.getElementById(setLsRegistro12).style.backgroundColor = getLsCorInputText12;
    document.getElementById(setLsRegistro13).style.backgroundColor = getLsCorInputText13;
    document.getElementById(setLsRegistro14).style.backgroundColor = getLsCorInputText14;
    document.getElementById(setLsRegistro15).style.backgroundColor = getLsCorInputText15;
    document.getElementById(setLsRegistro16).style.backgroundColor = getLsCorInputText16;
    document.getElementById(setLsRegistro17).style.backgroundColor = getLsCorInputText17;
    document.getElementById(setLsRegistro18).style.backgroundColor = getLsCorInputText18;
    document.getElementById(setLsRegistro19).style.backgroundColor = getLsCorInputText19;    
    document.getElementById(setLsRegistro20).style.backgroundColor = getLsCorInputText20;
    document.getElementById(setLsRegistro21).style.backgroundColor = getLsCorInputText21;
    document.getElementById(setLsRegistro22).style.backgroundColor = getLsCorInputText22;
    document.getElementById(setLsRegistro23).style.backgroundColor = getLsCorInputText23;
    document.getElementById(setLsRegistro24).style.backgroundColor = getLsCorInputText24;
    document.getElementById(setLsRegistro25).style.backgroundColor = getLsCorInputText25;
    document.getElementById(setLsRegistro26).style.backgroundColor = getLsCorInputText26;
    document.getElementById(setLsRegistro27).style.backgroundColor = getLsCorInputText27;
    document.getElementById(setLsRegistro28).style.backgroundColor = getLsCorInputText28;
    document.getElementById(setLsRegistro29).style.backgroundColor = getLsCorInputText29;
    document.getElementById(setLsRegistro30).style.backgroundColor = getLsCorInputText30;
    document.getElementById(setLsRegistro31).style.backgroundColor = getLsCorInputText31;
    document.getElementById(setLsRegistro32).style.backgroundColor = getLsCorInputText32;
    document.getElementById(setLsRegistro33).style.backgroundColor = getLsCorInputText33;
    document.getElementById(setLsRegistro34).style.backgroundColor = getLsCorInputText34;
    document.getElementById(setLsRegistro35).style.backgroundColor = getLsCorInputText35;
    document.getElementById(setLsRegistro36).style.backgroundColor = getLsCorInputText36;
    document.getElementById(setLsRegistro37).style.backgroundColor = getLsCorInputText37;
    document.getElementById(setLsRegistro38).style.backgroundColor = getLsCorInputText38;
    document.getElementById(setLsRegistro39).style.backgroundColor = getLsCorInputText39;
    document.getElementById(setLsRegistro40).style.backgroundColor = getLsCorInputText40;
    document.getElementById(setLsRegistro41).style.backgroundColor = getLsCorInputText41;
    document.getElementById(setLsRegistro42).style.backgroundColor = getLsCorInputText42;
    document.getElementById(setLsRegistro43).style.backgroundColor = getLsCorInputText43;
    document.getElementById(setLsRegistro44).style.backgroundColor = getLsCorInputText44;
}