"auto";

var appName = rawInput("请输入应用名称");
launchSettings(getPackageName(appName));
while(!click("强制停止"));