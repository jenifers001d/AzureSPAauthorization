const hsuan = document.getElementById('inbox');
accessToken = 'EwB4A8l6BAAURSN/FHlDW5xN74t6GzbtsBBeBUYAAeF2NlFvFRyOj7SoEvYDohnozpI%2bbvTSVddkKR67HoaHI4pWBdrgEb/DhAt0oUG5CWYHNN1ksg%2bgFq8gafM8FO6T3S3TzHH7dIQkK8iGeDKR24oUXn1FbkBAJqHKjzp/07vGBYZ1MRy6EBmb3RQzmJFZ%2bDDYeU8hnDGexjvxhMGgwm5tmJMLHEKv/BpMzUgt5Qa7NhlkrG/dMwml8OAy26Zg4O/d/EcN%2bQzxkF0p7JVZ1YkoJNkSpzSnUM/1feLDqYUmRlsrHesr35auCi0/xwGdCasg8Ni2ZXFXjIsYzQcr6FsMI69CrHOJnUW4sYg6ZFe12Iqyeke0M%2bfwPcaxRDMDZgAACDxLECULKodZSALo/3mCmlenYygzWcdhUEimEbu3ghSRvcxbaA%2b275O1EDhJ3XZIhHdvXxfc8MbVS65B9syUR9Q0z1XakSzQZD/T7NcEJ09djBfZCrJLnBM8nq/li7SlLo1avVgbbfgUEy3a5lnjljQU%2bzUZIxM6rHFS62m0ZcqloFDETIxSYWU31Om1To0sMeAKBdjliSlxRkmGr9lpLklrFzPtsJCZSLTgdIp0mpO5z9gJ1T/wWM%2b8M8XM9BZAoi03SoYzId5T/NVJwgwviajWiey7pBBbWUz0kL3%2btwBXoevBG2CUkLd78/f3O38/7vUoI6HwNwvG5WQooSgyLTxfwwSup/nTFGL02QSn1b/UKvvpcjyT2TmbZBKi2488UP6%2bPC/X%2bslPwzJDhBqVNz%2bIOxDrk2F6%2bIU%2b2J9BtyPQx/DcMNwIBWelmPNlTZCWCJ2sdobC2NRJ3Y0YR5o82iqhK7ljMpLDSQUqmJK0Al3M9DXl27A45/hiUlv3dIkny/RniBg7vum763iehgt1IBuEYQMj51jTh625Z2b7kXMFa4SP1/06F3oj9tVpPbvjT1%2bHveIuNR02HSiqTUrMN0VofO5ZlA%2bCDoynvAGsrt1%2b9/3qaz25DnfH/HCjgRUPCrNTdS8SlbzSEHLIlg/wp/TAgakLFOYEgGrS3m1bfe04ShzFE4olWSLNvL8L9mPkKvzojIhiuyEPJqVDwqCPjh5ezOzV8PChN4rNbsZHr/MADzc%2b9mODOxTzrgQxvSbyn0OeyLZVTMc5fYoFVIEE3zzqBY8C';






function getUserInboxMessages() {
    
        var client = MicrosoftGraph.Client.init({
          authProvider: (done) => {
            // Just return the token
            done(null, accessToken);
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