window.addEventListener('DOMContentLoaded', function () {
    
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    const newsone = document.getElementById("news1");
    const magazineone = document.getElementById("magazine1");
    const newstwo = document.getElementById("news2");
    const magazinetwo = document.getElementById("magazine2");
    const newsthree = document.getElementById("news3");
    const magazinethree = document.getElementById("magazine3");
    const newsfour = document.getElementById("news4");
    const magazinefour = document.getElementById("magazine4");

    let arr = [{news : "This proprty Company Ups the Ante with Luxury and Sustainability" , magazine : "sunset Magazine|August 13,2021",
news2 : "Mike Meldman is one of the most infulential real-estate moguls in the country thanks to his luxurioous live-in resorts, which became irrestibel to the rich.",
 magazine2 : "Business Inside|June4, 2021", news3: "Where Sun, Sand and Splendor Are Still to Be Discovered", magazine3 :"New York Times|June 9,2021", 
 news4:"Theres a real bu-in for resort communities offering amusement and amenities", magazine4 :"Luxury Magazine|Spring/Summer 2021"
}, 
{
    news : "The Blue chip Carabioan Island Hopes to Dethrone st.barts" , magazine : "New York Post|April 5,2021",
news2 : "No Longer Waiting For Retirement",
 magazine2 : "New York Times|March,2021", news3: "Golf and Pickball are Having a Love Affair", magazine3 :"New York Times|March 9,2021", 
 news4:"For Many, the pandamic Has Led to the discovery of Golf", magazine4 :"New York Times|March 22,2021"
},
{
    news : "Celebrities Kepp  Flocking to Discovery Resorts During Pandamic" , magazine : "Elle Decor|September 2020",
news2 : "Green Golf Homes in Five Destinations",
 magazine2 : "New York Times|11 September,2020", news3: "Bring Ypur Clubs and Kids", magazine3 :"New York Times|Sepetember 9,2021", 
 news4:"Billionare Barn Debuts at Quant 850-acre Silo Ridge Field Club", magazine4 :"Forbes|August,2020"
}, 
{
    news : "How He Developed Worlds Most Exclusive Private Clubs" , magazine : "CSQ|June,2017",
news2 : "U.S. Golf Communities for the Love of the Game",
 magazine2 : "Mansion Global|Apri;,2020", news3: "A Rockwellian Lifestyle at Silo Ridge", magazine3 :"Quest Magazine|April,2020", 
 news4:"Thinking of Golf in Retirement?", magazine4 :"New York Times|March,2020"
},
{
    news : "Most Influential Developers" , magazine : "Global Inc.|January,2020",
news2 : "Lokking Beyond the Golf Course",
 magazine2 : "New York Times|March.2019", news3: "Star Studded Madison Club Invitation", magazine3 :"Forbes|January 9,2019", 
 news4:"Movable Feasts(Silo Ridge)", magazine4 :"Golf Magazine|July3,2019"
}]

    let count = 0;
    leftButton.addEventListener('click', function () {
        if(count>0) {
            count = count-1
            newsone.innerHTML = arr[count].news
            magazineone.innerHTML = arr[count].magazine
            newstwo.innerHTML = arr[count].news2
            magazinetwo.innerHTML = arr[count].magazine2
            newsthree.innerHTML = arr[count].news3
            magazinethree.innerHTML = arr[count].magazine3
            newsfour.innerHTML = arr[count].news4
            magazinefour.innerHTML = arr[count].magazine4
        }      
    })

    rightButton.addEventListener('click', function () {
            if(count < 5) {
            count = count + 1
            newsone.innerHTML = arr[count].news
            magazineone.innerHTML = arr[count].magazine
            newstwo.innerHTML = arr[count].news2
            magazinetwo.innerHTML = arr[count].magazine2
            newsthree.innerHTML = arr[count].news3
            magazinethree.innerHTML = arr[count].magazine3
            newsfour.innerHTML = arr[count].news4
            magazinefour.innerHTML = arr[count].magazine4
            }
            console.log("right button count",count)
    })



})

window.addEventListener('DOMContentLoaded', function () {
    
    // const prevButton = document.getElementById("prev");
    const prevButton = document.getElementById("left1");
    // const nextButton = document.getElementById("next");
    const nextButton = document.getElementById("right1");

    const newsheading = document.getElementById("newsHeading");
    const newsdetail = document.getElementById("newsDetail");
    // var newsimage = document.getElementById("newsImage");

    let newarr = [
        { newss:"Discovery's newest Postal in Kauai",
        detail:"Discovery land company is excited to annpuce our 25th residential club community in on the majestic North Sore of Kauai",
        images:'https://dxaurk9yhilm4.cloudfront.net/images/8790/DJI_0265_RET_2_210405_191033_8cfe90628771654de81065d52a5bfbcf.jpg'

    },
    {
        newss:"James Island Discovery's News Property",
        detail:"Discovery Land company is excited to aanounce our 24th private luxury residential communit.James Island and Golf Club",
        images:'https://dxaurk9yhilm4.cloudfront.net/images/7003/HERO_1920_200615_181847_8cfe90628771654de81065d52a5bfbcf.jpg',
    },
    {
        newss:"CostaTerra Discovery's 23rd property",
        detail:"Discovery Land Company, the world's leading developer of luxury private residential communities",
        images:'https://dxaurk9yhilm4.cloudfront.net/images/523/CostaTerra1-copy_8cfe90628771654de81065d52a5bfbcf.jpg',
    }]


    let count = 0;
    prevButton.addEventListener('click', function () {
        if(count>0) {
            count = count-1
            newsheading.innerHTML = newarr[count].newss
            newsdetail.innerHTML = newarr[count].detail
            // newsimage.innerHTML = newarr[count].images
           
        }      
    })

    nextButton.addEventListener('click', function () {
            if(count < 3) {
            count = count + 1
            newsheading.innerHTML = newarr[count].newss
            newsdetail.innerHTML = newarr[count].detail
            // newsimage.innerHTML = newarr[count].images
            
            }
    })

})