//-----All 5 options checked
  if(blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
        for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//--4 options checkd one of which is blue
  else if  (blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//----Red is not checked ^^
else if     (blue.is(":checked") && green.is(":checked") && yellow.is(":checked")&& red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//-----Orange is not checked^^^
else if    (blue.is(":checked") && green.is(":checked") && orange.is(":checked")&& red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//-------- Yellow is not checked ^^^^
else if    (blue.is(":checked") && red.is(":checked") && orange.is(":checked")&& yellow.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"||array[i].color==="yellow"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//---------Green is not checked
else if    (green.is(":checked") && red.is(":checked") && orange.is(":checked")&& yellow.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="red"||array[i].color==="orange"||array[i].color==="yellow"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//------Blue is not checked^^^^^
//---------------^^^^^^Above section is used when 4 boxes are checked
//----------------Below is the section for when 3 off the options are checked

else if    (blue.is(":checked") && green.is(":checked") && yellow.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//---------------Blue, green and yellow are checked^^^^
else if    (blue.is(":checked") && green.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//---------------Blue green and orange are checked^^^^
else if    (blue.is(":checked") && green.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//--------------Blue, green and red are checked^^^^
else if    (blue.is(":checked") && yellow.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//------------Blue, yellow and red are checked^^^^^
else if    (blue.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//------------Blue, yellow and orange are checked^^^^
else if    (blue.is(":checked") && orange.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//----------Blue, Orange and red are checked^^^^^^^

else if    (green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

else if    (green.is(":checked") && yellow.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

else if    (green.is(":checked") && orange.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

else if    (yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}





//-----------above code is used for when selecting three schools at a time
//--------Below is the code for selecting two schools at a time

  else if   (blue.is(":checked") && green.is(":checked")){
              for (var i=0;i<array.length;i++){
              if(array[i].color==="blue"||array[i].color==="green"){
              array[i].setVisible(true)
              } else { array[i].setVisible(false)}
              }}
//--------- Blue and Green are checked^^^^^^^^
  else if   (blue.is(":checked") && yellow.is(":checked")){
              for (var i=0;i<array.length;i++){
              if(array[i].color==="blue"||array[i].color==="yellow"){
              array[i].setVisible(true)
              } else { array[i].setVisible(false)}
              }}
//---------Blue and yellow are checked^^^^^^^
  else if   (blue.is(":checked")&& orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//----------Blue and orange are checked^^^^^^^^^
else if   (blue.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//---------Blue and red are checked ^^^^^^^^
else if   (green.is(":checked")&& yellow.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"||array[i].color==="yellow"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
        }}
//---------Green and yellow are checked^^^^^^^
else if   (green.is(":checked")&& orange.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"||array[i].color==="orange"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//---------Green and orange are checked^^^^^^^
else if   (green.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//--------Green and Red are checked^^^^^^^
else if   (yellow.is(":checked")&& orange.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"||array[i].color==="orange"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//--------Yellow and Orange are checked^^^^^
else if   (yellow.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//-----------Yellow and Red are checked^^^^^^
else if   (orange.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="orange"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//---------Orange and Red are checked
//---------Above is the code for when two checkboxes are checked
//--------Below is the code for when one checkbox is checked
else if   (blue.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (green.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (yellow.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (orange.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else      {
          for (var i=0;i<array.length;i++){
          array[i].setVisible(true)
          }}
