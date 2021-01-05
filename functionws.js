var namea,address,pin,b1,b2,b4,n1,n2,n3;
var proceed,state=0;

function choose(){
   head.hide();

   com1.hide();
   com2.hide();
   com3.hide();
   com4.hide();

   c1.hide();
   c2.hide();
   c3.hide();
   c4.hide();

   buy.hide();

   pin = createInput();
   pin.position(500,200);

   address = createInput();
   address.position(500,230);

   namea = createInput();
   namea.position(500,260);

   word = createElement("h2");
   word.html("Name");
   word.position(400,175);

   word1 = createElement("h2");
   word1.html("Address");
   word1.position(400,205);
   
   word12 = createElement("h2");
   word12.html("Pin");
   word12.position(400,235);

   b1 = createCheckbox();
   b1.position(100,350);

   n1 = createElement("h3");
   n1.html("Online Transaction");
   n1.position(130,330);

   b2 = createCheckbox();
   b2.position(100,380);

   n2 = createElement("h3");
   n2.html("Cash on Delivery");
   n2.position(130,360);

   b4 = createCheckbox();
   b4.position(100,410);

   n3 = createElement("h3");
   n3.html("Cheque");
   n3.position(130,390);

   proceed.show();
}
function alertbox(){
    if(state===1){
        alert1 = alert("The Shipping Of the Goods wouldbe done in 15 days. Hope you like our service. Thank You!");
        alert1.position(displayWidth/2,displayHeight/2);
    } 
}
function stateChange(){
    state=1;
}


