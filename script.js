const ctx = document.getElementById('myChart');
let url = 'https://run.mocky.io/v3/15e6605b-b210-4658-8ac8-09071fc42473';
// let url = 'https://run.mocky.io/v3/8f562dcb-c6c2-48a8-a7cf-6ba513440d60'
let newData = []
const fetchData = async() =>{
    try{
        debugger;
        let data = await fetch(url);
        let res = await data.json();
        if(res.message === 'success'){
            res.response.forEach((log) => {
                 newData.push(log)
            })
        }
        //
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Canceled By Agent', 'Stale Marked By APB', 'Zero Attempts Made', 'Total Abandoned Calls', 'Total Answered By Customer', 'Total Not Connected After 3 Attempts And SMS Sent To Customer', 'waitingFor2ndAttempts', 'waitingFor3rdAttempts'],
              datasets: [{
                label: 'Abandoned and CallBack Campaigns',
                data: [newData[0].totalAbandonedCalls, newData[0].totalAnsweredByCustomer, newData[0].totalNotConnectedAfter3AttemptsAndSMSSentToCustomer, newData[0].StaleMarkedByAPB, newData[0].CanceledByAgent, newData[0].ZeroAttemptsMade, newData[0].waitingFor2ndAttempts, newData[0].waitingFor3rdAttempts],
                borderWidth: 2,
                responsive: false,
                maintainAspectRatio: true,
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        //

    }catch(err){
        console.log(err)
    }

}
fetchData();

  