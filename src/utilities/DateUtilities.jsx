/*
 * Creates strings based on dates information
 * 
 * 
 * 
 */


export function GetFullDateString(date,endDate){
    if (typeof(date)=== 'string'){return date;}
    
    let tempDate;
    if (endDate){
     tempDate = new Date(endDate);

    }
    else{
        tempDate = new Date(date);
        tempDate.setHours(date.getHours()+1);
    }

    let result;
    let tempDateString1;
    let tempDateString2;
    if(date.getMinutes()!==0){
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
            timeZone: 'America/Chicago'
          }).format(date);
          
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }
    else
    {
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
          }).format(date);
    
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }

    
    return result;
}


export function GetWeekdayMonthDayString(date){
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month:'long',
        day:'numeric',
        timeZone: 'America/Chicago'
      }).format(date);
}

export function GetTwoTimesString(date,endDate){
    if (typeof(date)=== 'string'){return date;}
    
    let tempDate; 
    if (endDate){
     tempDate = new Date(endDate);

    }
    else{
        tempDate = new Date(date);
        tempDate.setHours(date.getHours()+1);
    }

    let result;
    let tempDateString1;
    let tempDateString2;
    if(date.getMinutes()!==0){
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
            timeZone: 'America/Chicago'
          }).format(date);
          
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }
    else
    {
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
          }).format(date);
    
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }

    
    return tempDateString1+" - "+tempDateString2+" (Chicago Time)";
}