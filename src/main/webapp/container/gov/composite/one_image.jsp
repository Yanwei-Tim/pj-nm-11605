<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <link href="<%=request.getContextPath()%>/common/scripts/ztree-3.5.24/metrStyle-cd/metroStyle.css" rel="stylesheet">
    <script src="<%=request.getContextPath()%>/common/scripts/ztree-3.5.24/jquery.ztree.all.js"></script>
    <title>一张图综合检测预警</title>
    <style type="text/css">
        /*企业平面图展示设备信息，替换bootstrap样式*/
        .popover-content{
            padding: 0;
        }
    </style>
</head>
<body>
<div class="content clearfix">
    <div class="wrap">
        <div class="tree-left left">
            <div class="input-group input-group-sm" style="z-index: 0;">
                <input type="text" class="form-control" id="searchText" placeholder="查  询"/>
                <span class="input-group-btn">
                        <button class="btn btn-default" id="searchBtn" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
            </div>
            <div class="ztree oneImageTree">
            </div>
        </div>
        <div class="main-right right">
            <iframe id="mapFrame" name="mapFrame" src="${pageContext.request.contextPath}/common/gis/map.jsp" style="overflow: hidden;" frameborder="0"></iframe>
        </div>

    </div>
</div>

<%@include file="/container/gov/composite/enterprise_info_dialog.jsp" %>
<%@include file="/container/gov/composite/portstatus_form_view.jsp" %>
<%@include file="/container/gov/composite/enterprise_plotting.jsp" %>
<script src="<%=request.getContextPath()%>/container/gov/composite/scripts/one_image.js"></script>
</body>
</html>
