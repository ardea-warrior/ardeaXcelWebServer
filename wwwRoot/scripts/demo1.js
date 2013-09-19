function countAdd() {
    sendToServer($('#add1').val() + "+" + $('#add2').val(), function(transport) {
        $('#resultAdd').val(transport.result)
    })
}

function prepareDemo1() {
    var itemsTitle = {
        1: {'title': 'Weight and mass'},
        2: {'title': 'Distance'},
        3: {'title': 'Time'},
        4: {'title': 'Pressure'},
        5: {'title': 'Force'},
        6: {'title': 'Energy'},
        7: {'title': 'Power'},
        8: {'title': 'Magnetism'},
        7: {'title': 'Temperature'},
        7: {'title': 'Liquid measure'}
    }

    var detailItem = {
        1: [{'title': 'Gram', 'code': '"g"'}, {'title': 'Slug', 'code': '"sg"'},
            {'title': 'Pound mass (avoirdupois)', 'code': '"lbm"'}, {'title': 'U (atomic mass unit)', 'code': '"u"'},
            {'title': 'Ounce mass (avoirdupois)', 'code': '"ozm"'}],
        2: [{'title': 'Meter', 'code': '"m"'}, {'title': 'Statute mile', 'code': '"mi"'},
            {'title': 'Nautical mile', 'code': '"Nmi"'}, {'title': 'Inch', 'code': '"in"'},
            {'title': 'Foot', 'code': '"ft"'}, {'title': 'Yard', 'code': '"yd"'},
            {'title': 'Angstrom', 'code': '"ang"'}, {'title': 'Pica (1/72 in.)', 'code': '"Pica"'}
        ]
                
    }
    
    function doConvert() {
        sendToServer('CONVERT(' +$('#unit_val1').val() + ',' +  $('#choose_unit_from').val() + ',' + $('#choose_unit_to').val() + ')', function(transport) {
            $('#unit_val2').val(transport.result)
        })
    }
    
    function prepareSelectBox() {
        $.each(itemsTitle, function (i, item) {
            $('#choose_unit').append($('<option>', { 
                value: i,
                text : item.title 
            }));
        });
        $('#choose_unit').change(function() {
            setSubItem($(this).val()); 
            doConvert();
        });
        setSubItem("1"); 
        $('#choose_unit_from').change(function() {
            doConvert();
        });
        $('#choose_unit_to').change(function() {
            doConvert();
        });        
    }
    
    
    
    prepareSelectBox();
    
    function setSubItem(key) {
        var items = detailItem[key];
        $('#choose_unit_from').html('');
        $('#choose_unit_to').html('');
        if ( typeof(items) != 'undefinded') {
            $.each(items, function (i, item) {    
                $('#choose_unit_from').append($('<option>', { 
                    value: item.code,
                    text : item.title 
                }));        
                $('#choose_unit_to').append($('<option>', { 
                    value: item.code,
                    text : item.title 
                }));                        
            }
        );
        
        }
    }
}

prepareDemo1();