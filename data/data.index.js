(function () {
    var keys = ["authorName","from","id","profile","subject","timestamp"];
    var records = [["Mystic Wolf","thecherokees@...",104106,"mysticwolf_632","Re: [PC-Recipes] Copy of Files Will NOT be sent to anyone",1571417578],["Darlene","dsharple@...",104105,"spiritdancer1255","Re: [PC-Recipes] Glad to Do My Part",1571403263],["Froghollow@nycap.rr.com","FROGHOLLOW@...",104104,"nana42kydz","Glad to Do My Part",1571398832],["r.wilkinson48@gmail.com","R.Wilkinson48@...",104103,"desertrose4893","Yahoo changes already begun?",1571394028],["r.wilkinson48@gmail.com","R.Wilkinson48@...",104102,"desertrose4893","RE: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571393254],["Darlene","dsharple@...",104101,"spiritdancer1255","Re: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571358676],["Marlene","chiwowwow@...",104100,"chiwowwow","RE: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571355632],["Darlene","dsharple@...",104099,"spiritdancer1255","Re: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571354842],["","omgicook@...",104098,"frustrated1@att.net","RE: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571314691],["","hilobarbie@...",104097,"hilobarbie","Re: ATTN RAY - Re: [PC-Recipes] Is the group moving?",1571334967],["Darlene","dsharple@...",104096,"spiritdancer1255","Re: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571353126],["kalbertsky","kalbertsky@...",104095,"randleis11","Re: [PC-Recipes] WE ARE MOVING! IMPORTANT PLEASE READ!",1571352768],["Darlene","dsharple@...",104094,"spiritdancer1255","Re: [PC-Recipes] Re: Step Up - Was: WE ARE MOVING! IMPORTANT PLEASE READ!",1571352196],["impqlr ru2","impqlr.ru2@...",104093,"david_on_the_road","Re: [PC-Recipes] Re: Step Up - Was: WE ARE MOVING! IMPORTANT PLEASE READ!",1571352088],["Darlene","dsharple@...",104092,"spiritdancer1255","Re: [PC-Recipes] Re: Step Up - Was: WE ARE MOVING! IMPORTANT PLEASE READ!",1571352128]];
    var result = [];
    for (var i=0; i < records.length; i++) {
        var record = {};
        for (var j=0; j < keys.length; j++) {
            record[keys[j]] = records[i][j];
        }
        result.push(record);
    }
    dataLoaded(result);
})();