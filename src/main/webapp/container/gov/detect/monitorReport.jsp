<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>监督性监测报告</title>
    <%--<%@include file="/common/msgSend/msgSend.jsp"%>--%>
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
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="">监测名称：</label> <input type="text" id="s_monitorName" name="monitorName" style="width: 207px;" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="">所属网格：</label>
                                <select id="s_blockLevelId" name="blockLevelId" class="form-control s_blockLevelId" style="width: 266px;">
                                </select>
                                -
                                <select id="s_blockId" name="blockId" class="form-control s_blockId" style="width: 266px;">
                                </select>
                            </div>

                        </form>
                    <p></p>
                    <form class="form-inline">
                        <div class="form-group">
                            <label for="">类&nbsp;&nbsp;型：</label>
                            <select id="s_type" name="type" class="form-control">
                                <option value="">全部</option>
                                <option value="1">水源地监测报告</option>
                                <option value="2">大气污染防治监测报告</option>
                                <option value="3">水污染防治监测报告</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">监测日期：</label>
                            <div id="" class="input-group date form_datetime" data-date="" data-date-format="yyyy-mm-dd hh:ii" data-link-field="sendTime">
                                <input class="form-control" size="16" id="start_monitorTime" name="start_monitorTime"  type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                            </div>
                            -
                            <div class="input-group date form_datetime" data-date="" data-date-format="yyyy-mm-dd hh:ii" data-link-field="sendTime">
                                <input class="form-control" size="16" id="end_monitorTime" name="end_monitorTime"  type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                            </div>
                        </div>
                    </form>
                </div>
                <button type="button" id="search" class="btn btn-md btn-success queryBtn"><i class="btnIcon query-icon"></i><span>查询</span></button>
                <button type="button" class="btn btn-default" onclick="resetQuery()"><i class="glyphicon glyphicon-repeat"></i><span>重置</span></button>
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
<div class="modal fade" id="demoForm" data-backdrop="static" data-form-type="add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 824px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title form-title">添加</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">监测名称<span class="text-danger">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="hidden" id="id" name="id">
                            <input type="hidden" id="status" name="status">
                            <input type="hidden" id="removeId" name="removeId">
                            <input type="text" id="monitorName" name="monitorName" class="form-control"
                                   data-message="不能为空"
                                   data-easytip="position:top;class:easy-red;"
                            />
                        </div>

                        <label for="" class="col-sm-2 control-label">监测时间<span class="text-danger">*</span>：</label>
                        <div class="col-sm-4">
                            <div id="" class="input-group date form_datetime" data-date="" data-date-format="yyyy-mm-dd hh:ii" data-link-field="sendTime">
                                <input class="form-control" size="16" id="monitorTime" name="monitorTime"  type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="type" class="col-sm-2 control-label">监测项目<span class="text-danger">*</span>：</label>
                        <div class="col-sm-4">
                            <select id="type" name="type" class="form-control">
                                <option value="1">水源地监测报告</option>
                                <option value="2">大气污染防治监测报告</option>
                                <option value="3">水污染防治监测报告</option>
                                <option value="4">噪声监测报告</option>
                                <option value="5">土壤污染防治监测报告</option>
                            </select>
                        </div>

                        <label for="monitoringType" class="col-sm-2 control-label">监测类型<span class="text-danger">*</span>：</label>
                        <div class="col-sm-4">
                            <select id="monitoringType" name="monitoringType" class="form-control">
                                <option value="1">监督性监测</option>
                                <option value="2">企业委托监测</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">监测人员<span class="text-danger">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" id="monitorPersonName" name="monitorPersonName" class="form-control"
                                   data-message="不能为空"
                                   data-easytip="position:top;class:easy-red;"
                            />
                        </div>
                        <label for="monitorPhone" class="col-sm-2 control-label">联系方式：</label>
                        <div class="col-sm-4">
                            <input type="text" id="monitorPhone" name="monitorPhone" class="form-control"
                            />
                        </div>
                    </div>
                    <%--<div class="form-group">--%>
                        <%--<label for="" class="col-sm-2 control-label">所属网格<span class="text-danger">*</span>：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<select id="blockLevelId" name="blockLevelId" class="form-control">--%>
                            <%--</select>--%>
                        <%--</div>--%>

                        <%--<label for="" class="col-sm-2 control-label"></label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<select id="blockId" name="blockId" class="form-control">--%>
                            <%--</select>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <%--<div class="form-group">--%>
                        <%--<label for="" class="col-sm-2 control-label">网格负责人<span class="text-danger">*</span>：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<input type="text" id="blockPersonName" name="blockPersonName" class="form-control"--%>
                                   <%--data-message="不能为空"--%>
                                   <%--data-easytip="position:top;class:easy-red;"--%>
                            <%--/>--%>
                        <%--</div>--%>
                        <%--<label for="" class="col-sm-2 control-label">联系方式：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<input type="text" id="blockPersonPhone" name="blockPersonPhone" class="form-control"--%>
                            <%--/>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">备注：</label>
                        <div class="col-sm-10">
                            <textarea id="remark" name="remark" class="form-control" rows="4" cols="50" placeholder=""></textarea>
                        </div>
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
                <button type="button" class="btn btn-primary" id="save">发送</button>
                <button type="button" class="btn btn-default btn-cancel" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>
<%@include file="/common/gis/map_mark.jsp"%>
<script src="<%=request.getContextPath()%>/container/gov/dispatch/scripts/loadBlockLevelAndBlockOption.js"></script>
<script src="<%=request.getContextPath()%>/container/gov/detect/scripts/monitorReport.js"></script>
</body>
</html>
