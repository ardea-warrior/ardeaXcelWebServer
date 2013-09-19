

function prepareDemo2() {
    var itemsTitle = {
        1: {'title': 'in 2 days'},
        2: {'title': 'a week'},
        3: {'title': 'in 2 weeks'},
        4: {'title': 'a month'},
        5: {'title': 'in 2 months'},
        6: {'title': 'in 3 months'},
        7: {'title': 'in 6 months'},
        8: {'title': 'a year'},
        7: {'title': 'in 2 years'},
        7: {'title': 'in 3 years'}
    }
    function prepareSelectBox() {
        $.each(itemsTitle, function (i, item) {
            $('#inputTimes').append($('<option>', { 
                value: item.title,
                text : item.title 
            }));
        });
    }
    
    prepareSelectBox();
    $('input[id*="input"]').change(function() {
        var data = getModDefaultParams();
        data.sessionid = modSession.sessionid;
        data.session = 'live';
        data.module = 'demo2';
        data.run = 'calculate';
        
        data[$(this).attr('id')] = $(this).val(); 
        modServerPost(data, function(transport) {
            updateResult(transport);
        }); 
    });    
    
    $('#inputTimes').change(function() {
        var data = getModDefaultParams();
        data.sessionid = modSession.sessionid;
        data.session = 'live';
        data.module = 'demo2';
        data.run = 'calculate';
        data.inputTimes = $('#inputTimes').val(); 
        
        modServerPost(data, function(transport) {
            updateResult(transport);
        }); 
    });
    
    function updateResult(transport) {
        
        for(var i in transport) {
            $('#' + i).html(transport[i]);
        }
         var chart = $('#container-chart').highcharts();
         chart.series[0].setData([transport['data1-value']]);
         chart.series[1].setData([transport['data2-value']]);
    }
    
    function initFirst() {
        var data = getModDefaultParams();
        data.sessionid = modSession.sessionid;
        data.session = 'live';
        data.module = 'demo2';
        data.run = 'calculate';
        
        modServerPost(data, function(transport) {
            updateResult(transport);
        });         
    }
    initFirst();
    
}

prepareDemo2();

$(function() {
    $('#container-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Chart'
        },
        legend: {
            backgroundColor: '#FFFFFF',
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
                name: 'Savings before Retirement',
                data: [5]
            }, {
                name: 'Savings during Retirement',
                data: [2]
            }]
    });
});