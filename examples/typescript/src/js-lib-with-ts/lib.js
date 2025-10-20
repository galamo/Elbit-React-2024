function getUserMetric(metric) {
  return metric.map((u) => u.numberOfLoginActions);
}
function test(a) {
  return 1 + a;
}
module.exports = { getUserMetric, test };
