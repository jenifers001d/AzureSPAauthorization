const hsuan = document.getElementById('inbox');
accessToken = 'EwB4A8l6BAAURSN/FHlDW5xN74t6GzbtsBBeBUYAAc9wPkhtXewRRMqAaCyCEDX5FS88dFng9yptDarjLoH6KX8X6YnZxWrhb0LPIBvTjzrQa3vUisOK8mT01rr0TzibXAZpa07428oBngoyQnjLfqSN0LfatfDFQ%2bz4i9l2gAfvdYVHhTrEsXPotXZ9MHIcfNE1EVZzv6kPUqXoGbf%2bFQUaoarlYAXq9MRJsvafQZLWYIlrPX30gcKPv8YxFRmwup/jigvMEKNq/v/y7mgDRjI%2beR6LmAPz7iXskStgAMzYLrAv8XFmXxbWVpYSR5ol0U0oESHRb75P79Zql8mRzjWEUfh0LCtQ5kJnwrD%2bWs5m4GNGtGV5R54iY0S887QDZgAACJATzMgrXPWbSAL7oBFf%2bN8CZDVd07bKTwXPwQXlbjngjHzT51lBoiVGcdJUJfUUCw0beA9B0XOqL9%2baKD8Uezo%2bsYub1WApe6/ePgAUTWzUHIJt5ytD297lZrJKDj0S4M0oG976e5Cbq0DithdkfgqfGimLmd84NIIWAIKqGZ2giLk64fmI6jAORkt2oWHq5jm3dQDOQlNRUD8yMNwS/cDyD3P2ZSQbivDp7XzJoxX9kgcLuWdBNdRb8Wq8hMiiD1Ex4WTx4yrmxDzQV6B68CPhlv008AnDzEvyGF72rS%2bD4wGgj9bzI4HqZks6cOSUYXabaQw8TLnJB7%2bucz7g4txOfKvoOiXbXow11or%2bod4jGoDAiE80R5LQPQhFOxCLoXA%2bFirXybwtRIDsp%2bqmqfqTrkQDaJvR5wXwGzvcmKVVwXQr/uSG2m6G9lv84c7ThKlZGDcZTgocVFZWCt2mlHqpSLbLzwzNnD/J9OGVu7BdtREFzvcblqXzm1MRygyNPPEh3Zg/4yI17afyJtBkLJj5sdi8vQ1hDRkFLlIcQ7I2sZ4kCfxrwPnVZagf34Chu3dhMOqGajy5yINBo/D/EKla8hdqKWlwcZFSVPNTdt8pOtKJI0C%2bxHoQm8Tfq8zv/e3kzgGXSgLtJhEJSnjhVUhOOCaK4nfkY0jewcFYXBMTIMXXwmzpmnBgUmAz2JABo6p%2btQ/nNXgDeX4vqQV3I/2vfypNa6r6vKODH17gRC3I9DjWUZHg69Rtaunm8thNHJ37qvV/B0mqNjcGsyxmsNSD4Y8C';






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