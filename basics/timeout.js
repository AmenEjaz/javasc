
<script>
    const changeText=function(){
        document.querySelector('#heading').innerHTML='Java Script'
    }
   // addEventListener('click',changeText)
   
    const event= setTimeout(changeText,3000)
      //Selecting the button reverse the change
   document.querySelector('#stop').addEventListener('click', function(){
    console.log("change reversed")
    document.querySelector('#heading').innerHTML="Web Development"
   })
   
</script>
</html>