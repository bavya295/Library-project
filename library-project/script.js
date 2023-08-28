"use strict"
let book=[
    {
        name:"C++",
        author:"Bjarne Stroustrup",
    },
    {
        name:"Java",
        author:"James Gosling",
    },
    {
        name:"Digital Signal Processing",
        author:"John G Proakis",
    },
    {
        name:"Embedded C",
        author:"Bruce Powel Douglass",
    },
    {
        name:"Wave Guides",
        author:"C. Yeh",
    },
    {
        name:"Data Structures",
        author:"Alfred Aho",
    },
    {
        name:"Titanic",
        author:"James Cameron",
    },
    {
        name:"The Lion King",
        author:"Barry Johnson",
    },
    {
        name:"Barbie",
        author:"Ruth Handler",
    },
    {
        name:"Ramayanam",
        author:"Kambar",
    },
    {
        name:"Boundaries",
        author:"Henry Cloud",
    },
    {
        name:"Jungle Book",
        author:"Rudyard Kipling",
    },
    
];
function createDiv(input)
{
   
    const divAllotment=document.getElementById("sel-con");
    divAllotment.innerHTML="Name : "+book[input].name+"<br> Author: "+book[input].author;
}
function description()
{
    
       const cplus=document.getElementById("c++");
       const java=document.getElementById("java");
       const dsp=document.getElementById("dsp");
       const c=document.getElementById("c");
       const wg=document.getElementById("wg");
       const ds=document.getElementById("ds");
       const titanic=document.getElementById("titanic");
       const lk=document.getElementById("lk");
       const barbie=document.getElementById("barbie");
       const ramayanam=document.getElementById("ramayanam");
       const bound=document.getElementById("bound");
       const jb=document.getElementById("jb");

       const arr=[cplus,java,dsp,c,wg,ds,titanic,lk,barbie,ramayanam,bound,jb];
       for(let i=0;i<arr.length;i++)
       {
        arr[i].addEventListener("click",function(){
            createDiv(i)
        });
       }
}


function add0(){
    const division=document.createElement("p");
    division.setAttribute('id',"zero");
   division.innerHTML=book[0].name+"<br>";
  document.getElementById("cart-display").appendChild(division);
   
}
function add1(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"one");
   division1.innerHTML=book[1].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add2(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"two");
   division1.innerHTML=book[2].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}

function add3(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"three");
   division1.innerHTML=book[3].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add4(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"four");
   division1.innerHTML=book[4].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add5(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"five");
   division1.innerHTML=book[5].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add6(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"six");
   division1.innerHTML=book[6].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add7(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"seven");
   division1.innerHTML=book[7].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add8(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"eight");
   division1.innerHTML=book[8].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add9(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"nine");
   division1.innerHTML=book[9].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add10(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"ten");
   division1.innerHTML=book[10].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function add11(){
    const division1=document.createElement("p");
    division1.setAttribute('id',"eleven");
   division1.innerHTML=book[11].name+"<br>";
  document.getElementById("cart-display").appendChild(division1);
   
}
function del0()
{
const del=document.getElementById("zero");
del.remove();
 }
    function del1()
    {
        const del=document.getElementById("one");
        del.remove();
        }
        function del2()
        {
            const del=document.getElementById("two");
            del.remove();
            }
            function del3()
            {
                const del=document.getElementById("three");
                del.remove();
                }
                function del4()
                {
                    const del=document.getElementById("four");
                    del.remove();
                    }
   function del5()
        {
        const del=document.getElementById("five");
                        del.remove();
                     }                                   
                     function del6()
                     {
                     const del=document.getElementById("six");
                     del.remove();
                      }
                      function del7()
                      {
                      const del=document.getElementById("seven");
                      del.remove();
                       }
                       function del8()
                       {
                       const del=document.getElementById("eight");
                       del.remove();
                        }
                        function del9()
                     {
                     const del=document.getElementById("nine");
                     del.remove();
                      }
                      function del10()
                     {
                     const del=document.getElementById("ten");
                     del.remove();
                      }
                      function del11()
                     {
                     const del=document.getElementById("eleven");
                     del.remove();
                      }
function getRate(){
    let feedback=prompt("your valuable feedback please!");
    alert("Thankyou so much");
        const ratediv= document.createElement("p");
      ratediv.setAttribute('id',"des");
      ratediv.style.color="black";
      ratediv.style.margin = "30px";
  ratediv.style.fontSize="50px";
       ratediv.textContent=feedback;
      document.getElementById("rate").appendChild(ratediv);
      }                     


