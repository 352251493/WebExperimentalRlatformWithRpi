/**
 * Created by 郭欣光 on 2018/2/22.
 */
function getCoursesCountByTab() {
    var coursesTab = ["Python", "C/C++", "信息安全", "Linux", "Java", "PHP", "HTML5", "NodeJS", "Docker"];
    var obj = new Object();
    obj.coursesTab = coursesTab + "";
    $.ajax({
        url: "/get_courses_count_by_tab",
        type: "POST",
        data: obj,
        cache: false,//设置不缓存
        success: getCoursesCountByTabSuccess,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function getCoursesCountByTabSuccess(data) {
    var obj = JSON.parse(data);
    var coursesCountList = obj['coursesCountList'];
    document.getElementById("pythonCoursesCount").innerHTML = coursesCountList[0];
    document.getElementById("cppCoursesCount").innerHTML = coursesCountList[1];
    document.getElementById("informationSafetyCoursesCount").innerHTML = coursesCountList[2];
    document.getElementById("linuxCoursesCount").innerHTML = coursesCountList[3];
    document.getElementById("javaCoursesCount").innerHTML = coursesCountList[4];
    document.getElementById("phpCoursesCount").innerHTML = coursesCountList[5];
    document.getElementById("html5CoursesCount").innerHTML = coursesCountList[6];
    document.getElementById("nodejsCoursesCount").innerHTML = coursesCountList[7];
    document.getElementById("dockerCoursesCount").innerHTML = coursesCountList[8];
}

$(document).ready(function () {
    getCoursesCountByTab();
});
