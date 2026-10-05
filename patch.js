// YouTube / Gemini 没有可直接读取客户端 IP 的 /cdn-cgi/trace 接口；保留日志路由显示，避免误报网络错误。
const _probe=probe;
probe=async function(t){
  if(t.host==='www.youtube.com'||t.host==='gemini.google.com') throw Error('该站点不提供可读取的出口 IP，请查看 v2rayN 日志');
  return _probe(t);
};

// 清理 v2rayN 日志中的连接方向和内部策略组数字 ID，只保留可读名称。
const _parseLogText=parseLogText;
parseLogText=function(text){
  const cleaned=text.replace(/\[(socks\s*(?:->|>>)+\s*)?(\d{8,})-/g,'[');
  return _parseLogText(cleaned);
};
