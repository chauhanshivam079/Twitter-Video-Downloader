const p=require("puppeteer");
const express=require("express");
const app=express();
const port = process.env.port || 8080;

app.get("/",async function(req,res){
    try{
    const url=req.query.url;
    console.log(url);
    const browser=await p.launch( { args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],});
    const page=await browser.newPage();
    await page.goto("https://ssstwitter.com/");
    await page.waitForSelector("input[id=main_page_text]");
    await page.type('input[id=main_page_text]',url);
    await page.click("button[id=submit]");
    await page.waitForSelector("div[class=result_overlay]");
    const result={
        response:false,
        dimensionsAvailable:0,
        type:"",
        urls:[],
    }
    const check=await page.$('div[class=result_overlay] h3') || "";
    if(check)
    {
       const p=await page.$eval('div[class=result_overlay] p',a=>a.textContent);
       if(p.includes("image")){
        res.send("{Give video/gifs link}");
       }
    }
    else{
        const check=await page.$('div[class=result_overlay] h2') || "";
        if(check){
        const aText = await page.evaluate(
            () => Array.from(
            document.querySelectorAll('div[class=result_overlay] a[href]'),
            a => a.textContent,
            )
      );
      if(aText[0].length===12){
        res.send({response:false,error:"Give Correct Url"});
        return;
      }
      if(aText[0].length===9){
            const ahrefs= await page.evaluate(
            () => Array.from(
            document.querySelectorAll('div[class=result_overlay] a[href]'),
            a => a.getAttribute('href'),
            )
        );
        result.response=true;
        result.type="gifs"
        result.dimensionsAvailable=ahrefs.length;
        result.urls.push(ahrefs[0]);
        res.send(result);
        console.log(result);
      }
      else{
            const ahrefs= await page.evaluate(
            () => Array.from(
            document.querySelectorAll('div[class=result_overlay] a[href]'),
            a => a.getAttribute('href'),
            )
        );
        result.response=true;
        result.type="video";
        result.dimensionsAvailable=ahrefs.length;
        for(let i=0;i<ahrefs.length;i++){
            result.urls.push({Dimension:aText[i].split("Download ")[1],url:ahrefs[i]});
        }
        res.send(result);
        console.log(result);
      }
    }
    }
    await browser.close();
}catch(err){
    res.send({response:false,error:err.message.split("` failed:")[1]});
}
})
app.listen(port,()=>{
    console.log(`listening on ${port}`);
});
