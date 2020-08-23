/*
    let timeout =  0;
    //search 
let search=(value)=>{
  if(value.length!==0){
if(timeout) clearTimeout(timeout);

timeout = setTimeout(() => {
  
  let search=axios.get('https://i4jihdlx4gjr0iuaum-rbei-njs-forum.cfapps.us10.hana.ondemand.com/search?search='+value);
  search.then((result)=>{
    console.log('this is results',result)
    this.setState({session:result.data})
    
  }).catch((e)=>{
    console.log('error')
    this.setState({session:[]})
  })
  console.log(value)
}, 600);
}
else {console.log('else')
this.reset()
}
}
*/