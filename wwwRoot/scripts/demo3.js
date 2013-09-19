

function prepareDemo3() {
    var itemsTitle = {
        1: {'title': 'Whole Life Insurance'},
        2: {'title': 'Whole Life Annuity'},
    }
    function prepareSelectBox() {
        $.each(itemsTitle, function (i, item) {
            $('#inputTypeOfInsurance').append($('<option>', { 
                value: item.title,
                text : item.title 
            }));
        });
        for( var i=1 ; i<100 ; i++ ) {
            $('#inputAge').append($('<option>', { 
                value: i,
                text : i 
            }));            
        }
        $('#inputAge').val(40);
    }
    
    prepareSelectBox();
    $('input[id*="input"]').change(function() {
        proc(this);
    });    
    
    $('select[id*="input"]').change(function() {
        proc(this);
    });
    
    function proc(el){
        var data = getModDefaultParams();
        data.sessionid = modSession.sessionid;
        data.session = 'live';
        data.module = 'demo3';
        data.run = 'calculate';
        data[$(el).attr('id')] = $(el).val(); 
        
        modServerPost(data, function(transport) {
            updateResult(transport);
        });         
    }
    
    function updateResult(transport) {
        for(var i in transport) {
            $('#' + i).html(transport[i]);
        }
    }
    
    function initFirst() {
        var data = getModDefaultParams();
        data.sessionid = modSession.sessionid;
        data.session = 'live';
        data.module = 'demo3';
        data.run = 'calculate';
        
        modServerPost(data, function(transport) {
            updateResult(transport);
        });         
    }
    initFirst();
    
}

prepareDemo3();

