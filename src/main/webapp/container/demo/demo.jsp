<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/common/common_include.jsp"%>
    <title>Demo</title>
</head>
<body>
<div class="content content1 clearfix">
    <div class="wrap">
        <div class="mainBox">
            <div class="dealBox">
                <div class="sideTitle left">
                        <span class="blueMsg">
                            <img class="tipImg" src="<%=request.getContextPath()%>/common/images/searchTip.png" alt=""/>
                            <span class="text">查询</span>
                        </span>
                </div>
                <div class="queryBox marginLeft0">
                    <p>
                        <label for="s_name">姓名：</label> <input type="text" id="s_name" class="form-control" />
                        <label for="s_age">年龄：</label> <input type="text" id="s_age" class="form-control" />
                    </p>
                </div>
                <button type="button" id="search" class="btn btn-md btn-success queryBtn"><i class="btnIcon query-icon"></i><span>查询</span></button>
                <p class="btnListP">
                    <button id="add" type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#demoForm">
                        <i class="btnIcon add-icon"></i><span>新建</span>
                    </button>
                    <button id="update" type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#demoForm">
                        <i class="btnIcon edit-icon"></i><span>修改</span>
                    </button>
                    <button id="remove" type="button" class="btn btn-sm btn-danger">
                        <i class="btnIcon delf-icon"></i><span>删除</span>
                    </button>
                </p>
            </div>
            <div class="tableBox">
                <table id="table" class="table table-striped table-responsive">
                </table>
            </div>
        </div>
    </div>
</div>
<!--添加表单-->
<div class="modal fade" id="demoForm" data-form-type="add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 800px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title form-title">添加</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">姓名：</label>
                        <div class="col-sm-10">
                            <input type="hidden" id="id" name="id">
                            <input type="hidden" id="removeId" name="removeId">
                            <input type="text" id="name" name="name" class="form-control"
                                   data-message="用户名不能为空"
                                   data-easytip="position:top;class:easy-red;"
                            />
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="age" class="col-sm-2 control-label">年龄：</label>
                        <div class="col-sm-10">
                            <input type="text" id="age" name="age" class="form-control"
                                   data-easyform="uint:0 100;"
                                   data-message="年龄必须为14~100范围内整数"
                                   data-easytip="position:top;class:easy-red;"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="age" class="col-sm-2 control-label">x坐标：</label>
                        <div class="col-sm-3">
                            <input type="text" id="longitude" name="longitude" class="form-control"
                                   data-easyform="float:8 10;"
                                   data-message="坐标必须为数字"
                                   data-easytip="position:top;class:easy-red;"
                            />
                        </div>
                        <label for="age" class="col-sm-2 control-label">y坐标：</label>
                        <div class="col-sm-3">
                            <input type="text" id="latitude" name="latitude" class="form-control"
                                   data-easyform="float:8 10;"
                                   data-message="坐标必须为数字"
                                   data-easytip="position:top;class:easy-red;"
                            />
                        </div>
                        <button type="button" class="btn btn-primary" id="mapMarkBtn">标绘</button>
                    </div>
                    <div class="form-group">
                        <label for="attachment" class="col-sm-2 control-label">附件：</label>
                        <div class="col-sm-10">
                            <jsp:include page="/common/scripts/fine-uploader-5.11.8/templates/upload-template.jsp" flush="false" ></jsp:include>
                            <div id="fine-uploader-gallery"></div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save">保存</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>
<%@include file="/common/gis/map_mark.jsp"%>
<script src="<%=request.getContextPath()%>/container/demo/scripts/demo.js"></script>
</body>
</html>
