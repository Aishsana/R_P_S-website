let computermove,result,random,playermove;
      let score =JSON.parse(localStorage.getItem('score'))|| {
        wins:0,
        losses:0,
        ties:0
      };

      updatescore();

      /*
      if(!score)       ||if(score==null)
      {
        wins:0,
        losses:0,
        ties:0
      }*/
      function playgame(playermove)
      {
        computermove=pickcomputermove();
        if(playermove=="rock")
        {
            if(computermove=='rock')
             {
              result='Tie';
            }
            else if(computermove=='paper')
            {
              result='You lose';
            }
            else
            {
              result='You Win';
            }
        }
        else if(playermove=="paper")
        {
             if(computermove=='rock')
              {
              result='You Win';}
              else if(computermove=='paper')
              {
              result='Tie';}
              else
              {
              result='You lose';}
        }
        else if(playermove=="scissor")
        {
          if(computermove=='rock')
          {
          result='You lose';}
          else if(computermove=='paper')
          {
          result='You Win';}
          else
          {
          result='Tie';}
        }
        if(result=='Tie'){
          score.ties+=1;
        }
        else if(result=='You lose'){
          score.losses+=1;
        }
        else if(result=='You Win'){
          score.wins+=1; 
        }
        localStorage.setItem('score',JSON.stringify(score));

        RESULT();

        choosed(playermove,computermove);

        updatescore();
        
        /*alert(`you choosed ${playermove}.computer choosed ${computermove}. ${result}
Wins:${score.wins},loosses:${score.loosses},Ties:${score.ties}`);*/
      }
      
     function RESULT()
     {
      document.querySelector('.js-Result').innerHTML=`${result}`;
     }

     function choosed(playermove,computermove)
     {
      document.querySelector('.js-choose').innerHTML=`you <img src="images/${playermove}-emoji.png" class="move-icon"> <img src="images/${computermove}-emoji.png" class="move-icon"> computer`;
     }

     function updatescore()
     {
      document.querySelector('.js-score').innerHTML=`Wins:${score.wins} losses:${score.losses} Ties:${score.ties}`;
     }


      function pickcomputermove()
      {
          random=Math.random();
          if(random>=0 && random<1/3)
          {
            return 'rock';
          }
          else if(random>=1/3 && random<2/3)
          {
            return 'paper';
          }
          else 
          {
            return 'scissor';
          }
      }