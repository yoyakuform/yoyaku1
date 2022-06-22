$(function () {
    // カレンダー
    $(function () {
        $('input[name="date01"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
    
    // カレンダー
    $(function () {
        $('input[name="date02"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
    
    // カレンダー
    $(function () {
        $('input[name="date03"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date01 = $('input[name="date01"]').val();
        var date02 = $('input[name="date02"]').val();
        var date03 = $('input[name="date03"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);
        var tel = $('input[name="tel"]').val();
        var text = $('input[name="text"]').val();

        var msg = `●第一希望日：${date01}\n●第二希望日：${date02}\n●第三希望日：${date03}\n●人数：${number}\n●氏名：${names}\n●電話番号：${tel}\n●備考：${text}`;
        sendText(msg);

        return false;
    });
});
