if(
    $('select#attribute' + value.honda_model).val() != "" &&
    $('select#attribute' + value.honda_year).val() != "" &&
    $('select#attribute' + value.honda_design).val() != ""
) {

    if($('select#attribute' + value.honda_rim_tape).val() == ""){
        value.honda_rim_tape_value = 25;
    }
    if($('select#attribute' + value.honda_spoke_c).val() == ""){
        value.honda_spoke_c_value = 27;
    }
    if($('select#attribute' + value.honda_fork).val() == ""){
        value.honda_fork_value = 29;
    }
    if (
        $('select#attribute' + value.honda_model).val() == value.honda_model_value &&
        $('select#attribute' + value.honda_year).val() == value.honda_year_value &&
        $('select#attribute' + value.honda_design).val() == value.honda_design_value &&
        $('select#attribute' + value.honda_rim_tape).val() == value.honda_rim_tape_value &&
        $('select#attribute' + value.honda_spoke_c).val() == value.honda_spoke_c_value &&
        $('select#attribute' + value.honda_fork).val() == value.honda_fork_value
    ) {
        $('#image-main').attr('src', value.small_image);
        $('#image-main').attr('data-zoom-image', value.full_image);
    }

} else {
    $('#image-main').attr( 'src', default_small_image );
    $('#image-main').attr( 'data-zoom-image', default_full_image );

}