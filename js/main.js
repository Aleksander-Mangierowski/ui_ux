$(function() {
    const headers = $('.week-day .header');

    headers.on('click', e =>  {        
        const header = $(e.target).closest('.header');
        header.toggleClass('open');

        header.siblings('.hours').slideToggle();
    });


    
    const hours = $('.week-day .hours > li');
    hours.on('click', e => {
        const totalHoursSpan = $(e.target).closest('.week-day').find('.whole-time span');
        let hoursValue = Number(totalHoursSpan.text());
        hoursValue = $(e.target).hasClass('active') ? --hoursValue : ++hoursValue;
        totalHoursSpan.text(hoursValue);

        $(e.target).toggleClass('active');
        
    })
});