const hsuan = document.getElementById('inbox');






function getUserInboxMessages() {
    console.log(localStorage.accessToken);
    
        var client = MicrosoftGraph.Client.init({
          authProvider: (done) => {
            // Just return the token
            done(null, localStorage.accessToken);
          }
        });
  
        // Get the 10 newest messages
        client
          .api('/me/mailfolders/inbox/messages')
          .top(10)
          .select('subject,from,receivedDateTime,bodyPreview')
          .orderby('receivedDateTime DESC')
          .get((err, res) => {
            if (err) {
              console.log('error');
            } else {
              console.log(res.value);
              
            }
          });
      } 
   
  


  hsuan.addEventListener('click',getUserInboxMessages,false);