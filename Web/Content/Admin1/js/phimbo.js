﻿function phimbo() {
    $('#Display').empty();
    $.ajax({
        type: 'GET',
        url: 'https://localhost:44301/api/TVSeries',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var str = '<div class="row"><div class="col-10"> <h1 class="h3 mb-2 text-gray-800">Danh sách phim bộ</h1></div><div class="col-2"><div style="float: right"><button type="button" class="btn btn-success" onclick="addepisode(\'' + val.ID + '\')">Thêm</button></div></div></div > <br /> <div class="row">';
            $.each(data, function (key, val) {
                str += '<div class="col-lg-3 col-md-4 col-sm-6 col-12"><div class="card mb-5 box-shadow" ><div style="height:330px"><a href=""><img class="card-img-top" src="/Images/Index/' + val.Images + '" alt="Card image cap"></a></div><div class="card-body" style="margin-left:-15px"><p class="card-text" style="text-align:left;overflow: hidden;-webkit-line-clamp:1;display: -webkit-box;-webkit-box-orient: vertical;"><b>Tên phim : </b>' + val.Name + '</p><p class="card-text" style="overflow: hidden;-webkit-line-clamp:3;display: -webkit-box;-webkit-box-orient: vertical;"><b>Nội dung : </b>' + val.Descripton + '</p><p class="card-text"><b>Thể Loại : </b>' + val.IDCategory + '</p><p class="text-muted"><b>Số Tập :</b>120 Phust</p><p class="card-text"><b>Năm Phát Hành : </b>' + val.Year + '</p> <div class="d-flex justify-content-between align-items-center"> <div>Thêm tập </div><div>Sửa</div></div></div ></div ></div >';
            });
            str += '</div> ';
            $('#Display').html(str);
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });
}
function addepisode(TVSeriesID) {
    $('#Display').empty();
    var str = '<div class="container-fluid link"><form action = "/Admin/DSPhim/ThemTapPhim/2" method = "post" > <fieldset><legend></legend><div class="editor-label"><p>Tên Phim : <b>' + TVSeriesID.toString() + '</b> </p></div><div class="editor-field"></div><div class="editor-label"><p>Thêm tập : <b>2</b></p></div>';
    str += '<div class="editor-label"> <b>Link Phim</b></div><div class="editor-field"><input class="form-control" id="Link" name="Link" type="text" value=""><span class="field-validation-valid" data-valmsg-for="Link" data-valmsg-replace="true"></span> </div><p><input type="submit" value="Thêm" class="btn btn-success"></p></fieldset></form><div><a href="/Admin/DSPhim/CTTapPhimBo">Trở lại</a></div></div>';
    $('#Display').html(str);
    $.ajax({
        type: 'POST',
        url: 'https://localhost:44301/api/TVSeries?TVSeriesID=',
        data: {
            ID ='100',
            Link: $('#Link').val().toString(),
            ID2 = TVSeriesID.val().toString(),
        },
        dataType: 'json',
        success: function (data) {
            if (data == false)
                alert("Thêm Không Thành Công");
            else {
                alert("Thêm Thành Công");
                $('#Display').ready(function () {
                    phimbo();
                });
            }
        }
    });
}