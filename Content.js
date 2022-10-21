//make the text in centre. add bg
const generateHTML = (pageName) => {
    return `
    <div class='c'>
    <div class= '_404'>404</div>
    <div class='_1'>
    ${pageName} IS BLOCKED
    </div>
    <div class='_2'>
    GET BACK TO WORK
    </div>
    
    </div>`;
};

const generateSTYLING = () =>{
    return `<style>
    body {
        background: #33cc99;
        color: #fff;
        font-family: arial;
        max-height: 700px;
        overflow: hidden;
      }
      .c {
        text-align: center;
        display: block;
        position: relative;
        width: 80%;
        margin: 100px auto;
      }
      ._404 {
        text-align: center;
        display: block;
        position: relative;
        letter-spacing: 5px;
        font-size: 100px;
        line-height: 200%;
      }
      ._1 {
        text-align: center;
        display: block;
        position: relative;
        letter-spacing: 12px;
        font-size: 50px;
        line-height: 200%;
      }
      ._2 {
        text-align: center;
        display: block;
        position: relative;
        letter-spacing: 5px;
        font-size: 20px;
        line-height: 200%;
      }
      
      </style>`;
    
};


switch(window.location.hostname) {

    case "www.facebook.com": 
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("FACEBOOK");
    break;
    case "www.youtube.com": 
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("YOUTUBE");
    break;
    case "https://twitter.com/":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("TWITTER");
    break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("NETFLIX");
    break;
    case "www.discord.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("DISCORD");
    break;

}