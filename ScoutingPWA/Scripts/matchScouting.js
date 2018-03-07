const username = window.location.hash.substring(1) || 'Anonymous Dolphin'
//MATCHINFO
      //CompetitionDefintion
          /* var Competition = document.getElementById("nickName").value;

          function updateComp() {
            Competition = document.getElementById("nickName").value;
            console.log(Competition);
          }

          //document.getElementById("whatComp").addEventListener("click",updateComp);

      //MatchNum
      var MatchNumber = document.getElementById("matchNum").value;

      function updateMatchNum() {
        MatchNumber = document.getElementById("matchNum").value;
        console.log(MatchNumber);
      }

      //document.getElementById("matchNum").addEventListener("click",updateMatchNum);

      //TeamNum
      var TeamNumber = document.getElementById("pick_Team").value;

      function updateTeamNum() {
        TeamNumber = document.getElementById("pick_Team").value;
        console.log(TeamNumber);
      }

      //document.getElementById("pick_Team").addEventListener("click",updateTeamNum);

      //AllianceColorDefinition
            var AllianceColor = document.getElementById("pick_Alliance").value;

            function updateColor() {
              AllianceColor = document.getElementById("pick_Alliance").value;
              console.log(AllianceColor);
            }

            //document.getElementById("pick_Alliance").addEventListener("click",updateColor);

//AUTO

        //StartPosition

            function updateStartPos() {

              var StartPosition = document.querySelector('input[name="startPos"]:checked').id;
              console.log(StartPosition);
            }

            //document.getElementById("start_Pos").addEventListener("click",updateStartPos);

        //DoesMove

              function updateDoesMove() {

                var DoesMove = document.querySelector('input[name="doesMove"]:checked').id;
                console.log(DoesMove);
              }

              //document.getElementById("does_Move").addEventListener("click",updateDoesMove);

          //MSwitchCountAuto
          var SwitchCountA = document.getElementById("switchCountA").value;

          function updateSwitchCountA() {
            SwitchCountA = document.getElementById("switchCountA").value;
            console.log(SwitchCountA);
          }

          //document.getElementById("switchCountA").addEventListener("click",updateSwitchCountA);

          //SwitchSpeed

                function updateHowFastSwitchA() {

                  var SwitchASpeed = document.querySelector('input[name="howFastSwitchA"]:checked').id;
                  console.log(SwitchASpeed);
                }

                //document.getElementById("how_FastSwitchA").addEventListener("click",updateHowFastSwitchA);


          //ScaleCountAuto
          var ScaleCountA = document.getElementById("scaleCountA").value;

          function updateScaleCountA() {
            ScaleCountA = document.getElementById("scaleCountA").value;
            console.log(ScaleCountA);
          }

          //document.getElementById("scaleCountA").addEventListener("click",updateScaleCountA);

          //ScaleSpeed

                function updateHowFastScaleA() {

                  var ScaleASpeed = document.querySelector('input[name="howFastScaleA"]:checked').id;
                  console.log(ScaleASpeed);
                }

                //document.getElementById("how_FastScaleA").addEventListener("click",updateHowFastScaleA);

        //FoulsA

              function updateFoulsA() {

                var FoulsA = document.querySelector('input[name="doesFoulA"]:checked').id;
                console.log(FoulsA);
              }

              //document.getElementById("does_FoulA").addEventListener("click",updateFoulsA);

//TeleOP

              //canHighGoal

              function updateCanHighGoal() {

                var HighGoalBool = document.querySelector('input[name="canHighGoal"]:checked').id;
                console.log(HighGoalBool);
              }

              //document.getElementById("can_HighGoal").addEventListener("click",updateCanHighGoal);

              //doesDefend

              function updateDoesDefend() {

                var doesDefendBool = document.querySelector('input[name="doesDefend"]:checked').id;
                console.log(doesDefendBool);
              }

              //document.getElementById("does_defend").addEventListener("click",updateDoesDefend);

              //placeMethod

              var placeMethod = document.getElementById("placeMethod").value;

              function updatePlaceMethod() {
                placeMethod = document.getElementById("placeMethod").value;
                console.log(placeMethod);
              }

              //document.getElementById("placeMethod").addEventListener("click",updatePlaceMethod);

              //SwitchCountTeleop
              var SwitchCountT = document.getElementById("switchCountT").value;

              function updateSwitchCountT() {
                SwitchCountT = document.getElementById("switchCountT").value;
                console.log(SwitchCountT);
              }

              //document.getElementById("switchCountT").addEventListener("click",updateSwitchCountT);

              //ScaleCountTeleop
              var ScaleCountT = document.getElementById("scaleCountT").value;

              function updateScaleCountT() {
                ScaleCountT = document.getElementById("scaleCountT").value;
                console.log(ScaleCountT);
              }

              //document.getElementById("scaleCountT").addEventListener("click",updateScaleCountT);

              //ExchangeCountTeleop
              var ExchangeCountT = document.getElementById("exchangeCountT").value;

              function updateExchangeCountT() {
                ExchangeCountT = document.getElementById("exchangeCountT").value;
                console.log(ExchangeCountT);
              }

              //document.getElementById("exchangeCountT").addEventListener("click",updateExchangeCountT);

              //powerups plz idk how to use a checkbox

//Endgame

//canPark

function updateCanPark() {

  var canParkBool = document.querySelector('input[name="canPark"]:checked').id;
  console.log(canParkBool);
}

//document.getElementById("can_Park").addEventListener("click",updateCanPark);

//doesClimb

function updateDoesClimb() {

  var doesClimbBool = document.querySelector('input[name="doesClimb"]:checked').id;
  console.log(doesClimbBool);
}

//document.getElementById("does_Climb").addEventListener("click",updateDoesClimb);

//doesClimb

function updateDoesClimbWell () {

  var doesClimbWell = document.querySelector('input[name="doesClimbWell"]:checked').id;
  console.log(doesClimbWell);
}

//document.getElementById("does_ClimbWell").addEventListener("click",updateDoesClimbWell);

//canSupport

function updateCanSupport () {

  var canSupport = document.querySelector('input[name="canSupport"]:checked').id;
  console.log(canSupport);
}

//document.getElementById("can_Support").addEventListener("click",updateCanSupport);

//canSupport

function updateCanCarry () {

  var canCarry = document.querySelector('input[name="canCarry"]:checked').id;
  console.log(canCarry);
}

//document.getElementById("can_Carry").addEventListener("click",updateCanCarry);

//canSupport

function updatedoesFoulT () {

  var doesFoulT = document.querySelector('input[name="doesFoulT"]:checked').id;
  console.log(doesFoulT);
}

//document.getElementById("does_FoulT").addEventListener("click",updatedoesFoulT);

//Notes

var Notes = document.getElementById("Notes").value;

function updateNotes() {
  Notes = document.getElementById("Notes").value;
  console.log(Notes);
}

//document.getElementById("Notes").addEventListener("click",updateNotes);

/*document.getElementById("_Submit").addEventListener("click", function () {
  updateComp();
  updateMatchNum();
  updateTeamNum();
  updateColor();
  updateStartPos();
  updateDoesMove();
  updateSwitchCountA();
  updateHowFastSwitchA();
  updateScaleCountA();
  updateHowFastScaleA();
  updateCanHighGoal();
  updateDoesDefend();
  updatePlaceMethod();
  updateSwitchCountT();
  updateScaleCountT();
  updateExchangeCountT();
  updateCanPark();
  updateDoesClimb();
  updateDoesClimbWell();
  updateCanSupport();
  updateCanCarry();
  updatedoesFoulT();
  updateNotes();
  makeAPICall();

}
);
*/

 document.getElementById("Name").value = username;

function myFunction() {
  alert("That shore was a nice scouting form!\nThanks!");}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwOsD1XYy3rC5d1BpfIAlSE4nrM6ij00dHNqbVNbhB6572Kyts/exec'
 const form = document.forms['ScoutingInfo']
 form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => console.log('Success!', response))
   .catch(error => console.error('Error!', error.message))
   myFunction();
   window.location.reload();
 })
