class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');


  contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })

  //    contestantCountRef.on("value",()=>{
  //   contestantCount = data.val();
 //  })

  //jf contestantCountRef.on("value",(data)=>{
   //  contestantCount = data();
  // })
  }

  updateCount(count){
   database.ref("+1").update({
     contestantCount: count +1
 });

   database.ref("+1").update({
      contestantCount: 0
    });

    //database.ref("/").update({
   //   contestantCount: counts
    //});

   //não database("/").update({
//contestantCount = count
    //});
  }

 

 
}