// // const express=require("express");
// // const axios=require('axios');
// // const cheerio= require("cheerio");
// // const request=require("request");
// // const app=express();
// // // function twitterDownload(url){
// // //     return new Promise(async (resolve,reject)=>{
// // //         const baseUrl="https://sss";
// // //         const finalUrl=baseUrl+url.split("https://")[1];
// // //         const {data}=await axios.get(finalUrl);
// // //         const $=cheerio.load(data);
// // //         let links=$('div[class=result_overlay]');
// // //         console.log(links.length,links.html());
        
// // // })
// // // };
// // //twitterDownload("https://twitter.com/invincible667/status/1583679637909295104?t=kxGF7YNH3a6q2TneiRWWlg&s=19");
// // app.get("/",function(req,res){
// //     let link=req.query.url;
// //     //https://twitter.com/invincible667/status/1583679637909295104?t=kxGF7YNH3a6q2TneiRWWlg&s=19
// //     let url='https://www.sss'+link.split("https://")[1];
// //     request(url,function(err,response,html){
// //         if(!err){
// //             //const {data}=await axios.get(url);
// //             var $=cheerio.load(html);
// //             var prediction=$.html();
// //             console.log("hello",prediction);
// //             var json={
// //                 link:url,
// //                 prediction:prediction
// //             };
// //             //console.log(json);
// //             return res.send(json);
// //         }
// //     })
// // });

// // const port=process.env.port || 8080;
// // app.listen(port,()=>{
// //     console.log("listening on "+port);
// // });

// // const axios=require("axios");
// // const { response } = require("express");
// // const express=require("express");
// // const app=express();
// // app.get("/",async function (req,res){
// //     // const {data}=await axios.get("https://twitter.com/invincible667/status/1583679637909295104?t=kxGF7YNH3a6q2TneiRWWlg&s=19");
// //     // console.log(data);
// //     // res.send(data);

// //     const r = await axios({
// //         url:"https://twitter.com/invincible667/status/1583679637909295104?t=kxGF7YNH3a6q2TneiRWWlg&s=19" ,
// //         headers: {
// //             accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
// //             "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
// //             "cache-control": "max-age=0",
// //             "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
// //             "sec-ch-ua-mobile": "?1",
// //             "sec-fetch-dest": "document",
// //             "sec-fetch-mode": "navigate",
// //             "sec-fetch-site": "none",
// //             "sec-fetch-user": "?1",
// //             "upgrade-insecure-requests": "1",
// //             // cookie: 'ig_did=305179C0-CE28-4DCD-847A-2F28A98B7DBF; ig_nrcb=1; mid=YQBN3wAEAAGfSSDsZYS9nf2a5MHO; csrftoken=KItbBYAsObQgmJU2CsfqfiRFtk8JXwgm; sessionid=29386738134%3A8NwzjrA3jruVB4%3A23; ds_user_id=29386738134; fbm_124024574287414=base_domain=.instagram.com; shbid="18377,29386738134,1674226938:01f7d2db0f9c512fc79336716e1cf02623129a7897f5ccb8d878999be86c0e010bb77920"; shbts="1642690938,29386738134,1674226938:01f73e613a6030436ef5f2cea6c7402b82a96c1a61f905b746d3951f49a7f2d2eab6d399"; fbsr_124024574287414=Ps5NinG2AjNMV4W927e_vwMrZVLCltfcbWGS3B5S3to.eyJ1c2VyX2lkIjoiMTAwMDA5NDY1ODIwODQyIiwiY29kZSI6IkFRQlZrOVljMF9DS24tVEpqZ21VWjdPT2dOelFVdkJyLXUzaENSOGR0RzZrbVQxdWszYUMtVDZJeV9QWjBCc1lCcTBmZkxNZmsyUVlMM0hMVGVhQ1pxb1RRQzdsOE9BYlZKdmlvTU5GZ0dncVdxZVQzNV9JM3ZOV0pCR3BsWXVQX0dGMDJMMEt2aTk4WXpxNFhrVWhaVUNRanpPcUthN01aOVdZaVc5SVFzZjRxU3FQTXUzVXlwRWVsMXQ4TjJkV2ZHSnNFYXRsNXBIRXBGMlJSSWljY0F1c3BTZHNPdWFZSThCeV9uRFpjQklUUFk0RzNJY0NiYnFtdXNFZXY5ZUlsMVlZQ0E0bE5ROWxyeGtZdU1IM05scWRFTmtlQjNwWVRjRGlsZDZtekNpNFgzcnZIZUtUMFVFNkJFYVlURFpCTmhaOTd5TmJWT1R1ZENWdk84UlFoYjV2Iiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQU0zaHBjU2lKUm50WWcyTm0xamhlUlFkd3VCeExaQ1V0UjV5endGSkdVQVpDbERGRThwdXdaQXRPMkxtQnMxNjNiVGQzZERhRVl3UGRiWHY1bE5PNEZaQVVoYUpBZDBIcTQyWkN5OVdicXh4blVnZml5MHBETm9rMXlQVzlUNHpaQVVsbHVGcmZ4OFFhRlRnZG9wRTBFMDBMaGg3OVhuWkN1QldteWZ0MlpBY1NYVUpMRjNWNzUwWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY0MjY5NDAyM30; rur="VLL,29386738134,1674231548:01f7816fe2a5156acdb86c5eff76c0ae83ac053646c44ccc592f854fb9d24a18bfcfc3ac"',
// //             cookie: '_ga=GA1.2.869012924.1648276148; _gid=GA1.2.31639623.1666451611;at_check=true; att=1-plUQTcSavmydkt3V7IhMbCji7X1g7AQgMcgTUle4; auth_token=25f67903b1dcd1e398e4cc89d532bbf033b86024; ct0=203d708dd04378c75f7016b8e6047d17e4d420605d5a1ef59d5c0b5dc0b01f35b80cd43f08d49fe4c5e5a6b9ebc67268ba375c4b5a7ad964d79fe4b3e0ac0f82605d1afe66a4f5653fff14dedcb8a87b; kdt=ExTbdmfT3QOWsH59S8C5IZuYMq4ccovpz5u2JskU; g_state={"i_l":0};at_check=true;_gid=GA1.2.31639623.1666451611;personalization_id="v1_gUEnrqOi6um68lvFmakwfQ==" ; twid=u%3D1489243584259715072,guest_id=v1%3A166048321571163084,guest_id_ads=v1%3A166048321571163084,guest_id_marketing=v1%3A166048321571163084,_ga=GA1.2.869012924.1648276148 ',
// //         },
// //         referrerPolicy: "strict-origin-when-cross-origin",
// //         body: null,
// //         mode: "cors",
// //         method: "GET",
// //     });
// //     console.log(r.data);
// //     res.send(r.data);
// // })
// // app.listen(8080);
// // (async ()=>{
// //     const {data}=await axios.get("https://twitter.com/invincible667/status/1583679637909295104?t=kxGF7YNH3a6q2TneiRWWlg&s=19");
// //     console.log(data);
// // })();

const p=require("puppeteer");
const express=require("express");
const app=express();
const port = process.env.port || 8080;

app.get("/",async function(req,res){
    try{
    const url=req.query.url;
    console.log(url);
    const browser=await p.launch({headless:true
    });
    console.log(await browser.userAgent());
   const page=await browser.newPage();
   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/107.0.5296.0 Safari/537.36')
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

// // app.listen(port,()=>{
// //     console.log(`listening on ${port}`);
// // })


// const p=require("puppeteer");
// const express=require("express");
// const app=express();

// app.get("/",async function(req,res){
//     const url=req.query.url;
//     const browser=await p.launch({headless:false});
//     const page=await browser.newPage();
//     const status=await page.goto("https://tweetpik.com/twitter-downloader",{timeout:0});
//     console.log(status.status);
//     await page.waitForSelector("form");
//     await page.$eval("form div[class=chakra-input__group] input[class=css-dlw9oh]",el=>el.value=url);
//     page.keyboard.press('Enter');
// })


// const port=process.env.port || 8080;

// app.listen(port,()=>{
//     console.log(`listening on ${port}`);
// })