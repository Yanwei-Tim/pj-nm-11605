<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <%@include file="/common/common_include.jsp"%>
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <title>tooltip</title>

    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->

    <link href="<%=request.getContextPath()%>/scripts/bootstrap-3.3.7/css/bootstrap.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/scripts/font-awesome-4.6.3/css/font-awesome.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/scripts/bootstrap-datetimepicker2.3.11/bootstrap-datetimepicker.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/css/pageStyle.css" rel="stylesheet">

    <script src="<%=request.getContextPath()%>/scripts/jquery1.12.4/jquery.js"></script>
    <script src="<%=request.getContextPath()%>/scripts/bootstrap-3.3.7/js/bootstrap.js"></script>
</head>
<body>

<br>
<br>
<div class="alert alert-info">tooltip</div>
<p></p>

<h4>工具提示（Tooltip）插件 - 锚</h4>
这是一个 <a href="#" class="tooltip-test" data-toggle="tooltip" title="默认的 Tooltip">默认的 Tooltip</a>.
这是一个 <a href="#" class="tooltip-test" data-toggle="tooltip" data-placement="left" title="左侧的 Tooltip">左侧的 Tooltip</a>.
这是一个 <a href="#" data-toggle="tooltip" data-placement="top" title="顶部的 Tooltip">顶部的 Tooltip</a>.
这是一个 <a href="#" data-toggle="tooltip" data-placement="bottom" title="底部的 Tooltip">底部的 Tooltip</a>.
这是一个 <a href="#" data-toggle="tooltip" data-placement="right" title="右侧的 Tooltip">右侧的 Tooltip</a>
<br>
<h4>工具提示（Tooltip）插件 - 按钮</h4>
<button type="button" class="btn btn-default" data-toggle="tooltip"  title="默认的 Tooltip"> 默认的 Tooltip</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="左侧的 Tooltip">左侧的 Tooltip
</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="顶部的 Tooltip">顶部的 Tooltip
</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="底部的 Tooltip">底部的 Tooltip
</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="右侧的 Tooltip">右侧的 Tooltip</button>
<script>
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
</script>



<br>
<br>
<div class="alert alert-info">tooltip</div>

<p></p>

<div style="padding: 100px 100px 10px;">
    这是一个
    <a href="#" class="tooltip-show" data-toggle="tooltip" title="show">Tooltip 方法 show</a>.
    这是一个
    <a href="#" class="tooltip-hide" data-toggle="tooltip" data-placement="left" title="hide">Tooltip 方法 hide</a>.
    这是一个
    <a href="#" class="tooltip-destroy" data-toggle="tooltip" data-placement="top" title="destroy">Tooltip 方法 destroy</a>.
    这是一个
    <a href="#" class="tooltip-toggle" data-toggle="tooltip" data-placement="bottom" title="toggle">Tooltip 方法 toggle</a>.
    <br><br><br><br><br><br>
    <p class="tooltip-options" >
        这是一个
        <a href="#" data-toggle="tooltip" title="<h2>'am Header2 </h2>">Tooltip 方法 options</a>.
    </p>
    <script>
        $(function () { $('.tooltip-show').tooltip('show');});
        $(function () { $('.tooltip-hide').tooltip('hide');});
        $(function () { $('.tooltip-destroy').tooltip('destroy');});
        $(function () { $('.tooltip-toggle').tooltip('toggle');});
        $(function () { $(".tooltip-options a").tooltip({html : true });});
    </script>
</div>



<br>
<br>
<div class="alert alert-info">tooltip</div>

<p></p>

        <h4>工具提示（Tooltip）插件 - 锚</h4>
        这是一个 <a href="#" class="tooltip-show" data-toggle="tooltip"
                title="默认的 Tooltip">默认的 Tooltip
    </a>.

        <script>
            $(function () { $('.tooltip-show').tooltip('show');});
            $(function () { $('.tooltip-show').on('show.bs.tooltip', function () {
                alert("Alert message on show");
            })});
        </script>
</body>
</html>