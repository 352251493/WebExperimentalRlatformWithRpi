/**
 * Created by 郭欣光 on 2018/4/7.
 */

function getNodeInformation() {
    $.ajax({
        url: "/get_all_experimental_node",
        type: "POST",
        cache: false,//设置不缓存
        success: getNodeInformationSuccess,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function getNodeInformationSuccess(data) {
    if (data.indexOf("暂无实验节点！") == 0) {
        document.getElementById("nodeInformation").innerHTML = "<h2 align=\"center\">" + data + "</h2>";
    } else {
        var obj = JSON.parse(data);
        var experimentalNodeList = obj['experimentalNodeList'];
        var str = "";
        str += "<table class=\"table table-striped\">";
        str += "<tr>";
        str += "<td class=\"active\" align=\"center\"><b>节点IP</b></td>";
        str += "<td class=\"success\" align=\"center\"><b>使用时间</b></td>";
        str += "<td class=\"warning\" align=\"center\"><b>使用IP</b></td>";
        str += "<td class=\"danger\" align=\"center\"><b>状态</b></td>";
        str += "<td class=\"active\" align=\"center\"><b>操作</b></td>";
        str += "</tr>";
        for (var i = 0; i < experimentalNodeList.length; i++) {
            var experimentalNode = experimentalNodeList[i];
            str += "<tr>";
            str += "<td class=\"active\" align=\"center\">" + experimentalNode.ip + "</td>";
            if (experimentalNode.datetime == undefined || experimentalNode.datetime == null) {
                str += "<td class=\"success\" align=\"center\">无</td>";
            } else {
                str += "<td class=\"success\" align=\"center\">" + experimentalNode.datetime.split(".")[0] + "</td>";
            }
            if (experimentalNode.userId == undefined || experimentalNode.userId == null) {
                str += "<td class=\"warning\" align=\"center\">无</td>";
            } else {
                str += "<td class=\"warning\" align=\"center\">" + experimentalNode.userId + "</td>";
            }
            if (experimentalNode.status.indexOf("正常") == 0) {
                str += "<td class=\"danger\" align=\"center\"><span style=\"color: green\">" + experimentalNode.status + "</span></td>";
            } else {
                str += "<td class=\"danger\" align=\"center\"><span style=\"color: red\">" + experimentalNode.status + "</span></td>"
            }
            str += "<td class=\"active\" align=\"center\">\n";
            if (experimentalNode.status.indexOf("正常") == 0) {
                str += "<button type=\"button\" class=\"btn btn-warning\">错误</button>\n";
            } else {
                str += "<button type=\"button\" class=\"btn btn-success\">正常</button>\n";
            }
            str += "<button type=\"button\" class=\"btn btn-danger\">删除</button>\n";
            str += "</td>";
            str += "</tr>";
        }
        str += "</table>";
        document.getElementById("nodeInformation").innerHTML = str;
    }
}

$(document).ready(function () {
    getNodeInformation();
});