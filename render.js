const electron = require('electron')
const {remote} = electron
const {Menu} = remote
const {ipcRenderer} = electron

// sets up our menu bar @ top!
const menu = Menu.buildFromTemplate(
  [
    {
      label: 'Electron',
      submenu:  [
        {
          label: 'About Electron',
          click: function(){
            console.log("click");
            ipcRenderer.send("hello", "Some data");
          }
        }
      ]
    }
  ]
)
window.$ = window.jQuery = require("./bower_components/jquery/dist/jquery.js");
$('#intro').click(function(){
  // ipcRenderer.send('intro');
  $.ajax({
    method: "get",
    url: "http://pokeapi.co/api/v2/pokemon/"+$('#pokeindex').val(),
    success:function(data){
      console.log(data)
      $('.pokemons').append(
        '<img src='+data.sprites.front_shiny+'>'
      )
    }
  }
  );
  console.log('intro!')
})

$('#awesome').click(function(){
  // ipcRenderer.send('intro');
  $.ajax({
    method: "get",
    url: "http://localhost:3000/api/v1/auctions",
    dataType: "json",
    success:function(data){
      console.log(data)
      //$('.auction').text(
        //data.auctions
      //)
      for (let auction of data.auctions){
         console.log(auction.product_name)
      }
    }
  }
  );
  console.log('intro!')
})

Menu.setApplicationMenu(menu)

